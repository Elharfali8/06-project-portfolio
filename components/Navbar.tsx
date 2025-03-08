'use client'

import { links } from '@/utils/links'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-20 grid place-items-center shadow-md"
    >
          <div className="container main-container flex items-center justify-between">
              <Link href={'/'} className='text-xl lg:text-2xl poppins-semibold'>
                {"<Elharfali />"}
              </Link>
              <div className='flex items-center gap-8'>
                <ul className='hidden lg:flex items-center gap-3'>
                      {links.map((item) => {
                          const { id, title, path } = item
                          return (
                              <li key={id}>
                                  <Link href={path} className=' capitalize text-[var(--light-text-color)] dark:text-[var(--dark-text-color)] text-lg tracking-wide poppins-medium'>
                                      {title}
                                  </Link>
                              </li>
                          )
                    })}
                  </ul>
          <ThemeToggle />
          <Button>
            Download CV
          </Button>
              </div>
          </div>
          </motion.nav>
  )
}

export default Navbar