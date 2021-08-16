import React from "react";
import { ToDoList } from "./To Do List/ToDoList";
import { AddToDo } from "./To Do List/AddToDo";
import { Row, Col, Card } from "react-bootstrap";
import './To Do List/ToDoStyle.css'

export const Home = () => {
  return (
    <React.Fragment>

      <Card className='home'>
          <Row>
            <Col>
              <AddToDo />
            </Col>
            <Col>
              <ToDoList />
            </Col>
          </Row>
      </Card>
    </React.Fragment>
  );
};
