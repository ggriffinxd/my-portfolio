import ProjectSample from "../ProjectSample/ProjectSample";

export default function Carousel() {
  return (
    <div>
      <h1 style={{ textAlign: "start", margin: "10px 20px" }}>Meus Projetos</h1>
      <ProjectSample
        urlLink="#"
        projectName="Portfólio"
        shortDescription="Aplicação pessoal, voltada à minha apresentação como Desenvolvedor"
        imageSource={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        }
        technologies={["REACT", "VITE", "SASS"]}
      />
    </div>
  );
}
