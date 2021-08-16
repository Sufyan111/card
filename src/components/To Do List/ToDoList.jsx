import React from 'react';
import { Card } from 'react-bootstrap';

export const ToDoList = ()=>{
    return(
        <React.Fragment>
            <Card className='todolist'>
            <Card.Title>
              To Do List
          </Card.Title>
            </Card>
        </React.Fragment>
    )
}