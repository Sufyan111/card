import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { PianoChild } from './PianoChild';

export const PianoParent = () => {
    return (
        <div>
            
            <Row>
                <Col lg={4}>
                    <h1>Low</h1>
                    <PianoChild />
                </Col>
                <Col lg={4}>
                    <h1>Medium</h1>
                    <PianoChild />
                </Col>
                <Col lg={4}>
                    <h1>High</h1>
                    <PianoChild />
                </Col>

                </Row>    
    
        </div>
    );
};