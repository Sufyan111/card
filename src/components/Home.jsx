import React from "react";
import { ToDoList } from "./To Do List/ToDoList";
import { AddToDo } from "./To Do List/AddToDo";
import { Row, Col, Card } from "react-bootstrap";
import './To Do List/ToDoStyle.css'
import { useState } from "react";

export const Home = () => {
    const [todoitems, setTidoitems]= useState(["Learning React", "Getting Job"]);
  return (
    <React.Fragment>

      <Card className='home'>
          <Row>
            <Col>
              <AddToDo />
            </Col>
            <Col>
              <ToDoList todoitems={todoitems}/>
            </Col>
          </Row>
      </Card>
    </React.Fragment>
  );
};
