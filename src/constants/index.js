import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  git,
  D3,
  cPlusPlus,
  PostgreSQL,
  unity,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  framerMotion,
  CharacterGame,
  QuoteMachine,
  eCommerce,
  TVShowsFinder,
  drumMachine,
  markdownPreviewer,
  ReactFigmaGpt3,
  LandingPage,
  ReactIssues,
  GiphyApp,
  ToDoList,
  pokedex,
  ATM,
  StudentWeb,
  JSCalculator,
  YoutubeClone,
  JSTechDoc
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Bootstrap',
    icon: bootstrap
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'framerMotion',
    icon: framerMotion
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'D3',
    icon: D3
  },
  {
    name: 'cPlusPlus',
    icon: cPlusPlus
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL
  },
  {
    name: 'unity',
    icon: unity
  }
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'React Character Game',
    description:
        'Web-based game made with React using the Disney API, with transitions made with the framer motion library, routing made with react router. Try your luck and see how many characters you can guess!',
    image: CharacterGame,
    source_code_link: 'https://github.com/JoseMiguelVazquez/react-disney-quiz',
    deployment_link: 'https://react-character-game.netlify.app/'
  },
  {
    name: 'Random Quote Machine',
    description:
        'Web application made with React that retrieves a random quote from the Quotable API; If you find a quote inspiring you can post it on your twitter account.',
    image: QuoteMachine,
    source_code_link: 'https://github.com/JoseMiguelVazquez/random_quote_machine/tree/master/quote_machine',
    deployment_link: 'https://jmve-random-quote-machine.netlify.app/'
  },
  {
    name: 'E-Commerce',
    description:
        'E-commerce made with React and Bootstrap using a local API (on the works), front-end finished with user creation, validation, authorization and shopping cart functionalities.',
    image: eCommerce,
    source_code_link: 'https://github.com/JoseMiguelVazquez/e-commerce-react'
  },
  {
    name: 'TV Show Finder',
    description:
        'Application that allows you to browse and find information (summary, episodes, cast) about TV shows using the TV Maze API.',
    image: TVShowsFinder,
    source_code_link: 'https://github.com/JoseMiguelVazquez/series-finder',
    deployment_link: 'https://react-tv-show-finder.netlify.app/'
  },
  {
    name: 'Drum Machine',
    description:
        'A simple drum machine that plays precharged sounds depending on the keyboard key you press, allowing you to make some music.',
    image: drumMachine,
    source_code_link: 'https://github.com/JoseMiguelVazquez/drum-machine',
    deployment_link: 'https://jmve-react-drum-machine.netlify.app/'
  },
  {
    name: 'Markdown Previewer',
    description:
        'Web page that lets you type GitHub flavored markdown on the editor and renders it live converting it to styled HTML.',
    image: markdownPreviewer,
    source_code_link: 'https://github.com/JoseMiguelVazquez/markdown-previewer',
    deployment_link: 'https://jmve-markup-previewer.netlify.app/'
  },
  {
    name: 'Figma GPT-3 SPA Landing Page',
    description:
        'A SPA landing page made with React following a Figma design about a new GPT-3 app by OpenAI.',
    image: ReactFigmaGpt3,
    source_code_link: 'https://github.com/JoseMiguelVazquez/react-figma-gpt3-app',
    deployment_link: 'https://josemiguelvazquez.github.io/react-figma-gpt3-app/'
  },
  {
    name: 'React Landing Page',
    description:
        'A generic SPA landing page made with React with an eye-catching design.',
    image: LandingPage,
    source_code_link: 'https://github.com/JoseMiguelVazquez/landing-page',
    deployment_link: 'https://josemiguelvazquez.github.io/landing-page/'
  },
  {
    name: 'React Issues App',
    description:
        'App that lists forum posts from the latest react issues using the github API with links to the actual posts and labels showing their status.',
    image: ReactIssues,
    source_code_link: 'https://github.com/JoseMiguelVazquez/react-issues-app',
    deployment_link: 'https://josemiguelvazquez.github.io/react-issues-app/'
  },
  {
    name: 'Giphy App',
    description:
        'React app that renders the trending gifs from Giphy, you can search and filter new gifs typing on the search bar.',
    image: GiphyApp,
    source_code_link: 'https://github.com/JoseMiguelVazquez/giphy-app',
    deployment_link: 'https://josemiguelvazquez.github.io/giphy-app/'
  },
  {
    name: 'To-Do List App',
    description:
        'Web application made with React that lets you create a list of pending tasks and remove them if you have completed them.',
    image: ToDoList,
    source_code_link: 'https://github.com/JoseMiguelVazquez/to-do-list',
    deployment_link: 'https://josemiguelvazquez.github.io/to-do-list/'
  },
  {
    name: 'JavaScript PokéDex',
    description:
        'PokéDex made with vanilla JavaScript, it shows all current pokémon using the PokeAPI and uses transitions to give it a modern look. You can open information about a specific pokémon by clicking on it, searching for it or clicking random to get one',
    image: pokedex,
    source_code_link: 'https://github.com/JoseMiguelVazquez/pokedex',
    deployment_link: 'https://josemiguelvazquez.github.io/pokedex/'
  },
  {
    name: 'ATM',
    description:
        'A web bank automated teller machine that lets you check your current account balance, make deposits or withdraw money; Made with vanilla JavaScript.',
    image: ATM,
    source_code_link: 'https://github.com/JoseMiguelVazquez/ATM',
    deployment_link: 'https://josemiguelvazquez.github.io/ATM/'
  },
  {
    name: 'JavaScript Student Web',
    description:
        'Web page made with JavaScript that lets you grade and register students and create classes for those students in an intuitive visual interface.',
    image: StudentWeb,
    source_code_link: 'https://github.com/JoseMiguelVazquez/StudentGradesWeb',
    deployment_link: 'https://josemiguelvazquez.github.io/StudentGradesWeb/'
  },
  {
    name: 'JS Calculator',
    description:
        'A nice looking calculator made with JavaScript.',
    image: JSCalculator,
    source_code_link: 'https://github.com/JoseMiguelVazquez/JScalculator',
    deployment_link: 'https://josemiguelvazquez.github.io/JScalculator/'
  },
  {
    name: 'HTML YouTube Clone',
    description:
        'YouTube 2022 interface clone, made with HTML5 and CSS3.',
    image: YoutubeClone,
    source_code_link: 'https://github.com/JoseMiguelVazquez/Youtube-Clone',
    deployment_link: 'https://josemiguelvazquez.github.io/Youtube-Clone/'
  },
  {
    name: 'JS Technical Documentation Page',
    description:
        'HTML and CSS web reference page with technical information about JavaScript.',
    image: JSTechDoc,
    source_code_link: 'https://github.com/JoseMiguelVazquez/JS-Technical-Documentation-Page',
    deployment_link: 'https://josemiguelvazquez.github.io/JS-Technical-Documentation-Page/'
  }
]

export { services, technologies, experiences, testimonials, projects }
