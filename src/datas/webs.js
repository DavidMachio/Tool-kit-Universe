export const webs = [
  {
    id: 1,
    name: "GitHub",
    tags: "Desarrollo, programacion, RRSS",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: `GitHub es una plataforma en línea para el control de versiones y la gestión de proyectos de desarrollo de software. Permite a los desarrolladores colaborar en proyectos, realizar un seguimiento de las versiones de su código, informar problemas (issues), solicitar cambios (pull requests) y más. GitHub utiliza el sistema de control de versiones Git, lo que facilita la colaboración y el seguimiento de cambios en el código fuente.

    Los repositorios en GitHub son el lugar donde se almacena el código fuente de un proyecto, y las personas pueden contribuir a esos repositorios, ya sea agregando código nuevo o realizando cambios en el código existente. GitHub también ofrece funciones de seguimiento de problemas, donde los usuarios pueden informar errores o solicitar nuevas características, y las conversaciones relacionadas con esos problemas se pueden llevar a cabo directamente en la plataforma.
    
    GitHub es ampliamente utilizado en la comunidad de desarrollo de software y es una herramienta fundamental para el desarrollo colaborativo de proyectos de código abierto y privados. También se utiliza para alojar la documentación del proyecto y actuar como un portafolio en línea para desarrolladores. `,
    icon: "/images/iconoswebs/Github.png",
    imgcard: "/images/cards/githubcover.png",
    img1: "/images/cards/github1.png",
    img2: "/images/cards/github2.png",
    url: "https://github.com/",
  },
  {
    id: 2,
    name: "Freecodecamp",
    tags: "Desarrollo, ejercicios, js, css",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: `FreeCodeCamp es una plataforma en línea que ofrece recursos de aprendizaje gratuitos en programación y desarrollo web. Fue fundada en 2014 por Quincy Larson y ha ganado popularidad como una fuente valiosa de educación en línea para programadores y desarrolladores web.

    FreeCodeCamp ofrece una variedad de cursos y tutoriales interactivos en áreas como desarrollo web, diseño web, ciencia de datos y más. Los cursos a menudo incluyen lecciones, desafíos de codificación y proyectos prácticos para ayudar a los estudiantes a adquirir habilidades prácticas. Además, freeCodeCamp proporciona certificaciones gratuitas que los estudiantes pueden obtener una vez que completen con éxito una serie de cursos y proyectos.
    
    Una característica distintiva de freeCodeCamp es su enfoque en la programación de código abierto y la contribución a proyectos de código abierto. Los estudiantes son alentados a contribuir a proyectos de código abierto como parte de su aprendizaje y desarrollo de habilidades.
    
    FreeCodeCamp es ampliamente reconocido por su comunidad activa y su enfoque en proporcionar recursos de alta calidad de forma gratuita, lo que lo convierte en una opción popular para aquellos que desean aprender a programar y mejorar sus habilidades de desarrollo web sin costo alguno.`,
    icon: "/iconos/iconoswebs/Freecodecamp.png",
    imgcard: "/images/cards/freecodecampcover.png",
    img: "",
    url: "https://www.freecodecamp.org/",
  },
  {
    id: 3,
    name: "Stackoverflow",
    tags: "Desarrollo, ejercicios, js, css",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Stackoverflow.png",
    imgcard: "/images/cards/stackoverflowcover.png",
    img: "",
    url: "https://stackoverflow.com/",
  },
  {
    id: 4,
    name: "Excalidraw",
    tags: "Desarrollo, diseño, maquetación, dibujo",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Excalidraw.png",
    imgcard: "/images/cards/excalidrawcover.png",
    img: "",
    url: "https://excalidraw.com/",
  },
  {
    id: 5,
    name: "CSS Gradient",
    tags: "Desarrollo, diseño, css, blog, colores",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Cssgradient.jpeg",
    imgcard: "/images/cards/cssgradientcover.png",
    img: "",
    url: "https://cssgradient.io/",
  },
  {
    id: 6,
    name: "Happyhues",
    tags: "Desarrollo, diseño, css, colores",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Happyhues.png",
    imgcard: "/images/cards/happyhuescover.png",
    img: "",
    url: "https://www.happyhues.co/",
  },
  {
    id: 7,
    name: "CSS Tricks",
    tags: "Desarrollo, css, blog",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Csstricks.png",
    imgcard: "/images/cards/csstricks.png",
    img: "",
    url: "https://css-tricks.com/",
  },
  {
    id: 8,
    name: "Recursos Cosmicos",
    tags: "Desarrollo, css, blog",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/Recursoscosmicos.png",
    imgcard: "/images/cards/recursoscosmicos.png",
    img: "",
    url: "https://recursoscosmicos.com/",
  },
  {
    id: 9,
    name: "Los apuntes de Majo",
    tags: "Desarrollo, css, blog",
    descriptioncard: "Descripcion previa para la tarjeta",
    description: "Descripcion mas larga que aparecera en la pagina dse la app",
    icon: "/iconos/iconoswebs/losapuntesdemajo.png",
    imgcard: "/images/cards/losapuntesdemajo.png",
    img: "",
    url: "https://losapuntesdemajo.vercel.app/",
  },
];

export const getWebs = (name) => {
  const foundWeb = webs.find((web) => web.name === name);
  return foundWeb;
};
