import React from "react";
import { useState, useEffect } from "react";

import "./style/inicio.css";
import Header from "../componets/principales/Header";
import Asideleft from "../componets/principales/Asideleft";
import Principal from "../componets/principales/Principal";
import Asiderigth from "../componets/principales/Asiderigth";
import PulseLoader from "react-spinners/PulseLoader";

function Inicio() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  async function getData() {
    const URL = "https://randomuser.me/api/?results=1";
    const response = await fetch(URL);
    const datos = await response.json();
    setData(datos.results[0]);
    setLoading(false);
  }

  return (
    <div className="app__contenido_inicio">
      <div>
        {loading ? (
          <PulseLoader color={"#2139B1"} loading={loading} size={20} />
        ) : (
          <div>
            <Header userData={data} />
            <div className="container">
              <div className="aside__left">
                <div className="aside__left_contenedor">
                  <Asideleft />
                </div>
              </div>
              <div className="container__historias">
                <Principal userUsuario={data} />
              </div>
              <div className="asiderigth">
                <Asiderigth />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inicio;
