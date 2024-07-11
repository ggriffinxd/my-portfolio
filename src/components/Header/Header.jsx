import { useEffect } from "react";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Header() {
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [larguraDaTela]);

  return (
    <div className={styles.header} id="header">
      {larguraDaTela < 700 ? null : (
        <a href="#me">
          <img src="/logo.png" alt="" />
        </a>
      )}
      <div className={styles.links}>
        <a className={styles.links} href="#me" title="Inicio">
          Início
        </a>
        <a className={styles.links} href="#projects" title="Projetos">
          Projetos
        </a>
        <a className={styles.links} href="#contacts" title="Contatos">
          Contatos
        </a>
      </div>
    </div>
  );
}
