import screenshotVirtualBookClub from "./assets/images/screenshot-virtual-book-club.png";
import screenshotBasicCalculator from "./assets/images/screenshot-basic-calculator.png";
import screenshotGuardianGuide from "./assets/images/screenshot-guardian-guide.png";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bencha27.github.io/portfolio/',
  title: 'BC',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ben Cha',
  role: 'Full-Stack Developer',
  description:
    "I'm an emerging software engineer and a veteran educator who loves to solve problems and strives for excellence.",
  resume: 'https://drive.google.com/file/d/1ozmaOheyDFmWmIZ35SNKDL7vbTzAB3E0/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/benjamin-cha/',
    github: 'https://github.com/bencha27',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Virtual Book Club',
    description:
      'Social media app where users can post reviews and comments on books',
    stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Node.js", "Express", "MongoDB", "GraphQL"],
    sourceCode: 'https://github.com/bencha27/virtual-book-club',
    livePreview: 'https://virtual-book-club.herokuapp.com/',
    image: screenshotVirtualBookClub
  },
  {
    name: 'Basic Calculator',
    description:
      'Simple four-function calculator with some helpful features',
    stack: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: 'https://github.com/bencha27/basic-calculator',
    livePreview: 'https://bencha27.github.io/basic-calculator/',
    image: screenshotBasicCalculator
  },
  {
    name: 'Guardian Guide',
    description:
      'Task management app for members of households to keep track of their tasks and events in one place',
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Materialize"],
    sourceCode: 'https://github.com/bencha27/Guardian-Guide',
    livePreview: 'https://guardian-guide-1222.herokuapp.com',
    image: screenshotGuardianGuide
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Bootstrap',
  'Node.js',
  'Express',
  'MongoDB',
  'GraphQL',
  'MySQL',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mrbenjamincha@gmail.com',
  resume: 'https://drive.google.com/file/d/1ozmaOheyDFmWmIZ35SNKDL7vbTzAB3E0/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/benjamin-cha/',
    github: 'https://github.com/bencha27',
  },
}

export { header, about, projects, skills, contact }
