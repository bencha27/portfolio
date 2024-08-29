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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
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
