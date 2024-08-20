
import project2 from "../assets/projects/project2.jpg";
import ports from "../assets/projects/ports.jpg";
import travel from "../assets/projects/travel.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

const link = document.createElement('a');

export const EXPERIENCES = [

  {
   
    role: "Frontend Developer",
 
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "Kotlin", "Ruby", "Typescript", "Objective-C", "Objective-C++"],
  },
  {
    
    role: "Frontend Developer",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies:  ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
  },
  {
    year: "2020 - 2021",
    role: "Frontend Developer",
    description: `This repo contains Travel and Tourism Website Project. This project has no backend.`,
    technologies: ["HTML", "CSS"],
  },
];

export const PROJECTS = [
 
  {
    title: "Feedback System",
    image: project2,
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking. It is a group project which is presented in Police Hackaton 1.0. There are 3 members in this group.",
    technologies: ["Javascript", "Kotlin", "Ruby", "Typescript", "Objective-C", "Objective-C++"],
    link:`http://github.com/AanchalSharma09/RJPOLICE_HACK_183_CURIOUSTECHNOES_1`,
  },
  {
    title: "Portfolio Website",
    image: ports,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. It is used for showing the profile of a candidate and get more information about them. Here candidate provide the description of there project and also provide link of it. ",
    technologies: ["HTML", "CSS", "Javascript", "React", "Tailwind", "Vite"],
    link:`http://www.youtube.com/`,
  },
  {
    title: "Tourism Website",
    image: travel,
    description:
      "This repo contains Travel and Tourism Website Project. This project has no backend. It designed to provide seamless travel planning, destination guides, and personalized experiences, all in one place.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link:`http://aanchalsharma09.github.io/Travel_and_Tourism-Website/`,
  },
];



export const CONTACT = {
  address: "Jaipur, Rajasthan, India",
  phoneNo: "8955692025 , 9680504210" ,
  email: "aanchalsharma4077@gmail.com",

};
