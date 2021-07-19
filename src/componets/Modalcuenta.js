import React from "react";

import Seguridad from "./Seguridad";

import "./style/modalcuenta.css";
import Imagenuser from "./images/user.svg";
import Comentario from "./images/comentarios.gif";
import setting from "./images/configuracion.svg";
import Derecha from "./images/derecha.svg";
import Informacion from "./images/informacion.svg";
import Pantalla from "./images/luna.svg";
import Cerrar from "./images/cerrar.svg";

function Modalcuenta({ imagenUsuario = Imagenuser, nombreUsuario }) {
  return (
    <div>
      <div className="contenedor__principal">
        <div className="contenedor__social">
          <img src={imagenUsuario} alt="usuario" />
          <div className="contenedor__social-title">
            <h4>{nombreUsuario}</h4>
            <h5>Ver tu perfil</h5>
          </div>
        </div>
        <div className="contenedor__comentarios">
          <figure>
            <img src={Comentario} alt="comentarios" />
          </figure>
          <div className="contenedor__comentarios-title">
            <h4>Enviar comentarios</h4>
            <h5> Ayudanos a mejorar la nueva version de Facebook</h5>
          </div>
        </div>
        <div>
          <div className="contenedor__configuraciones">
            <div className="contenedor__configuraciones-principal">
              <div className="contenedor__configuraciones-hero">
                <div className="contenido__imagen">
                  <figure>
                    <img src={setting} alt="configuracion" />
                  </figure>
                  <h4>Configuracion de privacidad</h4>
                </div>
                <img
                  className="contenedor__configuraciones-imagen"
                  src={Derecha}
                  alt="flecha"
                />
              </div>
              <div className="contenedor__configuraciones-hero">
                <div className="contenido__imagen">
                  <figure>
                    <img src={Informacion} alt="configuracion" />
                  </figure>
                  <h4>Ayuda y soporte técnico</h4>
                </div>
                <img
                  className="contenedor__configuraciones-imagen"
                  src={Derecha}
                  alt="flecha"
                />
              </div>
              <div className="contenedor__configuraciones-hero">
                <div className="contenido__imagen">
                  <figure>
                    <img src={Pantalla} alt="configuracion" />
                  </figure>
                  <h4>Pantalla y accesibilidad</h4>
                </div>
                <img
                  className="contenedor__configuraciones-imagen"
                  src={Derecha}
                  alt="flecha"
                />
              </div>
              <div className="contenedor__configuraciones-hero">
                <div className="contenido__imagen">
                  <figure>
                    <img src={Cerrar} alt="configuracion" />
                  </figure>
                  <h4>Cerrar sesión</h4>
                </div>
              </div>
            </div>
            <div>
              <Seguridad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalcuenta;
