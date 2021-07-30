import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./AudioPlayer.css";

export const AudioPlayer = () => {
  const audio = new Audio("gana.mp3");
  const handleaudioPlay = () => {
    audio.play();
  };
  const handleaudioPause = () => {
    audio.pause();
  };

  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleaudioPlay}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleaudioPause}>Stop</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleaudioPlay} onMouseUp={handleaudioPause}>Stop</Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};
