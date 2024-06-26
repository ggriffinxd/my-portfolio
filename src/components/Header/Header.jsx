import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.header} id="header">
      <a href="#me">
        <img src="/logo.png" alt="" />
      </a>
      <div style={{ marginLeft: "15vw" }}>
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
