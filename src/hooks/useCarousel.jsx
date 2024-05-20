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
        imageSource={"/prj1.png"}
        technologies={["REACT", "VITE", "SASS"]}
      />
    </div>,
    <div data-value="2" className="item">
      <ProjectSample
        urlLink="https://github.com/ggriffinxd/lib-games"
        projectName="Lib-Games"
        shortDescription="Aplicação teste, simulando uma biblioteca de jogos com capa e nome"
        imageSource={"/prj2.png"}
        technologies={["REACT", "VITE", "CSS"]}
      />
    </div>,
    <div data-value="3" className="item">
      <ProjectSample
        urlLink="https://github.com/ggriffinxd/CRUD-Finances"
        projectName="CRUD-Finances"
        shortDescription="Aplicação Pessoal desenvolvida para uso de controle financeiro do cliente."
        imageSource={"/prj5.png"}
        technologies={["HTML", "JAVASCRIPT", "CSS", "NODE"]}
      />
    </div>,
    <div data-value="4" className="item">
      <ProjectSample
        urlLink="https://github.com/ggriffinxd/Landpage-bootstrap"
        projectName="Landpage"
        shortDescription="Página landpage, utilizando bootstrap na sua construção html, com scss"
        imageSource={"/prj3.png"}
        technologies={["HTML", "BOOTSTRAP", "SASS"]}
      />
    </div>,
    <div data-value="5" className="item">
      <ProjectSample
        urlLink="https://github.com/ggriffinxd/Calculadora-Cientifica"
        projectName="Calculadora"
        shortDescription="Calculadora científica criada para demonstrar a evolução matemática"
        imageSource={"/prj4.png"}
        technologies={["HTML", "JAVASCRIPT", "CSS"]}
      />
    </div>,
    <div data-value="6" className="item">
      <ProjectSample
        urlLink="https://github.com/ggriffinxd/JS-Bank"
        projectName="JS-Bank"
        shortDescription="Simulação de um banco através de classes aplicando a orientação objeto"
        imageSource={
          "https://images.vexels.com/media/users/3/263264/isolated/preview/11a26a1102ca38d370338cf6a91459c4-a-cone-de-banco-de-nega-cios-de-dinheiro.png"
        }
        technologies={["JAVASCRIPT", "NODE"]}
      />
    </div>,
  ];

  return { items, responsive };
}
