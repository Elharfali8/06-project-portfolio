'use client'

import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {motion} from 'framer-motion'
import pic2 from '@/assets/Pic2.png'
import { TextFade } from './TextFade'
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

const About = () => {
  return (
      <section id='about' className='py-[64px] lg:py-[96px] bg-gray-100 dark:bg-gray-800'>
          <SectionTitle text='about me' subTitle='' />
          <div className='container main-container grid place-items-center  lg:grid-cols-2 gap-8 mt-10 '>
          <div className='relative mt-10 lg:mt-0 '>
              <motion.div
                    initial={{ opacity: 0, rotate: -5 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='absolute bottom-[-20px] left-[-20px] w-[400px] h-[480px] bg-gray-200 rounded-md shadow-xl' 
                />

                  <div className=' relative '>
                  <Image src={pic2} alt='picture' width={400} height={480} className=' rounded-lg shadow-lg ' />
                  </div>
              </div>
              <div>
                  <TextFade
                        direction="down"
                        className="mt-4 lg:mt-8"
                  >
                      <h1 className='text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-4 poppins-semibold'>Curious about me? Here you have it:</h1>
                      <p className='text-gray-600 dark:text-gray-300 text-lg lg:text-xl'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ad beatae ducimus voluptate a non dolorum sit nemo fugiat labore magni nesciunt. Corporis odio maxime velit magni ea voluptas et sint omnis voluptatum! Minus nihil perferendis ut sint, quasi asperiores!
                      </p>
                      <div className='flex items-center gap-3 mt-2 lg:mt-4'>
                          <button type='button' className='p-1 cursor-pointer rounded-lg  hover:scale-105'>
                              <FaLinkedin size={35}  />
                          </button>
                          <button type='button' className='p-1 cursor-pointer rounded-lg  hover:scale-105'>
                              <FaSquareXTwitter size={35}  />
                          </button>
                      </div>
                    </TextFade>
              </div>
          </div>
    </section>
  )
}

export default About