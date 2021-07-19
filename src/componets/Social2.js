import React, { useState, Fragment, useRef } from "react";

import Modalsearch from "./Modalsearch";

import "./style/social2.css";
import Facebook_logo from "./images/facebook.png";
import Buscar_logo from "./images/buscar.svg";
import Back from "./images/atras.svg";

function Social() {
  const ref = useRef();
  console.log(ref);
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
          visible
            ? "header__conatiner_search2"
            : "header__conatiner_search_social2"
        }
      >
        <img src={visible ? Back : Facebook_logo} alt="logo-facebook" />
        <div className="header__conatiner_search-conatiner">
          <img
            onClick={() => ref.current.focus()}
            // onBlur={() => noVisible(false)}
            className={
              visible
                ? "header__conatiner_search-img2"
                : "header__conatiner_search-img_social2"
            }
            src={Buscar_logo}
            alt="buscar"
          />
          <input
            ref={ref}
            name="busqueda"
            onFocus={() => noVisible(true)}
            onBlur={() => noVisible(false)}
            className={
              visible
                ? "header__conatiner_search-input2"
                : "header__conatiner_search-input_social2"
            }
            type="text"
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
