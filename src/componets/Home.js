import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style/home.css";
import Homecasa from "./images/home.svg";
import Watch from "./images/watch.svg";
import Store from "./images/store.svg";
import Friends from "./images/group.svg";
import Games from "./images/games.svg";

function Home() {
  const [homeVisible, homeNoVisible] = useState(true);
  const [watchVisible, watchNoVisible] = useState(true);
  const [marketVisible, marketNoVisible] = useState(true);
  const [gruposVisible, gruposNoVisible] = useState(true);
  const [juegoVisible, juegoNoVisible] = useState(true);

  return (
    <div>
      <div className="header__conatiner_home">
        <Link
          to="/"
          onFocus={() => homeNoVisible(false)}
          onBlur={() => homeNoVisible(true)}
          className={homeVisible ? "home__conatiner" : "home__conatiner2"}
        >
          <img
            className={
              homeVisible ? "home__conatiner_img" : "home__conatiner_img2"
            }
            src={Homecasa}
            alt="home"
          />
          <div className="home__conatiner_title">
            <h3>Inicio</h3>
          </div>
        </Link>
        <Link
          to="/watch"
          onFocus={() => watchNoVisible(false)}
          onBlur={() => watchNoVisible(true)}
          className={watchVisible ? "home__conatiner" : "home__conatiner2"}
        >
          <img
            className={
              watchVisible ? "home__conatiner_img" : "home__conatiner_img2"
            }
            src={Watch}
            alt="home"
          />
          <div className="home__conatiner_title">
            <h3>Watch</h3>
          </div>
        </Link>
        <button
          onFocus={() => marketNoVisible(false)}
          onBlur={() => marketNoVisible(true)}
          className={marketVisible ? "home__conatiner" : "home__conatiner2"}
        >
          <img
            className={
              marketVisible ? "home__conatiner_img" : "home__conatiner_img2"
            }
            src={Store}
            alt="home"
          />
          <div className="home__conatiner_title2">
            <h3>Marketplace</h3>
          </div>
        </button>
        <button
          onFocus={() => gruposNoVisible(false)}
          onBlur={() => gruposNoVisible(true)}
          className={gruposVisible ? "home__conatiner" : "home__conatiner2"}
        >
          <img
            className={
              gruposVisible ? "home__conatiner_img" : "home__conatiner_img2"
            }
            src={Friends}
            alt="home"
          />
          <div className="home__conatiner_title">
            <h3>Grupos</h3>
          </div>
        </button>
        <button
          onFocus={() => juegoNoVisible(false)}
          onBlur={() => juegoNoVisible(true)}
          className={juegoVisible ? "home__conatiner" : "home__conatiner2"}
        >
          <img
            className={
              juegoVisible ? "home__conatiner_img" : "home__conatiner_img2"
            }
            src={Games}
            alt="home"
          />
          <div className="home__conatiner_title2">
            <h3>VideoJuegos</h3>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;
