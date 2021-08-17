import React from "react";
import { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export const ToDoItem = ({ item, handleDel }) => {
  const [check, setCheck] = useState(false);

  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col md={8}>
          <Form.Label className="label">
            {check ? <del>{item}</del> : item}
          </Form.Label>
        </Col>
        <Col md={2}>
          <Button onClick={() => handleDel(item)} className="delbtn">
            <img src="./images/delete.png" alt="" className="delicon" />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
