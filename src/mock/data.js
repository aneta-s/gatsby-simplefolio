import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska, a UX/UI Designer based in Amsterdam', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `Professional and enthusiastic UX/UI Designer with front-end skills en knowledge of web and mobile design and UX`, // e.g: Welcome to my website
  img: 'seo.png',
  author: 'Aneta Stojanowska',
};

// HERO DATA
export const heroData = {
  title: `Hello, I'm Aneta Stojanowska,`,
  name: 'a UX/UI Designer,',
  subtitle: `based in Amsterdam`,
  cta: 'My projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.png',
  paragraphOne: `Professional and enthusiastic UX/UI Designer with front-end skills en knowledge of web and mobile design and UX.`,
  paragraphTwo: `I have been designing for 5 years and freelancing for 2 years. I have been a UX/UI Designer for web and mobile apps using Figma, Illustrator and HTML-prototypes. I have some experience in facilitaiting the feedback sessions in LEAN environments. I have done front-end development with component-based design in modern JavaScript frameworks.`,
  paragraphThree: `I’m a problem solver and enjoy participating in design sprints. In my spare time I write blog posts for the design community to help other designers understand a topic.`,
  resume: '/resume-uxui-designer.pdf', // if no resume, the button will not show up
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
    title: 'Arbeidsmarkt real-time infographics.',
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
    title: `More projects including Graphic design and Data visualization.`,
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
      name: 'medium',
      url: 'https://medium.com/@anetastojanowska',
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
