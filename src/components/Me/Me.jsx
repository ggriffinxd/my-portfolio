import { useEffect } from "react";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Me() {
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
    <>
      <h1
        style={{
          textAlign: "start",
          margin: "8vh 20px -20px",
          fontSize: "50px",
        }}
        id="me"
      >
        Quem sou eu?
      </h1>
      <div className={styles.container}>
        <div className={styles.lorem}>
          <p>Olá, me chamo Gabriel, e é um prazer ter você como visitante!</p>
          <p>
            Sou desenvolvedor web, faço aplicações para internet por meio de
            linguagens e frameworks, tais como; React, JavaScript, Node, dentre
            outras.
          </p>
          <p>
            Meu objetivo na programação é me tornar um desenvolvedor full-stack,
            e há 8 meses eu venho buscando esse sonho, consolidando meu
            conhecimento em projetos e trabalhos voltados ao desenvolvimento
            pessoal e de mercado.
          </p>
          <p>Acompanhe à seguir algumas obras feitas por mim!</p>
          <p>Espero que goste XD.</p>
        </div>
        {larguraDaTela < 700 ? null : (
          <div className={styles.photo}>
            <img src="/photo.jpeg" alt="personal-photo" />
          </div>
        )}
      </div>
    </>
  );
}
