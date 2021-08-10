import React from "react";
import { Card } from "react-bootstrap";

export const EmployeeItem = ({ item }) => {
  return (
    <Card className="employeeItem">
        <Card.Img src={item.CardImage} className="image"></Card.Img>
      
      <span>Name = {item.EmployeeName}</span>
      <span>Department = {item.Dept}</span>
      <span>Salary = {item.Salary}</span>
    </Card>
  );
};
