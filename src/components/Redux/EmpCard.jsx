import React, { useState } from "react";
import { Card, Button, FormControl, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEmpDetails } from "../State/Selector/EmpDetailsSelector";
import { addEmp } from "../State/Actions/EmpDeatilsAction";
import { useEffect } from "react";

export const EmpCard = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState();

  useEffect(() => {
    setEmpData(selector);
  }, [selector]);

  const dispatch = useDispatch();

  
  const handleDispatch = () => {
    dispatch(addEmp(newMentorsData));
  };

  return (
    <div>
      
        
        <FormControl
          placeholder="Name"
          display={{ margin: "25px" }}
          onChange={(e) => setNewMentorsData(e.target.value)}
        ></FormControl>
        <Button onClick={handleDispatch}>Change</Button>
      
      {empData.map((itemCurrent) => {
        return (
          <Card
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Card.Img variant="top" src={itemCurrent.img} />
            <Card.Title>{itemCurrent.name}</Card.Title>
            <Card.Body>
              Age: {itemCurrent.age} <br />
              Designation:
              {itemCurrent.desc}
              <br />
              <br />
              <Button>More Details</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
