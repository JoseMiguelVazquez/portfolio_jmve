import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { BsGithub, BsLinkedin, BsPhone } from 'react-icons/bs'
import { SiMaildotru } from 'react-icons/si'

const Contact = () => {
  // const [loading, setLoading] = useState(false)

  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col overflow-hidden justify-center items-center w-full'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl xl:me-[20px] w-full xl:w-auto'
      >
        <p className={styles.sectionSubText}>Let's work together...</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div
          className='flex flex-col gap-8 text-[34px] items-center text-[#c58000]'
        >
          <Link className='contact-link' id='profile-link' to='https://github.com/JoseMiguelVazquez' target='_blank' rel='noreferrer'>
            <div className='flex items-center'>
              <BsGithub className='me-2' />
              <p>GitHub</p>
            </div>
          </Link>
          <Link className='contact-link' to='https://www.linkedin.com/in/jos%C3%A9-miguel-v%C3%A1zquez-espinosa-35a97691/' target='_blank' rel='noreferrer'>
            <div className='flex items-center'>
              <BsLinkedin className='me-2' />
              <p>LinkedIn</p>
            </div>
          </Link>
          <Link className='contact-link' to='mailto:josemiguelvazqueze@gmail.com' target='_blank' rel='noreferrer'>
            <div className='flex items-center'>
              <SiMaildotru className='me-2' />
              <p>Send an Email</p>
            </div>
          </Link>
          <Link className='contact-link' to='tel:522223778989' target='_blank' rel='noreferrer'>
            <div className='flex items-center'>
              <BsPhone className='me-2' />
              <p>Call me</p>
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 flex md:h-[550px] h-[350px] md:w-[650px] xl:w-[550px] xl:ms-[20px] items-center justify-center'
      >
        <div className='flex flex-col items-center h-5/6'>
          <EarthCanvas />
          <h4 className='italic text-[#dfd9ff] font-light lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>How do you take your coffee?</h4>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
