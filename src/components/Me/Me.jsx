import styles from "./style.module.scss";

export default function Me() {
  return (
    <>
      <h1 style={{ textAlign: "start", margin: "8vh 20px -20px" }} id="me">
        Quem sou eu?
      </h1>
      <div className={styles.container}>
        <div className={styles.lorem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            deserunt ipsam aperiam fugiat saepe quidem iusto quibusdam
            temporibus, distinctio accusamus. Odit, distinctio harum. Harum
            laborum maxime voluptatum repudiandae ipsum quaerat, quidem in omnis
            similique, accusamus et pariatur vel maiores commodi?
          </p>
        </div>
        <div className={styles.photo}></div>
      </div>
    </>
  );
}
