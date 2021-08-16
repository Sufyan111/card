import React from 'react';
import { Card } from 'react-bootstrap';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ()=>{
    return(
        <React.Fragment>
            <Card className='todolist'>
            <Card.Title>
              To Do List
          </Card.Title>
          <ToDoItem />
          <ToDoItem />

            </Card>
        </React.Fragment>
    )
}