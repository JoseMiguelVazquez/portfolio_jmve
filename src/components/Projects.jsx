import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  deployment_link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] md:w-[310px] lg:w-[280px] xl:w-[320px] h-[480px] md:h-[450px] lg:h-[480px] xl:h-[460px]'
      >
        <div onClick={() => deployment_link ? window.open(deployment_link, '_blank') : false} className='cursor-pointer'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] md:text-[22px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>{description}</p>
          </div>

        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.2, 1)}
          className='mt-3 text-secondary text-[17px] xl:text-[20px] max-w-3xl leading-[30px]'
        >
          This section showcases a diverse range of projects that highlight my skills in web development and problem-solving. Each project is briefly described with
          links to code repositories (click on github icon) and live demos in it (click on card). It reflects my ability to solve problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-5 md:gap-3 xl:gap-6 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')
