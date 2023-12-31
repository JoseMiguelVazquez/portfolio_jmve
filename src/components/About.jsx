import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import PROFILE_PIC from '../assets/PROFILE_PIC2.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='flex flex-col lg:flex-row -mb-16 lg:-mb-8'>
        <motion.p
          variants={fadeIn('', '', 0.2, 1)}
          className='mt-4 text-secondary text-[17px] xl:text-[20px] max-w-3xl leading-[30px] pe-5'
        >
          I am a versatile mechatronics engineer turned software developer proficient in HTML5, CSS3, JavaScript, React, and SQL, with knowledge in Git, Bootstrap, Tailwind CSS, D3, Framer Motion, Three, Node.js, Express, C++ and Unity. Alongside my technical skills, I prioritize soft skills such as responsibility, empathy, teamwork, effective communication, attention to detail and proactiveness. Native in Spanish and advanced in English, I excel in multicultural environments. A fast learner with a passion for continuous growth, I bring a strong foundation in engineering, a keen eye for detail, and the ability to quickly adapt to new technologies and frameworks, making me an asset to any software development team.
        </motion.p>
        <div className='flex justify-center lg:ps-5'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className='place-self-center w-[26rem] mt-[60px] lg:mt-[0px] rounded-[20px] flex justify-center'
          >
            <Link className='hover:translate-y-2 ease-out duration-300' to='https://www.linkedin.com/in/jos%C3%A9-miguel-v%C3%A1zquez-espinosa-35a97691/' target='_blank' rel='noreferrer'>
              <img src={PROFILE_PIC} alt='profile picture' className='shadow-card w-[350px] lg:w-[450px] rounded-full' />
            </Link>
          </motion.div>
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(About, 'about')
