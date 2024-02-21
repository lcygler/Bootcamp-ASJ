import React from "react";
import News from "./News";

const Home = () => {
  return (
    <div className="container my-5">
      <h2>Blog de Noticias</h2>
      <p>Hecho con React y Bootstrap 🚀</p>
      <News />
    </div>
  );
};

export default Home;
