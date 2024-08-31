'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import { buttonVariants } from '@/components/ui/button'

import HeroImage from '@/assets/images/hero-image.jpg'

const HeroSection: React.FC = () => {
  return (
    <section className='container grid grid-cols-1 py-20 sm:grid-cols-12 lg:py-24'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-8 place-self-center justify-self-start text-center sm:text-left'
      >
        <section className='mb-4 text-2xl font-extrabold sm:text-4xl lg:text-6xl lg:leading-normal'>
          <h2 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Hello, I&apos;m
          </h2>
          <TypeAnimation
            sequence={[
              'Danylo Hordiienko',
              2000,
              'Full Stack Developer',
              2000,
              'Mobile Developer',
              2000
            ]}
            wrapper='h1'
            speed={50}
            repeat={Infinity}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'clip',
              WebkitLineClamp: 1
            }}
          />
        </section>
        <p className='mb-6 text-base text-foreground/50 sm:text-lg lg:text-xl'>
          I am a Full Stack Developer based in Ukraine. <br />I have a passion
          for developing and creating new things.
          <br />
        </p>
        <section className='flex flex-row justify-center gap-2 md:justify-start'>
          <Link
            href='/#contact'
            className={buttonVariants({
              size: 'lg',
              variant: 'secondary'
            })}
          >
            Contact Me
          </Link>
          <Link
            href='/'
            target='_blank'
            className={buttonVariants({
              size: 'lg',
              variant: 'destructive'
            })}
          >
            Download CV
          </Link>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-4 mt-4 place-self-center lg:mt-0'
      >
        <div className='relative grid h-[250px] w-[250px] place-items-center rounded-full bg-foreground/10 p-5 lg:h-[400px] lg:w-[400px] lg:p-10'>
          <Image
            src={HeroImage}
            alt='hero image'
            className='rounded-full'
            width={400}
            height={400}
            quality={100}
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
