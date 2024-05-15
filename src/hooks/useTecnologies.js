export default function useTecnologies() {
  const tecImages = [
    {
      name: "HTML",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "JAVASCRIPT",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "REACT",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "BOOTSTRAP",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
    },
    {
      name: "TAILWIND",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
    {
      name: "NODE",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "JAVA",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "SPRING",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    },
    {
      name: "SASS",
      source:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
  ];

  function getTechnologyImages(technologyNames) {
    const technologiesWithImages = [];
    for (let technologyName of technologyNames) {
      const image = tecImages.find((img) => img.name === technologyName);
      if (image) {
        technologiesWithImages.push(image);
      }
    }

    return technologiesWithImages;
  }

  return { getTechnologyImages };
}
