import React, { useState, Fragment } from "react";

import Modalsearch from "./Modalsearch";

import "./style/social.css";
import Facebook_logo from "./images/facebook.png";
import Buscar_logo from "./images/buscar.svg";
import Back from "./images/atras.svg";

function Social() {
  const [visible, noVisible] = useState(false);
  const [task, setTask] = useState({
    busqueda: "",
  });

  const handleInputChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <div
        className={
          visible ? "header__conatiner_search2" : "header__conatiner_search"
        }
      >
        <img src={visible ? Back : Facebook_logo} alt="logo-facebook" />
        <div className="header__conatiner_search-conatiner">
          <img
            className={
              visible
                ? "header__conatiner_search-img2"
                : "header__conatiner_search-img"
            }
            src={Buscar_logo}
            alt="buscar"
          />
          <input
            name="busqueda"
            onFocus={() => noVisible(true)}
            onBlur={() => noVisible(false)}
            className={
              visible
                ? "header__conatiner_search-input2"
                : "header__conatiner_search-input"
            }
            type="text"
            placeholder="Buscar en Facecall"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={visible ? "modal__search2" : "modal__search"}>
        <Modalsearch search={task.busqueda} />
      </div>
    </Fragment>
  );
}

export default Social;
