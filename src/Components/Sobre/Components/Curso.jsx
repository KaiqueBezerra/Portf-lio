import React from "react";
import Udemy from "../../../Assets/Cursos_Certificados/Udemy.jpg?react";
import Rocket from "../../../Assets/Cursos_Certificados/Rocket.png?react";
import styles from "./Curso.module.css";

const cursos = [
  {
    nome: "Web Completo",
    src: Udemy,
    href: "https://www.udemy.com/certificate/UC-9c8ae4a5-1e35-4c12-8997-323b95df2f5d/",
  },
  {
    nome: "NLW Journey",
    src: Rocket,
    href: "https://app.rocketseat.com.br/certificates/1081c53c-bff1-426b-b4ad-38896d97e55d",
  },
];

const Curso = () => {
  const [effect, setEffect] = React.useState(false);

  function effectOn() {
    setEffect(true);
  }

  return (
    <>
      {cursos.map(({ nome, src, href }) => (
        <div
          key={nome}
          className={`${styles.blocks} col-md-12 col-lg-5`}
          onMouseEnter={effectOn}
        >
          <div className={styles.block}>
            <p className={styles.descricao}>{nome}</p>
          </div>

          <a href={href} target="_blank">
            <img
              className={`${effect ? "" : styles.textFocusIn} ${
                styles.img
              } img-fluid rounded-3`}
              src={src}
              alt={nome}
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default Curso;
