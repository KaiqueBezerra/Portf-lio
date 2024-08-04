import React from "react";
import Udemy from "../../../Assets/Udemy.jpg?react";
import Rocket from "../../../Assets/Rocket.png?react";
import styles from "./Curso.module.css";

const cursos = [
  {
    nome: "Web Completo",
    src: Udemy,
    href: "https://dogs-theta-nine.vercel.app/",
  },
  {
    nome: "NLW Journey",
    src: Rocket,
    href: "https://cursotw1tt3r.000webhostapp.com/",
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

          <a href={href}>
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
