import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const ToggleComps = () => {
  const [clor, setClor] = useState("black");

  return (
    <div>
      <Card >
        <h1>PickupBiz</h1>
        <p>This is my content</p>
        <span style={{ color: `${clor}` }}>
          <h1>PDAC Course</h1>
        </span>
        <div>
          <Button
            onMouseOver={() => setClor("grey")}
            style={{ backgroundColor: "grey" }}
          >
            grey
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button
            onMouseOver={() => setClor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button
            onMouseOver={() => setClor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button
            onMouseOver={() => setClor("violet")}
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </Card>
    </div>
  );
};
