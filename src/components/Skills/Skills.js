import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const deviconMap = new Map([
    ["HTML", "devicon-html5-plain colored"],
    ["CSS", "devicon-css3-plain colored"],
    ["JavaScript", "devicon-javascript-plain colored"],
    ["React", "devicon-react-original colored"],
    ["Bootstrap", "devicon-bootstrap-plain colored"],
    ["Node.js", "devicon-nodejs-plain colored"],
    ["Express", "devicon-express-original colored"],
    ["MongoDB", "devicon-mongodb-plain colored"],
    ["GraphQL", "devicon-graphql-plain colored"],
    ["MySQL", "devicon-mysql-original colored"],
    ["Material UI", "devicon-materialui-plain colored"],
    ["Git", "devicon-git-plain colored"]
  ]);

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <i className={deviconMap.get(skill)} />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
