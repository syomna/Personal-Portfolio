import Iti from "../assets/iti.png";
import Upwork from "../assets/upwork.svg";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";
import firebase from "../assets/firebase.png";
import threejs from "../assets/threejs.svg";
import artigen from "../assets/projects/artigen.jpeg";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import nanny from "../assets/projects/nanny.jpg";
import whosapp from "../assets/projects/whosapp.jpg";
import football from "../assets/projects/football.png";
export const MainColor = "#6969cd";
export const Grey = "#d4d0d9";
export const Skillss = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const WorkingExperience = [
  {
    img: Iti,
    title: "Front-end & Cross-platform Intern",
    place: "Information Technology Institute (ITI) , Cairo University",
    date: "Mar 2023 - Jun 2023",
    description: [
      "• Worked on real-world projects, collaborating with a team of developers",
      "• Enhanced technical skills in front-end web development (HTML, CSS, JavaScript, TypeScript)",
      "• Familiarity with frameworks like Angular, React (with Redux)",
      "• Proficient in Node.js, Express.js, MongoDB",
      "• Knowledge of UI/UX principles using Figma",
      "• Experienced in cross-platform mobile app development (React Native, Flutter)",
    ],
  },
  {
    img: Upwork,
    title: "Software Developer",
    place: "Upwork",
    date: "Aug 2021 - Present",
    description: [
      "• Collaborated with clients to develop seamless mobile applications using Flutter framework.",
      "• Leveraged Firebase for real-time database, user authentication, and cloud storage. ",
      "• Integrated various APIs to enhance app functionalityand enable data synchronization with external services.",
      "• Developed captivating, responsive user interfaces using React.js and Next.js for web projects.",
    ],
  },
];

export const Projectss = [
  {
    img: artigen,
    title: "ArtiGen",
    subTitle:
      "ArtiGen is a React.js project for generating images from text using the power of AI. It provides a user-friendly interface that allows users to enter text or use speech-to-text functionality to generate images. The generated images can be downloaded by the users.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "eden ai",
        color: "#ffcc80",
      },
      {
        name: "react-speech-recongization",
        color: "#a5d6a7",
      },
    ],
    demo: "https://drive.google.com/file/d/1SayBubqkMEQ7JUx-kW-MgoSf0BrckSuF/view?usp=drive_link",
    github: "https://github.com/syomna/ArtiGen",
  },
  {
    img: chatty,
    title: "Chatty",
    subTitle:
      "Chatty is a dynamic chat web application that allows users to connect and communicate in real-time. It offers a range of features such as secure login/register system, real-time chatting, emojis, profile information editing, and a customizable dark mode and light mode.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "mui",
        color: "#ffc8ae",
      },
      {
        name: "nodejs",
        color: "#ffcc80",
      },
      {
        name: "mongodb",
        color: "#a5d6a7",
      },
      {
        name: "socket.io",
        color: "#ffe082",
      },
    ],
    demo: "https://drive.google.com/file/d/1rShsU0jDZ5OSrDKByA67yWjBIbRGOIQ4/view?usp=drive_link",
    github: "https://github.com/syomna/Chatty-Reactjs-Nodejs-app",
  },

  {
    img: ipark,
    title: "IPark",
    subTitle:
      "IPark is a web & mobile application that provides parking solutions for users. It allows users to find the nearest available garage, reserve it using either cash or card payment methods, and view their reservation history. Additionally, an admin dashboard is available for approving or unapproving signed garages.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "react-native",
        color: "#a1e9ff",
      },
      {
        name: "redux-toolkit",
        color: "#ffcc80",
      },
      {
        name: "firebase",
        color: "#ffc8ae",
      },
      {
        name: "stripe",
        color: "#ffcc80",
      },
      {
        name: "mui",
        color: "#a5d6a7",
      },
      {
        name: "google-cloud",
        color: "#ffe082",
      },
    ],
    demo: "https://drive.google.com/drive/folders/1Uq7eTYdla0i_A9y6TSm7du9MjH2trya6?usp=drive_link",
    github: "https://github.com/Nader-CS/parking-system",
  },

  {
    img: nanny,
    title: "NannyFinder",
    subTitle:
      "Nanny Finder is a comprehensive mobile app designed for hassle-free nanny job applications, advanced profile filtering, and seamless communication. Experience the convenience of a user-friendly web version and an intuitive admin dashboard, ensuring efficient nanny recruitment like never before.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "dynamic-links",
        color: "#ffc8ae",
      },
      {
        name: "flutter-web",
        color: "#ffcc80",
      },
      {
        name: "hosting",
        color: "#a5d6a7",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
    appStore: "https://apps.apple.com/app/id6443669769",
  },

  {
    img: whosapp,
    title: "Whosapp",
    subTitle:
      "Whosapp is an innovative mobile app that revolutionizes how you discover and connect with nearby service providers. Seamlessly explore a wide range of services as providers showcase their expertise, ensuring you find the perfect match for your needs. ",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "fcm",
        color: "#ffc8ae",
      },
      {
        name: "google-cloud",
        color: "#ffcc80",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore: "https://play.google.com/store/apps/details?id=com.whos.whosapp",
    appStore: "https://apps.apple.com/eg/app/whosapp-app/id1642543173",
  },

  {
    img: football,
    title: "Ghana Football",
    subTitle:
      "Ghana Football is a ultimate mobile app for football enthusiasts. Immerse yourself in live football matches and never miss a moment of the action. Stay up-to-date with the latest news, scores, and highlights, all in one convenient platform. ",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "api",
        color: "#ffc8ae",
      },
      {
        name: "google-analytics",
        color: "#ffcc80",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
    appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
  },
];
