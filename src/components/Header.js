import "../stylesheet/Header.scss";
import pic from "../images/header.png";
import { Link } from "react-router-dom";
import Projects from "./Main/Projects";
import Aboutme from "./Main/Aboutme";

const Header = () => {
  return (
    <>
      <div>{<img src={pic} className="header__pic" />}</div>

      <nav>
        <ul className="header__nav">
          <li className="header__list ">
            <a className="header__list " href="#aboutme">
              Sobre mí
            </a>
          </li>
          <li className="header__list ">
            <a className="header__list " href="#hardSkills">
              Hard Skills{" "}
            </a>
          </li>
          <li className="header__list">
            {" "}
            <a className="header__list" href="#projects">
              Proyectos
            </a>
          </li>
          <li className="header__list">
            <a className="header__list" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* <h1>Ana Fernández </h1>

      <h2>Desarrolladora Front-end</h2> */}
    </>
  );
};
export default Header;
