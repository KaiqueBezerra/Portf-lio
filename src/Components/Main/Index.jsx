import styles from "./Index.module.css";
import Block from "./Components/Block";

const Main = () => {
  return (
    <main className="container-fluid bg-dark p-1">
      <section className={`${styles.shadowInsetCenter} container bg-dark p-2`}>
        <div className={`${styles.blackBorder} text-light p-3`}>
          <div className="row justify-content-center">
            <Block />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
