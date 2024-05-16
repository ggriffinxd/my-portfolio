import ProjectSample from "../components/ProjectSample/ProjectSample";

export default function useCarousel() {
  const responsive = {
    400: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div data-value="1" className="item">
      <ProjectSample
        urlLink="#"
        projectName="Portfólio"
        shortDescription="Aplicação pessoal, voltada à minha apresentação como Desenvolvedor"
        imageSource={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        }
        technologies={["REACT", "VITE", "SASS"]}
      />
    </div>,
    <div data-value="2" className="item">
      <ProjectSample
        urlLink="#"
        projectName="Portfólio"
        shortDescription="Aplicação pessoal, voltada à minha apresentação como Desenvolvedor"
        imageSource={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        }
        technologies={["JAVASCRIPT", "HTML", "CSS"]}
      />
    </div>,
    <div data-value="3" className="item">
      <ProjectSample
        urlLink="#"
        projectName="Portfólio"
        shortDescription="Aplicação pessoal, voltada à minha apresentação como Desenvolvedor"
        imageSource={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        }
        technologies={["REACT", "VITE", "SASS"]}
      />
    </div>,
  ];

  return { items, responsive };
}
