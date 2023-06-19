import React from 'react'
// import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
// import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import PROFILE_PIC from '../assets/PROFILE_PIC.png'

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// )

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='flex flex-col lg:flex-row -mb-16 lg:-mb-8'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] md:text-[20px] xl:text-[25px] max-w-3xl leading-[30px] pe-5'
        >
          I am a versatile mechatronics engineer turned software developer proficient in HTML5, CSS, JavaScript, React, C++, and SQL, with knowledge in Bootstrap, Tailwind CSS, D3, Framer Motion, Three, Express JS and Unity. Alongside my technical skills, I prioritize soft skills such as responsibility, empathy, teamwork, effective communication, attention to detail and proactiveness. Native in Spanish and advanced in English, I excel in multicultural environments. A fast learner with a passion for continuous growth, I bring a strong foundation in engineering, a keen eye for detail, and the ability to quickly adapt to new technologies and frameworks, making me an asset to any software development team.
        </motion.p>
        {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
        <div className='flex justify-center ps-5'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className='place-self-center w-[26rem] mt-[60px] lg:mt-[0px] rounded-[20px] flex justify-center'
          >
            <img src={PROFILE_PIC} alt='profile picture' className='shadow-card w-[450px] rounded-full' />
          </motion.div>
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(About, 'about')
