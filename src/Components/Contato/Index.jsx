import styles from "./Index.module.css";
import { MessageCircle, Mail } from "lucide-react";

const Contato = () => {
  return (
    <main className={`${styles.ajuste} container-fluid bg-dark p-1`}>
      <section className={`${styles.shadowInsetCenter} container bg-dark p-2`}>
        <div className={`${styles.blackBorder} text-light p-3`}>
          <div className="row justify-content-center">
            <div
              className={`${styles.shadowInsetCenter} ${styles.block} col-12 col-md-5 m-2`}
            >
              <div className={styles.margin}>
                <h3 className={`${styles.whatsapp} ${styles.title}`}>
                  whatsapp
                </h3>
                <MessageCircle className={styles.color} />
                <h5 className={styles.numero} style={{ marginRight: "15px" }}>
                  11-982194384
                </h5>
              </div>
            </div>
            <div
              className={`${styles.shadowInsetCenter} ${styles.block} col-12 col-md-5 m-2`}
            >
              <div className={styles.margin}>
                <h3 className={`${styles.mail} ${styles.title}`}>Email</h3>
                <Mail className={styles.color1} />
                <h5 className={styles.email}>kaiquebezerra230@gmail.com</h5>
              </div>
            </div>
            <div
              className={`${styles.shadowInsetCenter} ${styles.block} col-12 col-md-5 m-2`}
            >
              <div className={styles.margin}>
                <h3 className={`${styles.mail} ${styles.title}`}>Email</h3>
                <Mail className={styles.color1} />
                <h5 className={styles.email}>kaiquebezerra30@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
