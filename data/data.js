/*!
 * Guim González - Portfolio v1.0.0 (https://guimgonzalez.me)
 * Copyright 2019 Guim González
 * Licensed under MIT (https://github.com/GuimG/dev-portfolio/master/LICENSE)
 */

// Change your profile data here
let profile = {
  picture: "",
  name: "Andrew Smith",
  description: "Software Engineer & Fullstack Developer",
  bio:
    "I'm a Software Engineer interested in Internet technologies, computer networks and security. From the FullStack development to the most innovative technologies such as Blockchain.<br><br>High level of web languages (JS, HTML and CSS), average level of C and C++. Great understanding of Internet protocols, P2P networks and cloud infrastructures. I work with JS frameworks, JQuery (old days) and React.js (now).",
  email: "AJS3993@gmail.com",
  location: "Austin, TX",
  skills: [
    "CSS",
    "HTML",
    "Javascript",
    "MongoDB",
    "NodeJS",
    "React",
    "SQL",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/guim-gonzalez-846606134/",
    twitter: "https://twitter.com/GuimGonzalez",
    github: "https://github.com/GuimG/",
    stackoverflow: "https://stackoverflow.com/users/8700961/guim-gonzalez",
    dev: "https://dev.to/guimg"
  },
  experience: [
    {
      title: "FullStack Developer",
      company: "Freelance",
      url: "https://guimgonzalez.business/",
      location: "Barcelona, Spain",
      description:
        "I do websistes for small businesses. I develop both frontend and backend. I also setup and mantain the VPS.",
      from: "September 2017",
      to: "Now"
    },
    {
      title: "IT Consultant",
      company: "Innova-TSN",
      url: "https://www.innova-tsn.com/",
      location: "Barcelona, Spain",
      description:
        "I developed web services, worked with SAS (ETL's), and email marketing with Oracle Eloqua.",
      from: "July 2018",
      to: "February 2019"
    }
  ],
  education: [
    {
      school: "Universitat Autònoma de Barcelona",
      degree: "Engineering",
      fieldOfStudy: "Computer Science",
      location: "Barcelona, Spain",
      from: "September 2016",
      to: "Now"
    }
  ],
  quote: "I turn coffee into code"
};

let page = {
  language: "english",
  // ^ languages suported:
  //  - english (default)
  theme: "nightsky"
  // ^ themes suported:
  //  - nightsky (default)
  //  - sunset
  //  - purpledream
  //  - cutekitty
};
