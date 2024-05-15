import ProjectSample from "../ProjectSample/ProjectSample";

export default function Carousel() {
  return (
    <div>
      <ProjectSample
        projectName="oi"
        shortDescription="olaa"
        imageSource={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        }
        technologies={["REACT", "NODE"]}
      />
    </div>
  );
}
