import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import DocumentIcon from "@material-ui/icons/Description";
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { email, resume, social } = contact;
  if (!email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='center'>
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <span type='button' className='btn btn--plain'>
            <EmailIcon fontSize='medium' />
            Email
          </span>
        </a>

        <a href={resume} target="_blank" rel="noreferrer">
          <span type='button' className='btn btn--plain'>
            <DocumentIcon fontSize='medium' />
            Resume
          </span>
        </a>
        
        <a href={social.github} target="_blank" rel="noreferrer">
          <span type='button' className='btn btn--plain'>
            <GitHubIcon fontSize='medium' />
            GitHub
          </span>
        </a>

        <a href={social.linkedin} target="_blank" rel="noreferrer">
          <span type='button' className='btn btn--plain'>
            <LinkedInIcon fontSize='medium' />
            LinkedIn
          </span>
        </a>
      </div>

    </section>
  )
}

export default Contact
