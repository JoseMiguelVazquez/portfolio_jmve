import { SectionWrapper } from '../hoc'
// import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-[30px]`}>Technologies.</h2>
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.2, 1)} className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 bg-white rounded-full flex justify-center items-center' key={technology.name}>
            <img src={technology.icon} className='w-4/6' />
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, '')
