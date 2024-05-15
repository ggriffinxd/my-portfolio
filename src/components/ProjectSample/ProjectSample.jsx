import useTecnologies from "../../hooks/useTecnologies";
import styles from "./style.module.scss";

export default function ProjectSample({
  urlLink,
  projectName,
  imageSource,
  shortDescription,
  technologies,
}) {
  const { getTechnologyImages } = useTecnologies();

  const imagesReturn = getTechnologyImages(technologies);

  return (
    <div className={styles.cardContent}>
      <a href={urlLink}>
        <h1>{projectName}</h1>
        <div className={styles.contentImage}>
          <img src={imageSource} alt="projectImage" id={styles.projectImage} />
        </div>
      </a>
      <div>
        <h4 style={{ margin: "10px 0" }}>Descrição: </h4>
        <hr />
        <p style={{ fontWeight: "400", textAlign: "center" }}>
          {shortDescription}
        </p>
        <hr />
        <h4 style={{ margin: "10px 0" }}>Tecnologias:</h4>
        <div className={styles.listImages}>
          {imagesReturn.map((tech) => (
            <li>
              <img src={tech.source} alt={tech.name} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
