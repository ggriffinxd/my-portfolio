import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="#me">
        <h1 id="logoName">GGRIFFINXD</h1>
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
