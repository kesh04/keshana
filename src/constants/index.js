import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/bro.jpg";
import project3 from "../assets/projects/bus.jpg";
import project4 from "../assets/projects/kes.jpg";
import project5 from "../assets/projects/cer.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, React Native and Next.js, as well as back-end technologies like Node.js, MySQL, Express.js, Firebase and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, React Native, Firebase and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024/03/15 - Present",
    role: "Software Engineer ",
    company: "CEEET",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [ "React.js", "Node.js", "Express.js", "mongoDB"],
  },
  {
    year: "2023/11/15 - 2024/05/24",
    role: "FullStack Developer(Internship) ",
    company: "updropp",
    description: `Designed and developed user interfaces for web applications using React Native and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React Native", "React.js", "Node.js", "mySQL"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [   "React","CSS", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Food Delivery website",
    image: project2,
    description:
      "user can  log  into  the  system and order foods, check menu  , online transfer, reservation, cancel .Admin  can log into  the system  check order and delivery",
    technologies: [   "HTML","CSS", "PHP", "MYSQL", ],
  },
  {
    title: "BUS Tracking App",
    image: project3,
    description:
      "The BUS Tracking App allows users to log into the system and check the live location of buses. Users can also contact special trip buses and check bus availability with ease",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "JWT"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind Css"],
  },
  {
    title: "Certificate Management System",
    image: project5,
    description:
      "Admin  can  register institute, then institute can  register student, add course, batch, generate certificates, assign student for certificates",
    technologies: ["React.js",  "Node.js", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Colombo waththa Alankulama Anuradhapura , Sri Lanka ",
  phoneNo: "+94 70 2414082 ",
  email: "keshana004@gmail.com",
};
