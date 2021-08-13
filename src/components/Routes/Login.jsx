import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { userdata } from "../../reducers/Config";
import "./Login.css";

export const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const eleUsername = useRef();
  const elePassword = useRef();

  useEffect(() => {
    if (userName.length >= 5 && password.length >= 6) {
      setIsValid(false);
      if (
        userdata.Username === userName.trim() &&
        userdata.password === password.trim()
      ) {
        setIsSuccess(true);
      }
    } else setIsValid(true);
  }, [userName, password]);
  useEffect(() => {
    if (localStorage.getItem("userName")) {
      eleUsername.current.value = localStorage.getItem("userName");
      elePassword.current.value = localStorage.getItem("password");
    } else {
      eleUsername.current.focus();
    }
  });
  return (
    <div>
      {isSuccess ? (
        <p>logged in!!!!!</p>
      ) : (
        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <Form.Control
              type="text"
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
              ref={eleUsername}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              ref={elePassword}
            />

            <Button className="logbutton" disabled={isValid}>
              Submit
            </Button>
            <Button className="logbutton">Cancel</Button>
            {!isSuccess && !isValid && <p>please</p>}
          </Card>
        </div>
      )}
    </div>
  );
};
