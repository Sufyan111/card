import React from 'react';
import {Card, Row, Col, Form} from 'react-bootstrap'

export const ToDoItem = ({item})=>{
    return(
        <Card className='todoitem'>
            <Row>
                <Col md={2}>
                    <Form.Check></Form.Check>
                </Col>
                <Col md={10}>
                    <Form.Label className='label'>Label text</Form.Label>
                </Col>
            </Row>
        </Card>
    )
}