import React, { useState } from "react";
import { Row, Col, Button, Card, Form, Image, Container } from "react-bootstrap";
import "./EmpForm.css";
import { empFormReducer } from "../../reducers/empFormReducer";

export const EmpForm = () => {
  const { firstName, lastName, HouseNum, Streer, City } =
    empFormReducer.Data[0];

  const [fName, setfName] = useState(firstName);
  const [lName, setlName] = useState(lastName);
  const [hNum, sethNum] = useState(HouseNum);
  const [street, setStreet] = useState(Streer);
  const [city, setCity] = useState(City);
  const [cntry, setCntry] = useState("");
  const [bulbState, setBulbState] = useState("off");

  return (
    <div>
      <Row>
        <Col xs={2}></Col>
        <Col xs={4}>
        <Container>
          <br />
          <Card id={bulbState === "on" ? "infor" : "inforAcc"}>
            {" "}
            <Card.Body>
              <br />

              <Row>
                <Form.Label>
                  {" "}
                  <b>First Name:</b>{" "}
                </Form.Label>
              </Row>
              <Row>
                <Form.Control
                  type="text"
                  placeholder="Your First Name Here"
                  onChange={(e) => setfName(e.target.value)}
                />
              </Row>

              <Row>
                <Form.Label>
                  <b>Last Name:</b>
                </Form.Label>
              </Row>
              <Row>
                <Form.Control
                  type="text"
                  placeholder="Your Last Name Here"
                  onChange={(e) => setlName(e.target.value)}
                />
              </Row>
              <br />
              <Row>
                <Form.Label>
                  <b>Address</b>
                </Form.Label>
              </Row>
              <Row>
                <Col md={8}>
                  <Row>
                    <Form.Label>H. No.:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => sethNum(e.target.value)}
                    />
                  </Row>

                  <Row>
                    <Form.Label>Street:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </Row>

                  <Row>
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Row>

                  <Row>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(s) => setCntry(s.target.value)}
                    />
                  </Row>
                  <br />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </Container>
        </Col>

        <Col xs={4} id="cardcol">
          <div>
          <br />
          <br /> <br />
          <Row>
            <Card
              style={{ width: "18rem" }}
              id={bulbState === "on" ? "idcard" : "idcardAcc"}
            >
              <Card.Img variant="top" src="Person.png" id="imagep" />
              <Card.Body>
                <Card.Title>{`${fName} ${lName}`}</Card.Title>
                <Card.Text>
                  {`${hNum},`} <br />
                  {`${street},`} <br />
                  {`${city},`} <br />
                  {`${cntry}.`}
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary">Yayy!!</Button>
                </div>
              </Card.Body>
            </Card>
          </Row>
          </div>
        </Col>
        <Col xs={2}>
          <Image
            src={`bulb${bulbState}.png`}
            onClick={() =>
              bulbState === "off" ? setBulbState("on") : setBulbState("off")
            }
          ></Image>
        </Col>
      </Row>
    </div>
  );
};
