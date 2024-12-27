export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experiences',
      href: '#experiences',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];

export const myProjects = [
    {
      title: 'Spacecraft Game',
      desc: 'Spacecraft is a game where players take on the role of a space penguin tasked with piloting a spaceship and avoiding asteroids.',
      subdesc:
        'My first time of creating a game using phaser.js and first project in university.',
      href: 'https://github.com/ttamx/Comp-Eng-Ess-Final-Project/',
      texture: 'textures/project/project1.mp4',
      logo: 'assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: 'assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: 'assets/tech/javascript.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/tech/css.png',
        },
        {
          id: 3,
          name: 'HTML',
          path: 'assets/tech/html.png',
        },
        {
          id: 4,
          name: 'Phaser-js',
          path: 'assets/phaser.png',
        },
      ],
    },
    {
      title: 'TA Beam\'s Adventure Game',
      desc: 'RPG game where the player takes on the role of TA Beam, who is lost in another multiverse and has to conquer the boss with rock-paper-scissors game!',
      subdesc:
        'This project is a part of Prog Meth course in university,made with JavaFX and OOP concept.',
      href: 'https://github.com/2110215-ProgMeth/project-cp-2023-2-withdraw-with-me/',
      texture: 'textures/project/project2.mp4',
      logo: 'assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Java',
          path: 'assets/tech/java.png',
        },
        {
          id: 2,
          name: 'JavaFX',
          path: 'assets/javafx.png',
        },
      ],
    },
    {
      title: 'FoodSpirit Quiz',
      desc: 'My own project in summer break, a quiz game to explore your food spitir based on MBTI types.',
      subdesc:
        'This project is made with just basic HTML, CSS and JavaScript. It\'s my first step to web development. However, I most spent time with creating all the story and drawing by myself. ',
      href: 'https://cchinchillaz.github.io/FoodSpirit-Quiz/',
      texture: 'textures/project/project3.mp4',
      logo: 'assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: 'assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: 'assets/tech/javascript.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/tech/css.png',
        },
        {
          id: 3,
          name: 'HTML',
          path: 'assets/tech/html.png',
        },
        {
          id: 4,
          name: 'Canva',
          path: 'assets/canva.png',
        },
      ],
    },
    {
      title: 'Nattarin Portfolio Website',
      desc: 'This is not a joke, this website is my project too! I put a lot of works and creations to this project, hope you like it! .',
      subdesc:
        'Built with React, Vite,TaiwindCSS, and Threejs, Thanks for portfolio template from JavaScript Mastery Youtube channel.',
      href: '/',
      texture: 'textures/project/project4.mp4',
      logo: 'assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D'
      },
      spotlight: 'assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Three.js',
          path: 'assets/tech/threejs.svg',
        },
        {
          id: 4,
          name: 'Vite',
          path: 'vite.svg',
        },
      ],
    },
];
  
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      cubePosition: isSmall ? [-3, 7, 0] : isMobile ? [-8, 10, 0] : isTablet ? [-7, 10, 0] : [-20, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-8, -13, -10],
    };
  };
  
  export const technologies = [
    {
      name: "HTML 5",
      icon: "assets/tech/html.png",
    },
    {
      name: "CSS 3",
      icon:"assets/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "assets/tech/javascript.png",
    },
    {
      name: "Python",
      icon: "assets/tech/python.png",
    },
    {
      name: "React JS",
      icon: "assets/tech/reactjs.png",
    },
    {
      name: "Java",
      icon: "assets/tech/java.png",
    },
    {
      name: "Tailwind CSS",
      icon: "assets/tech/tailwind.png",
    },
    {
      name: "Three JS",
      icon: "assets/tech/threejs.svg",
    },
    {
      name: "git",
      icon: "assets/tech/git.png",
    },
    {
      name: "figma",
      icon: "assets/tech/figma.png",
    },
    {
      name: "cpp",
      icon: "assets/tech/cpp.png",
    },
];

export const hobbies = [
    { 
      number:1,
      id: "c1",
      title: 'Piano',
      desc: 'I love playing piano to feel relaxing when I am stressed',
    },
    { 
      number:2,
      id: "c2",
      title: 'Gaming',
      desc: 'Playing games is the most fun thing to do when I am bored',
    },
    {
      number:3,
      id: "c3",
      title: 'Chess',
      desc: 'I started playing chess when I watched the Queen\'s Gambit',
    },
    {
      number:4,
      id: "c4",
      title: 'Movies',
      desc: 'I like to watch movies, my favorite is Dead Poets Society!',
    }
];

export const experiences = [
  {
    id: 1,
    title: '19th Thailand Mathemetical Olympiad',
    desc: 'I was a contestant in the 19th Thailand Mathematical Olympiad (TMO19) and I got a silver medal.',
  },
  {
    id: 2,
    title: 'USA Summer Camp',
    desc: 'When I was in grade 9, I went to the USA for a summer camp. The best trip ever!',
  },
  {
    id: 3,
    title: 'Student One Health Camp for Rabies Control',
    desc: 'I was a volunteer in the Student One Health Camp for Rabies Control. I learned a lot about rabies and how to prevent it.',
  },
  {
    id: 4,
    title: 'Integral Bee Staff',
    desc: 'I was a staff in the Integral Bee,calculus competition of Chulalongkorn university.',
  },
  {
    id: 5,
    title: 'The 22nd Vishnu',
    desc: 'I was a staff in the 22nd Vishnu,engineering freshman orientation of Chulalongkorn university.',
  },
  {
    id: 6,
    title: 'LeaderShip Program at Singapore',
    desc: 'When I was in grade 8, my school took my class to Singapore for a leadership program. First time abroad with my friends.',
  },
  {
    id: 7,
    title: '12th Grade Graduation',
    desc: 'High school life is one thing I will never forget, these are the pictures of my class!',
  },
  {
    id: 8,
    title: 'The 49th National University Games',
    desc: 'I was a university athlete in the 49th National University Games, competing in the women\'s team and pair events of international chess, where I won a silver and a bronze medal.',
  },
  {
    id: 9,
    title: 'Top Gun Rally 2024',
    desc: 'My team won gold medal in the Top Gun Rally 2024 (5th place), It is an experience you can\'t find anywhere else',
  }
];
  