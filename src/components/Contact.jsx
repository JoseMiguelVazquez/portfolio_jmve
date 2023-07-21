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
  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col overflow-hidden justify-center items-center w-full'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl w-full'
      >
        <div>
          <p className={styles.sectionSubText}>Let's work together...</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>
        <div className='flex flex-col xl:flex-row items-center justify-center'>
          <div
            className='flex flex-col gap-3 xl:gap-4 text-[28px] my-4 md:my-2 xl:my-0 md:text-[30px] lg:text-[32px] xl:text-[34px] items-center xl:items-start text-[#c58000]'
          >
            <Link className='hover:translate-y-2 ease-out duration-300' id='profile-link' to='https://github.com/JoseMiguelVazquez' target='_blank' rel='noreferrer'>
              <div className='flex items-center'>
                <BsGithub className='me-2' />
                <p className='tracking-wider'>GitHub</p>
              </div>
            </Link>
            <Link className='hover:translate-y-2 ease-out duration-300' to='https://www.linkedin.com/in/jos%C3%A9-miguel-v%C3%A1zquez-espinosa-35a97691/' target='_blank' rel='noreferrer'>
              <div className='flex items-center'>
                <BsLinkedin className='me-2' />
                <p className='tracking-wider'>LinkedIn</p>
              </div>
            </Link>
            <Link className='hover:translate-y-2 ease-out duration-300' to='mailto:josemiguelvazqueze@gmail.com' target='_blank' rel='noreferrer'>
              <div className='flex items-center'>
                <SiMaildotru className='me-2' />
                <p className='tracking-wider'>Send an Email</p>
              </div>
            </Link>
            <Link className='hover:translate-y-2 ease-out duration-300' to='tel:522222528448' target='_blank' rel='noreferrer'>
              <div className='flex items-center'>
                <BsPhone className='me-2' />
                <p className='tracking-wider'>Call me</p>
              </div>
            </Link>
          </div>
          <div
            className='flex md:h-[380px] h-[350px] xl:h-[340px] md:w-[650px] xl:w-[550px] items-start xl:items-end justify-center mt-4 xl:mt-0 xl:relative xl:bottom-[40px] xl:left-[60px]'
          >
            <div className='flex flex-col items-center h-full'>
              <EarthCanvas />
              <h4 className='italic text-[#dfd9ff] font-light xl:text-[30px] lg:text-[28px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] tracking-wide'>How do you take your coffee?</h4>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
