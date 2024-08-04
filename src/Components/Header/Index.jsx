import React from "react";
import foto from "../../Assets/foto.jpeg";
import styles from "./Index.module.css";
import { PanelTopOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [sobre, setSobre] = React.useState(false);
  const [projetos, setProjetos] = React.useState(true);
  const [contato, setContato] = React.useState(false);

  function activeSobre() {
    setSobre(true);
    setProjetos(false);
    setContato(false);
  }

  function activeProjetos() {
    setSobre(false);
    setProjetos(true);
    setContato(false);
  }

  function activeContato() {
    setSobre(false);
    setProjetos(false);
    setContato(true);
  }

  return (
    <>
      <div className={`${styles.header} ${styles.shadowInsetCenter} ${styles.blackBorder} bg-dark`}>
        <div className={`${styles.perfil} row`}>
          <div className={`${styles.img} col`}>
            <img
              className={`${styles.img} rounded-circle`}
              src={foto}
              alt="perfil"
            />
          </div>
        </div>
        <div className={`${styles.descricao} row text-white`}>
          <div className="col">
            <p className={styles.nome}>Kaique Bezerra</p>
            <p className={styles.p}>Portfólio</p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className={`${styles.nav} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <PanelTopOpen />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarNavAltMarkup"
          >
            <div className={`${styles.links} navbar-nav`}>
              <Link
                className={`${styles.linkColor} nav-link text-light ${
                  sobre ? `${styles.active}` : ""
                }`}
                to="/sobre"
                onClick={activeSobre}
              >
                SOBRE
              </Link>
              <Link
                className={`${styles.linkColor} nav-link text-light ${
                  projetos ? `${styles.active}` : ""
                }`}
                to="/"
                onClick={activeProjetos}
              >
                PROJETOS
              </Link>
              <Link
                className={`${styles.linkColor} nav-link text-light ${
                  contato ? `${styles.active}` : ""
                }`}
                to="/contato"
                onClick={activeContato}
              >
                CONTATO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
