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
  bio:'',
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
    linkedin: "https://www.linkedin.com/in/ajs3993/",
    github: "https://github.com/AJS3993"
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
      school: "General Assembly",
      degree: "Software Engineering",
      fieldOfStudy: "Computer Science",
      location: "Austin, TX",
      from: "October 2019",
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
