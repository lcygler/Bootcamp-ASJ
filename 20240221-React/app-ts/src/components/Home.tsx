import React from "react";
import { Container } from "react-bootstrap";
import News from "./News";

const Home = () => {
  return (
    <Container className="my-5">
      <h2>Blog de Noticias</h2>
      <p>Hecho con React y Bootstrap 🚀</p>
      <News />
    </Container>
  );
};

export default Home;
