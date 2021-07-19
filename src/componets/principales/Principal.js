import React from "react";
import { useState, useEffect } from "react";

import "./style/principal.css";
import Historia from "../Historia";
import User from "../images/user.svg";
import foto from "../images/foto.svg";
import Transmision from "../images/transmision.svg";
import Imagensala from "../images/video-sala.png";
import Derecha from "../images/derecha.svg";

function Principal(props) {
  const [data, setData] = useState([]);

  const placeholder = `¿Qué estás pensando, ${props.userUsuario?.name?.first}?`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const URL = "https://randomuser.me/api/?results=8";
    const response = await fetch(URL);
    const datos = await response.json();
    setData(datos.results);
  }
  return (
    <div>
      <div className="container__historias_principal">
        <Historia imagenUser={props.userUsuario?.picture?.large} />
      </div>
      <div className="container__home_inicio">
        <div className="conatianer_header_principal">
          <div className="conatianer_header_principal-pregunta">
            <img src={props.userUsuario?.picture?.thumbnail} alt="user" />
            <input type="text" placeholder={placeholder} />
          </div>
          <div className="conatianer_header_principal-live">
            <div className="contenedor__imagnes-live">
              <img src={Transmision} alt="live" />
              <h2>Video en vivo</h2>
            </div>
            <div className="contenedor__imagnes-live">
              <img src={foto} alt="fotos" />
              <h2>Foto/video</h2>
            </div>
          </div>
        </div>
        <div className="container__user-activos">
          <div className="usuarios__activos">
            <img src={Imagensala} alt="sala" />
            <h4>Crear sala</h4>
          </div>
          {/* --------------para el map--------- */}
          {data.map((item, index) => (
            <img
              key={index}
              className="imagen_activos"
              src={item.picture.large}
              alt="usuario"
            />
          ))}
        </div>
        <figure className="derecha_live_user">
          <img src={Derecha} alt="derecha" />
        </figure>
      </div>
    </div>
  );
}

export default Principal;
