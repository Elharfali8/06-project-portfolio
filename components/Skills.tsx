import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '@/utils/skills'
import Image from 'next/image'

const Skills = () => {
  return (
      <section id='skills' className='py-[64px] lg:py-[96px] '>
          <SectionTitle text='skills' subTitle='The skills, tools and technologies I am really good at:' />
          <div className='mt-8 lg:mt-16  container main-container grid place-items-center'>
              <div className='flex items-center justify-center gap-6 flex-wrap max-w-[800px]'>
              {skills.map((skill) => {
                  const { id, image } = skill
                  return (
                      <span key={id}>
                          <Image
                              src={image} 
                              alt='skill pics'
                              width={80}
                              height={80}
                              className=' object-contain w-26 h-26 shadow-lg rounded-lg p-1'
                          />
                      </span>
                  )
              })}
              </div>
          </div>
    </section>
  )
}

export default Skills