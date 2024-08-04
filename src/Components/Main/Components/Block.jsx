import React from "react";
import TClone from "../../../Assets/TClone.png?react";
import Dogs from "../../../Assets/Dogs.png?react";
import styles from "./Block.module.css";
import { Link, Github } from "lucide-react";

const blocks = [
  {
    nome: "Dogs",
    src: Dogs,
    href: "https://dogs-theta-nine.vercel.app/",
    gitHub: "https://github.com/KaiqueBezerra/Dogs",
    descricao: "Site de rede social para cachorros",
  },
  {
    nome: "TClone",
    src: TClone,
    href: "https://cursotw1tt3r.000webhostapp.com/",
    gitHub: "https://github.com/KaiqueBezerra/Twitter_clone",
    descricao: "Site clone do twitter",
  },
];

const Block = () => {
  const [effect, setEffect] = React.useState(false);

  function effectOn() {
    setEffect(true);
  }

  return (
    <>
      {blocks.map(({ nome, descricao, href, gitHub, src }) => (
        <div key={nome} className={styles.blocks} onMouseEnter={effectOn}>
          <div className={styles.block}>
            <p className={styles.descricao}>{descricao}</p>
            <a href={href} className={`${styles.links}`} target="_blank">
              <Link className={`${styles.link}`} />
            </a>
            <a href={gitHub} className={`${styles.links}`} target="_blank">
              <Github className={`${styles.link}`} />
            </a>
          </div>

          <img
            className={`${effect ? "" : styles.textFocusIn} ${
              styles.img
            } img-fluid rounded-3`}
            src={src}
            alt={nome}
          />
        </div>
      ))}
    </>
  );
};

export default Block;
