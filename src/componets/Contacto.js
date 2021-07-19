import React, { useState } from "react";

import "./style/contacto.css";
import ImagenUsuario from "./images/user.svg";
import Mas from "./images/mas.svg";
import Messenger from "./images/messenger.svg";
import Notificaciones from "./images/notificaciones.svg";
import Cuenta from "./images/ordenar-abajo.svg";
import Modalcuenta from "./Modalcuenta";

function Contacto({ name, picture = ImagenUsuario }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="header__conatiner_social">
        <div className="header__conatiner_social-container1">
          <button className="header__conatiner_social_perfil">
            <img
              className="header__conatiner_social_perfil-img"
              src={picture}
              alt="usuario"
            />
            <h2 className="header__conatiner_social_perfil-title">{name}</h2>
          </button>
        </div>
        <div className="header__conatiner_soacial-container2">
          <button className="container__social-imagen">
            <div className="container__img_social">
              <img src={Mas} alt="home" />
            </div>
            <div className="social__conatiner_title">
              <h3>Crear</h3>
            </div>
          </button>
          <button className="container__social-imagen">
            <div className="container__img_social">
              <img src={Messenger} alt="home" />
            </div>
            <div className="social__conatiner_title2">
              <h3>Messenger</h3>
            </div>
          </button>
          <button className="container__social-imagen">
            <div className="container__img_social">
              <img src={Notificaciones} alt="home" />
            </div>
            <div className="social__conatiner_title2">
              <h3>Notificaciones</h3>
            </div>
          </button>
          <button
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            className={
              visible ? "container__social-imagen2" : "container__social-imagen"
            }
          >
            <div className="container__img_social">
              <img src={Cuenta} alt="home" />
            </div>
            <div className="social__conatiner_title">
              <h3>cuenta</h3>
            </div>
          </button>
        </div>
      </div>
      <div className={visible ? "container__modal2" : "container__modal"}>
        <Modalcuenta imagenUsuario={picture} nombreUsuario={name} />
      </div>
    </div>
  );
}

export default Contacto;
