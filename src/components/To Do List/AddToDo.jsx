import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <Card className="addtodo">
      <Card.Title>Add To Do</Card.Title>
      <Row>
        <Col md={9}>
          <Form.Control
            type="text"
            placeholder="Add New Item"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Col>
        <Col>
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
