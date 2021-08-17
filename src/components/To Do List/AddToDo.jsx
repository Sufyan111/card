import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <Card className="addtodo">
      <Card.Title>Add To Do</Card.Title>
      <Card.Img variant="top" src="./images/addTodo.jpg" className="addimg"/>
      <Row>
        <Col></Col>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Add New Item"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="input"
          />
        </Col>
        <Col md={3}>
          <Button
            disabled={newTodo === ""}
            onClick={() => {
              handleAdd(newTodo);
              setNewTodo(" ");
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
