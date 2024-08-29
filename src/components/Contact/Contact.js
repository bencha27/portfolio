import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { email, resume, social } = contact;
  if (!email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='center'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email
          </span>
        </a>

        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
        
        <a
          href={social.github}
          aria-label='github'
          className='link link--icon'
        >
          <GitHubIcon fontSize='large' />
        </a>

        <a
          href={social.linkedin}
          aria-label='linkedin'
          className='link link--icon'
        >
          <LinkedInIcon fontSize='large' />
        </a>
      </div>

    </section>
  )
}

export default Contact
