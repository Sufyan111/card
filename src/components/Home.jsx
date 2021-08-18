import React from "react";
import { ToDoList } from "./To Do List/ToDoList";
import { AddToDo } from "./To Do List/AddToDo";
import { Row, Col, Card } from "react-bootstrap";
import "./To Do List/ToDoStyle.css";
import { useState } from "react";

export const Home = () => {
  const [todoitems, setTodoitems] = useState(["Add new item","Add new item","Add new item","Add new item","Add new item"]);

  const handleAdd = (newTodo) => {
    setTodoitems([...todoitems, newTodo]);
  };


  const handleDel = (curritem) => {
    const filtered = todoitems.filter((item) => item !== curritem);
    setTodoitems([...filtered]);
  };
  return (
    <React.Fragment>
      <Card className="home">
        <Row>
          <Col>
            <AddToDo handleAdd={handleAdd}/>
          </Col>
          <Col>
            <ToDoList todoitems={todoitems} handleDel={handleDel}/>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
