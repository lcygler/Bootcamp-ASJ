import React from "react";
import news1 from "../assets/img/news-1.png";
import news2 from "../assets/img/news-2.png";
import news3 from "../assets/img/news-3.png";

const News = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={news1} className="card-img-top" alt="News 1" />
            <div className="card-body">
              <h5 className="card-title">Noticia 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-link">Continuar leyendo</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={news2} className="card-img-top" alt="News 2" />
            <div className="card-body">
              <h5 className="card-title">Noticia 2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-link">Continuar leyendo</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={news3} className="card-img-top" alt="News 3" />
            <div className="card-body">
              <h5 className="card-title">Noticia 3</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-link">Continuar leyendo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
