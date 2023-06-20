import { SectionWrapper } from '../hoc'
// import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} mb-[30px]`}>Technologies.</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 bg-white rounded-full flex justify-center items-center' key={technology.name}>
            <img src={technology.icon} className='w-4/6' />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
