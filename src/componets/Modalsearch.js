import React from "react";
import { useState, useEffect } from "react";

import "./style/modalsearch.css";
import Usuariofoto from "./images/user.svg";
import Cerrar from "./images/quitar.svg";

function Modalsearch({ search }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const filtros = data.filter((string) =>
    string?.name?.first.toLowerCase().includes(search.toLowerCase())
  );

  async function getData() {
    const URL = "https://randomuser.me/api/?results=100";
    const response = await fetch(URL);
    const datos = await response.json();
    setData(datos.results);
  }

  return (
    <div className="contenedor">
      <div className="title">
        <h2>Búsqueda recientes</h2>
        <h3>Editar</h3>
      </div>
      {filtros.map((item, index) => (
        <div key={index} className="contenedor_principal">
          <div className="contendor_usuario">
            <div>
              <img src={item.picture.large} alt="usuario" />
            </div>
            <h3>
              {item.name.first} {item.name.last}
            </h3>
          </div>
          <div className="contenedor__imagen">
            <img src={Cerrar} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Modalsearch;
