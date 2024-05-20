import styles from "./style.module.scss";

export default function Contacts() {
  return (
    <div className={styles.contacts} id="contacts">
      <div>
        <div>
          <a href="https://github.com/ggriffinxd" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
              alt="github"
            />
          </a>
          <h4>@ggriffinxd</h4>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ggriffinxd" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
              alt="linkedin"
            />
          </a>
          <h4>in/ggriffinxd</h4>
        </div>

        <div>
          <a href="mailto:aomedagabreeu601@gmail.com" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=38158&format=png&color=FFFFFF"
              alt="email"
            />
          </a>
          <h4>aomedagabreeu@gmail.com</h4>
        </div>
      </div>
    </div>
  );
}
