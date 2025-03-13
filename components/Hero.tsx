'use client'

import Image from 'next/image'
import pic1 from '@/assets/Pic.png'
import { LettersPullUp } from './LettersPullUp'
import {motion} from 'framer-motion'
import { TextFade } from './TextFade'
import { FaLocationDot } from "react-icons/fa6";


const Hero = () => {
  return (
      <section id='/' className='min-h-[calc(100vh-80px)] grid place-items-center py-[64px] lg:py-0'>
          <div className="container main-container grid place-items-center lg:grid-cols-2 gap-8">
              <div className='mt-10 lg:mt-0 flex flex-col items-center lg:items-start order-2 lg:order-1'>
                  <motion.p
                      className='text-lg md:text-xl lg:mb-1  text-gray-700 dark:text-gray-300'
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{delay: 0.3, duration: 0.8, ease: "easeOut"}}
                  >
                      A Passionate <span className='text-yellow-400'>Web Developer</span>
                  </motion.p>
                  <LettersPullUp text="Hi, I'm Youssef Elharfali" className='' />
                  <TextFade
                        direction="up"
                        className="mt-2 lg:mt-4"
                        >
                        <p className="prose-p:my-1  md:text-lg text-gray-600 dark:text-gray-300">
                            I'm a <span>frontend web developer</span> passionate about crafting modern, responsive, and interactive web applications. I specialize in <span className='text-blue-500 '>React, Next.js, TypeScript, and Tailwind CSS,</span> creating smooth user experiences with Framer Motion animations. Always learning and improving. I turn ideas into beatiful and functional websites.
                        </p>
                  </TextFade>
                  <TextFade
                    direction="up"
                        className="mt-2 lg:mt-4"
                  >
                      <div className='grid gap-y-4'>
                          <div className='flex items-center gap-3'>
                              <FaLocationDot size={24} />
                              <span className='lg:text-lg poppins-medium'>
                                  Marrakech, Morocco
                              </span>
                          </div>
                      </div>
                  </TextFade>
                  <div className='mt-6 lg:mt-8 '>
                      <motion.a
                          href='#projects'
                          className='px-6 py-3 bg-blue-500 transition-all ease-in-out duration-150 hover:bg-blue-600 text-white text-lg poppins-semibold rounded-lg mt-3'
                      >
                          View My Work
                      </motion.a>
                  </div>
              </div>
              <div className='relative mt-10 lg:mt-0 order-1 lg:order-1'>
              <motion.div
    initial={{ opacity: 0, rotate: -5 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='absolute bottom-[-20px] right-[-20px] w-[320px] h-[360px] bg-gray-200 rounded-md shadow-xl' 
/>

                  <div className=' relative '>
                  <Image src={pic1} alt='picture' width={320} height={360} className=' rounded-lg shadow-lg ' />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero