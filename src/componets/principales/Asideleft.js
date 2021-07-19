import React, { useState } from "react";

import "./style/asideleft.css";
import Seguridad from "../Seguridad";

import UserImage from "../images/user.svg";
import Corazon from "../images/me-gusta.svg";
import Arriba from "../images/arriba.svg";
import Bandera from "../images/bandera.svg";
import Grupos from "../images/juventud.svg";
import Tienda from "../images/store.svg";
import Watch from "../images/watch.svg";
import Eventos from "../images/eventos.svg";
import Recuerdos from "../images/recientes.svg";
import Guardado from "../images/marcador.svg";
import Publicidad from "../images/administrador.svg";
import Comunicacion from "../images/comunicacion.svg";
import administracion from "../images/grafico-de-barras.svg";
import clima from "../images/clima.svg";
import empleos from "../images/empleo.svg";
import favorito from "../images/favoritos.svg";
import juego from "../images/juego.svg";
import listamigos from "../images/lista.svg";
import messenger from "../images/messenger3.svg";
import messengerkid from "../images/messenger2.svg";
import oferta from "../images/oferta.svg";
import recaudo from "../images/recaudacion.svg";
import salud from "../images/saludemocional.svg";
import videojuegos from "../images/videojuego.svg";
import live from "../images/live.svg";
import abajo from "../images/ordenar-abajo.svg";
import Ayuda from "../images/ayuda.svg";
import Memes from "../images/televisor.svg";
import tarjeta from "../images/tarjeta.svg";
import Recientes from "../images/recientes.svg";

const contenedores = [
  {
    title: "Usuario",
    imagen: UserImage,
  },
  {
    title: "COVID: Centro de informacion",
    imagen: Corazon,
  },
  {
    title: "Páginas",
    imagen: Bandera,
  },
  {
    title: "Grupos",
    imagen: Grupos,
  },
  {
    title: "Marketplace",
    imagen: Tienda,
  },
  {
    title: "Watch",
    imagen: Watch,
  },
  {
    title: "Eventos",
    imagen: Eventos,
  },
  {
    title: "Reacuerdos",
    imagen: Recuerdos,
  },
  {
    title: "Guardado",
    imagen: Guardado,
  },
  {
    title: "Actividad publicitaria reciente",
    imagen: Publicidad,
  },
  {
    title: "Administrador de anuncios",
    imagen: administracion,
  },
  {
    title: "Ayuda comunitaria",
    imagen: Ayuda,
  },
  {
    title: "Centro de anuncios",
    imagen: Comunicacion,
  },
  {
    title: "Clima",
    imagen: clima,
  },
  {
    title: "Empleos",
    imagen: empleos,
  },
  {
    title: "Facebook Pay",
    imagen: tarjeta,
  },
  {
    title: "Favoritos",
    imagen: favorito,
  },
  {
    title: "Jugar",
    imagen: juego,
  },
  {
    title: "Lista de amigos",
    imagen: listamigos,
  },
  {
    title: "Más recientes",
    imagen: Recientes,
  },
  {
    title: "Messenger",
    imagen: messenger,
  },
  {
    title: "Messenger Kids",
    imagen: messengerkid,
  },
  {
    title: "Ofertas",
    imagen: oferta,
  },
  {
    title: "Recaudaciones de fondos",
    imagen: recaudo,
  },
  {
    title: "Salud mental",
    imagen: salud,
  },
  {
    title: "Videos de juegos",
    imagen: videojuegos,
  },
  {
    title: "Videos en vivo",
    imagen: live,
  },
];

function Asideleft() {
  const [inicio, setInicio] = useState(9);
  const [imagenboton, setimagenboton] = useState(true);

  return (
    <div className="container__principal">
      <div className="container__hero">
        {contenedores.slice(0, inicio).map(({ imagen, title }, index) => (
          <div key={index} className="container__hero_imagen">
            <img className="imagen" src={imagen} alt="user" />
            <div className="title">
              <h3 className="titulo_principal">{title}</h3>
            </div>
          </div>
        ))}
        <div
          className="container__hero_imagen"
          onClick={() => {
            setimagenboton((imge) => (imge === !false ? false : true));
            setInicio((prev) => (prev > 9 ? 9 : contenedores.length));
          }}
        >
          <button className="boton">
            <img
              className="imagen__boton"
              src={imagenboton ? abajo : Arriba}
              alt="user"
            />
          </button>
          <div className="title">
            <h3 className="titulo_principal">
              {imagenboton ? "Ver más" : "ver menos"}
            </h3>
          </div>
        </div>
      </div>
      <div className="footer__asideleft">
        <h1 className="footer_title">Tus accesos directos</h1>
        <div className="container__hero_imagen">
          <img className="imagen" src={Memes} alt="user" />
          <div className="title">
            <h3 className="titulo_principal">Memes de Programación</h3>
          </div>
        </div>
      </div>
      <Seguridad />
    </div>
  );
}

export default Asideleft;
