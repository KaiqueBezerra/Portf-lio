import styles from "./Index.module.css";
import Curso from "./Components/Curso";

const Sobre = () => {
  return (
    <main className="container-fluid bg-dark p-1">
      <section className={`${styles.shadowInsetCenter} container bg-dark p-2`}>
        <div className={`${styles.blackBorder} text-light p-4`}>
          <div className="row justify-content-center">
            <h3 className={`${styles.trackingInExpand} ${styles.center}`}>
              Sobre mim
            </h3>

            <p className={`${styles.textFocusIn} ${styles.justify}`}>
              Apaixonado por tecnologia e em constante aprendizado na área de
              programação! Estudante de Desenvolvimento de Sistemas na Etec,
              buscando me tornar um profissional completo e versátil. Tenho um
              grande interesse em: Entrar no mundo da programação: Desenvolvendo
              minhas habilidades. Trabalhar em empresas de tecnologia: Grandes
              ou pequenas, buscando contribuir com meus conhecimentos e aprender
              com profissionais experientes. Desenvolver meus próprios projetos:
              Transformando ideias em realidade e colocando meu aprendizado em
              prática. Sou um estudante dedicado, apaixonado por tecnologia e
              sempre em busca de novos desafios.
            </p>
          </div>

          <div className={`${styles.curso} row justify-content-center`}>
            <h3>Cursos e Certificados</h3>

            <Curso />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
