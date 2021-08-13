import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "./CalCulator.css";

export const Calculator = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  // const [emi, setEmi] = useState(0);

  const handleCalEmi = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emilocal = repayAmount / (n * 12);
    return emilocal;
  };

  const emi = useMemo(() => handleCalEmi(), [p, n, r]);
  // useEffect(() => {
  //   handleCalEmi();
  // }, [p, n.r]);

  return (
    <div>
      <h1>EMI Calculator</h1>
      <Card
        id="card"
        style={{ width: "25rem", margin: "auto", padding: "30px" }}
      >
        <Form.Label>
          {" "}
          <b>
            {" "}
            <h3>Principal Amount:</h3>
          </b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Principal Amount"
          onChange={(e) => setP(e.target.value)}
        />
        <Form.Label>
          <b>
            <h3>Interest Rate:</h3>
          </b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Interest Rate"
          onChange={(e) => setR(e.target.value)}
        />
        <Form.Label>
          <b>
            <h3>No. of Years:</h3>
          </b>
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="No. of Years"
          onChange={(e) => setN(e.target.value)}
        />
        &nbsp;
        <Button variant="dark" onClick={handleCalEmi}>
          Calculate
        </Button>
        <br />
        <br />
        <h2>
          Emi : {emi} <br />
        </h2>
      </Card>
    </div>
  );
};
