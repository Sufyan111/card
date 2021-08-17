import React from 'react';
import { Card } from 'react-bootstrap';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ( {todoitems, handleDel} )=>{
    return(
            <Card className='todolist'>
            <Card.Title>
              To Do List
          </Card.Title>
         {todoitems.map((item)=>(
             <ToDoItem item={item} handleDel={handleDel}/>
         ))}

            </Card>
    )
}