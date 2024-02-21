import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import news1 from "../assets/img/news-1.png";
import news2 from "../assets/img/news-2.png";
import news3 from "../assets/img/news-3.png";

const News = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={news1} alt="News 1" />
            <Card.Body>
              <Card.Title>Noticia 1</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
              <Button variant="link">Continuar leyendo</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={news2} alt="News 2" />
            <Card.Body>
              <Card.Title>Noticia 2</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
              <Button variant="link">Continuar leyendo</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={news3} alt="News 3" />
            <Card.Body>
              <Card.Title>Noticia 3</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
              <Button variant="link">Continuar leyendo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
