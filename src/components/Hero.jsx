import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Blob } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1aac4a]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#1aac4a]'>José Miguel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Software Developer
          </p>
        </div>
      </div>
      <div className='h-full relative top-[120px] xxs:top-[90px] sm:top-[130px] flex justify-center items-center'>
        <Blob className='relative' />
        <img src='./programming.png' alt='programmer' className='hero-animation absolute w-[250px] xxs:w-[250px] sm:w-[460px] md:w-[480px] lg:w-[600px] xl:w-[680px]' />
      </div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
