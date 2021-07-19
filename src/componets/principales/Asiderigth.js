import React from "react";
import { useState, useEffect } from "react";

import "./style/asiderigth.css";
import Regalo from "../images/regalo.svg";
import Mas from "../images/puntos.svg";
import Live from "../images/video-sala.png";
import Busqueda from "../images/buscar.svg";
import User from "../images/user.svg";
import Activo from "../images/activo.svg";
import Masimagen from "../images/mas.svg";

function Asiderigth() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const URL = "https://randomuser.me/api/?results=50";
    const response = await fetch(URL);
    const datos = await response.json();
    setData(datos.results);
  }

  return (
    <div className="conatainer__rigth_principal">
      <div className="publicidad_contenido">
        <h1>Publicidad</h1>
      </div>
      <div className="cumpleaños_contenido">
        <h1>Cumpleaños</h1>
        <div className="cumpleaños__imagen">
          <img src={Regalo} alt="cumpleaños" />
          <h3>
            Hoy es el cumpleaños de <br />
            {`${data[0]?.name?.first} ${data[0]?.name?.last}`}
          </h3>
        </div>
      </div>
      <div className="conatctos_container">
        <h3>Contactos</h3>
        <div className="conatactos_imagenes">
          <img src={Live} alt="" />
          <img src={Busqueda} alt="" />
          <img src={Mas} alt="" />
        </div>
      </div>
      <div className="chat__container">
        {data.map((item) => (
          <div className="chat__activos">
            <img src={item.picture.large} alt="usuario" />
            <img className="activo" src={Activo} alt="" />
            <h3>
              {item.name.first} {item.name.last}
            </h3>
          </div>
        ))}
        {/* <div className="chat__activos">
          <img src={User} alt="usuario" />
          <img className="activo" src={Activo} alt="" />
          <h3>nombre usuario</h3>
        </div> */}
      </div>
      <div className="grupos__container">
        <h1>Conversaciones en grupo</h1>
        <div className="grupos__imagenes_container">
          <figure>
            <img className="imagen__mas" src={Masimagen} alt="mas" />
          </figure>
          <h3>Crear nuevo grupo</h3>
        </div>
      </div>
    </div>
  );
}

export default Asiderigth;
