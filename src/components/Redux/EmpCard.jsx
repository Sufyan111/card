import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getEmpDetails } from "../State/Selector/EmpDetailsSelector";

export const EmpCard = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState(selector);
  console.log(selector);
  return (
    <div>
        {empData.map((itemCurrent)=>{
            return(
      <Card style={{width:'18rem', display:'inline-block', margin:'auto', textAlign:'center' }}>
        <Card.Img variant="top" src={itemCurrent.img} />
        <Card.Title>{itemCurrent.name}</Card.Title>
        <Card.Body>
            Age: {itemCurrent.age} <br />
            Designation:
          {itemCurrent.desc}
          <br /><br />
        <Button>More Details</Button>
        </Card.Body>
      </Card>)
      })}
    </div>
  );
};
