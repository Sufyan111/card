import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Card.css";

export const CardChild = ({ aamer }) => {
  return (
    <React.Fragment>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aamer.CardImage}/>
          <Card.Body>
            <Card.Title>{aamer.EmployeeName}</Card.Title>
            <h5>
              Dept: {aamer.Dept} <br />
              Salary: {aamer.Salary}
            </h5>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};
