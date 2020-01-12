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
      title: "Preceptor",
      company: "Scott and White",
      url: "url",
      location: "Temple, TX",
      description:
        "Performed genetic testing in a fast-paced laboratory",
      from: "4/15/16",
      to: "7/15/16"
    },
    {
      title: "PT Tech",
      company: "Texas Orthopedic Therapy",
      url: "url",
      location: "El Paso, TX",
      description:
        "Kept track of patient records and guided patients through exercises",
      from: "8/15/16",
      to: "8/15/19"
    }
  ],
  education: [
    {
      school: "General Assembly",
      degree: "Software Engineering",
      fieldOfStudy: "Computer Science",
      location: "Austin, TX",
      from: "10/12/19",
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
