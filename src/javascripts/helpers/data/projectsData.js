const projects = [
  {
    title: 'Pet Adoption',
    screenshot: './src/assets/images/petAdoption.jpg',
    description:
      'A single page site that shows pets up for adoption and allows filtering based on the type of pet.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://bandstrar-pet-adoption.netlify.app/',
    githubUrl: 'https://github.com/bandstrar/pet-adoption',
  },
  {
    title: 'Dino Kennel',
    screenshot: './src/assets/images/dino-kennel.png',
    description: 'A single page application that lets the user be in charge of a dinosaur kennel.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Bootstrap, Modules',
    available: true,
    url: 'https://github.com/bandstrar/dino-kennel',
    githubUrl: 'https://bandstrar-dino-kennel.netlify.app/',
  },
  {
    title: 'The Sorting Hat',
    screenshot: './src/assets/images/sortingHat.jpg',
    description:
      'A single page site that allows users to input their name and randomly assigns them a house.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://bandstrar-sorting-hat.netlify.app/',
    githubUrl: 'https://github.com/bandstrar/sorting-hat',
  },
  {
    title: 'Chatty',
    screenshot: './src/assets/images/chatty.png',
    description:
      'A fun chat application based on the Peanuts comic strip.',
    technologiesUsed:
      'HTML, SASS, Vanilla JavaScript, Version Control with Github, jQuery, Bootstrap, Webpack',
    available: true,
    url: 'https://bandstrar-chatty.netlify.app/',
    githubUrl: 'https://github.com/bandstrar/chatty-beta',
  },
  {
    title: 'Tamagotchi',
    screenshot: './src/assets/images/tamagotchi.png',
    description:
      'A single-page website that lets the user take care of a virtual pet.',
    technologiesUsed:
      'Premade HTML (no HTML added except using JavaScript), SASS, JavaScript, Version Control with Github, jQuery, Webpack',
    available: false,
    url: 'https://bandstrar-tamagotchi.netlify.app/',
    githubUrl: 'https://github.com/bandstrar/tamagotchi',
  },
];

const getProject = () => projects;

export default { getProject };
