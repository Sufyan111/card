import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from 'axios'

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
 
  const handleApi=()=>{
        axios.get('http://localhost:300/emp').then(res=>{
            console.log(res)
        })
  }

  return (
    <div>
      <Row>
        <Col>
          <Button
            variant={cntr > 0 ? "primary" : "danger"}
            disabled={!(cntr > 0)}
            onClick={() => cntr > 0 && setCntr(cntr - 1)}
          >
            -
          </Button>
        </Col>

        <Col>
          <h1>{cntr}</h1>
        </Col>

        <Col>
          <Button
            variant={cntr < 10 ? "primary" : "danger"}
            disabled={!(cntr < 10)}
            onClick={() => cntr < 10 && setCntr(cntr + 1)}
          >
            +
          </Button>
        </Col>
        <br />
        <br />
        <Button onClick={handleApi}>Call My API</Button>
      </Row>
    </div>
  );
};
