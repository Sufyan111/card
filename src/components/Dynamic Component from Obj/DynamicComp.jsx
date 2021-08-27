import React from 'react';
import { CompData } from '../../reducers/CompData';
import "./Dynamic.css"
import { Card } from 'react-bootstrap';


export const DynamicComp = () => {
    return (
        <div className="divcard">
            <h3>My Data:</h3>
            {
                Object.keys(CompData).map((key) => (
                    <Card className="card"> <h1>{key}</h1> </Card>
                ))
            }
        </div>
    );
};