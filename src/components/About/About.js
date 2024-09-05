import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I&apos;m <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>
      
    </div>
  )
}

export default About
