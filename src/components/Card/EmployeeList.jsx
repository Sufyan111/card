import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "./Employee.css";
import { EmployeeItem } from "./EmployeeItem";
import { EmployeeReducer } from "../../reducers/employeeReducer";

export const EmployeeList = () => {
  const [empArr, setEmpArr] = useState(EmployeeReducer.Data);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const filterArr = empArr.filter((item) =>
      item.EmployeeName.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(EmployeeReducer.Data);
    else setEmpArr(filterArr);

    console.log(filterArr);
  }, [searchText]);
  return (
    <div>
      <Card className="employeelist">
        <h2>Employee List</h2>
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Row>
          {empArr.map((item) => (
            <Col md={4}>
              <EmployeeItem item={item} />
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
