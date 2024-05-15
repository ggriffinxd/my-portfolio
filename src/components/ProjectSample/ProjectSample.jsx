import useTecnologies from "../../hooks/useTecnologies";
import styles from "./style.module.scss";

export default function ProjectSample({
  projectName,
  imageSource,
  shortDescription,
  technologies,
}) {
  const { getTechnologyImages } = useTecnologies();

  const imagesReturn = getTechnologyImages(technologies);

  return (
    <div className={styles.cardContent}>
      <h1>{projectName}</h1>
      <div className={styles.contentImage}>
        <img src={imageSource} alt="projectImage" id={styles.projectImage} />
      </div>
      <div>
        <p>Descrição</p>
        <hr />
        <p>{shortDescription}</p>
        <hr />
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
