import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Product Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `I'm a Product Designer and I build beautifully designed web and mobile projects. With UX/UI practices I use the latest trends in the industry. I'm a problem solver and blogger. My ambition is to make the client happy with a user-friendly digital products. Could you use some help on design and front-end? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello, I'm Aneta Stojanowska,`,
  name: 'a Product Designer',
  subtitle: `based in Amsterdam`,
  cta: 'My projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `Professional and enthusiastic Product Designer with front-end skills en knowledge of web and mobile design and UX/UI. Able to create beautifully designed web and mobile interfaces that serve countless people in many different roles, but which all fit consistently in platforms. Uses different facets and tools of design to create and execute solutions for a user’s experience optimization.`,
  paragraphTwo: `I’m a problem solver and enjoy participating in design sprints. In my spare time I write blog posts for the design community to help other product designers understand a topic.`,
  paragraphThree: ``,
  resume: 'https://medium.com/@anetastojanowska', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `Habitual e-commerce website redesign.`,
    info: `An online retailer that allows individuals
    and businesses to sell and display
    products for sale online`,
    info2: `Skills performed: Project Management, Modern Tools, Goal Conversion, Graphic Design, UX`,
    url: 'https://aneta-habitual-uxprocess.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'uwv.png',
    title: `UWV complex homepage redesign.`,
    info: `Helping unemployed people financially on
    conditions ensuring they seek work.`,
    info2: `Skills performed: Platform Development, Modern Tools, Goal Conversion, UX`,
    url: 'https://aneta-uwv-uxprocess.netlify.app',
    repo: '',
  },
  {
    id: uuidv1(),
    img: 'arbeidsmarkt.png',
    title: 'Arbeidsmarkt scrolling infographics.',
    info: `Translating complex data into something
    everyone should be able to understand at
    galance.`,
    info2: `Skills performed: Platform Development, Client & Project Management, Modern Tools, Goal Conversion, Graphic Design, UX.`,
    url: 'https://aneta-arbeidsmarkt-uxprocess.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'more-projects.jpg',
    title: `More projects including Graphic design, Goal conversion and Data visualization.`,
    info: `In my portfolio I show how I, as a designer, trade professionally in real-life situations. The material is always presented against the background of the situation in which that material played a role.`,
    info2: `Tools & Methodologies used: Sketch, Photoshop, Illustrator, Figma, Sketching, GitHub, Git, online resources for A/B testing etc.`,
    url: `/graphic-design-related-projects.pdf`,
    repo: ``, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Strives to work in teams with other experts and find efficient solutions for customers with complex needs. Let’s do something amazing.`,
  btn: 'Contact',
  email: 'a.stojanowska23@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/a_stojanowska',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/aneta-s',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stojanowska',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aneta-s',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
