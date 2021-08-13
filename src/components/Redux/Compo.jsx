import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllGroups } from "../State/Selector/getAllGroups";

export const Compo = () => {
  const selector = useSelector(getAllGroups);
  const [data, setData] = useState(selector);
  console.log(data);
  return (
    <div>
      {data.map((items) => {
        return (
          <Card style={{ width: "18rem",display:"", margin:"15px 0 15px 0"}}>
            <Card.Title>{items.name}</Card.Title>
            <Card.Body>{items.desc}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
