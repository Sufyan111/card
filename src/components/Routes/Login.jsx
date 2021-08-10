import React from "react";
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

  useEffect(() => {
    if (userName.length >= 5 && password.length >= 6) {
      setIsValid(false);

      if (
        userdata.Username == userName.trim() &&
        userdata.password === password.trim()
      ) {
        setIsSuccess(true);
      }
    } else setIsValid(true);
  }, [userName, password]);

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
            />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
