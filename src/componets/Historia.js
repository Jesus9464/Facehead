import React from "react";
import { useState, useEffect } from "react";

import "./style/historia.css";
import Mas from "./images/mas.svg";
import Rigth from "./images/derecha.svg";

function Historia({ imagenUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const URL = "https://randomuser.me/api/?results=4";
    const response = await fetch(URL);
    const datos = await response.json();
    setData(datos.results);
  }

  return (
    <div className="container__historia">
      <div className="container__historia-imagen">
        <img
          className="container__historia-imagen-img"
          src={imagenUser}
          alt="foto"
        />
        <figure>
          <img className="imagen__mas_historias" src={Mas} alt="foto" />
        </figure>
        <h1>
          Crea una <br /> historia
        </h1>
      </div>
      {/* -------------------------para el map------------------ */}
      {data.map((item, index) => (
        <div key={index} className="container__historia-imagen-user">
          <img
            className="container__historia-imagen-img-user"
            src={item.picture.large}
            alt="foto"
          />
          <figure>
            <img
              className="imagen__mas_historias-user"
              src={item.picture.large}
              alt="foto"
            />
          </figure>
          <h1>
            {item.name.first} {item.name.last}
          </h1>
        </div>
      ))}
      {/* --------------------------------------------------- */}

      <figurec className="mas_historias">
        <img src={Rigth} alt="mas" />
      </figurec>
      <h1 className="titulo_historias">Ver todas las historias</h1>
    </div>
  );
}

export default Historia;
