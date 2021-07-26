import React from 'react';
import { Card } from 'react-bootstrap';

export const CardChild = (
    
) => {
return (
<div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CardImg} />
        <Card.Body>
            <Card.Title>{CardTitle}</Card.Title>
            <Card.Text>
                {CardText}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

</div>
);
};