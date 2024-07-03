import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [approvalStatus, setApprovalStatus] = useState(false);
  const [data, setData] = useState("");
  const [pssdString, setPssdString] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate()

  const { id, email } = useParams();
  // console.log("id", id);
  // console.log("email", email);
  const validatePassword = (id, pssdString) => {
    // console.log("working",pssdString)
    if (pssdString == id) {
      setApprovalStatus(true);
    } else {
      setApprovalStatus(false);
    }
  };
  const dataTransfer = async () => {
    let payload = {
      id: id,
      email: email,
    };
    setUserEmail(email);
    console.log("payload", payload);
    await axios
      .post("https://login-authentication-backend-1.onrender.com/api/user/reset_password", payload)
      .then((res) => {
        setPssdString(res.data.result.passwordresetstring);
      });
  };

  useEffect(() => {
    validatePassword(id, pssdString);
  }, [pssdString]);
  useEffect(() => {
    dataTransfer();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {};
    if (newPasswd === confirmPasswd) {
      console.log("working", userEmail);
      payload = {
        email: userEmail,
        newPassword: newPasswd,
      };
      await axios
        .post("http://localhost:5000/api/user/update_password", payload)
        .then((res) => {
          console.log("response", res.data.message);
        });
        navigate('/login')
    } else {
      setData(true)
    }
    console.log(payload);
  };

  return (
    <div className="resetPage">
      <div className="restContent">
        <h1 className="resetTitle">Reset Password</h1>
        <p className="resetDescription">
          Protect your account with a unique password
        </p>
        {approvalStatus ? (
          <div>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="resetForm"
            >
              <input
                type="password"
                id="newPasswd"
                placeholder="Password"
                value={newPasswd}
                onChange={(e) => {
                  setNewPasswd(e.target.value);
                }}
                required
              />

              <input
                type="password"
                id="ConfirmPasswd"
                placeholder="Confirm Password"
                value={confirmPasswd}
                onChange={(e) => {
                  setConfirmPasswd(e.target.value);
                }}
                required
              />
              <p className="errorMessage">{data?"Cresentials Mismatched":""}</p>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        ) : (
          "hello"
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
