import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  // const [loading, setLoading] = useState(false)

  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div
          className='mt-12 flex flex-col gap-8'
        >
          <Link className='contact-link' id='profile-link' to='https://github.com/JoseMiguelVazquez' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-github' />
            <p>GitHub</p>
          </Link>
          <Link className='contact-link' to='https://www.linkedin.com/in/jos%C3%A9-miguel-v%C3%A1zquez-espinosa-35a97691/' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-linkedin' />
            <p>LinkedIn</p>
          </Link>
          <Link className='contact-link' to='mailto:josemiguelvazqueze@gmail.com' target='_blank' rel='noreferrer'>
            <i className='fa-regular fa-at' />
            <p>Send an Email</p>
          </Link>
          <Link className='contact-link' to='tel:522223778989' target='_blank' rel='noreferrer'>
            <i className='fa-solid fa-mobile-screen-button' />
            <p>Call me</p>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
