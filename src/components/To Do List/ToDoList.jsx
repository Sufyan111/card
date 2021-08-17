import React from 'react';
import { Card } from 'react-bootstrap';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ( {todoitems, handleDel} )=>{
    return(
            <Card className='todolist'>
            <Card.Title className="cardtitle">
              To Do List
          </Card.Title>
          <Card.Img variant="top" src="./images/List.png" className="listimg" />
         {todoitems.map((item)=>(
             <ToDoItem item={item} handleDel={handleDel}/>
         ))}
            </Card>
    )
}