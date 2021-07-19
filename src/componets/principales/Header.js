import React from "react";

import "./style/header.css";
import Social from "../Social";
import Home from "../Home";
import Contacto from "../Contacto";

function Header(props) {
  return (
    <div>
      <div className="header__container">
        <div>
          <Social />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Contacto
            name={props.userData?.name?.first}
            picture={props.userData?.picture?.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
