'use client'

import Image from 'next/image'
import { useState } from 'react'

import AboutImage from '@/assets/images/about-image.jpg'

import TabButton from './tab-button'

const TAB_DATA = [
  {
    title: 'Main Tech Stack',
    id: 'tech-stack',
    content: (
      <ul className='list-disc pl-2 font-semibold'>
        <li>Next.js</li>
        <li>Nest.js</li>
        <li>React-native</li>
        <li>Typescript</li>
        <li>MongoDB</li>
        <li>Git (GitHub)</li>
        <li>AWS (S3, Ec2, etc.)</li>
      </ul>
    )
  },
  {
    title: 'Other skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2 font-medium'>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>MySql</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState<'skills' | 'tech-stack' | 'certifications'>(
    'skills'
  )

  return (
    <section
      className='items-center gap-8 px-4 py-20 md:grid md:grid-cols-2 lg:py-24 xl:gap-16 xl:px-16'
      id='about'
    >
      <Image
        src={AboutImage}
        width={500}
        height={500}
        alt='about image'
        className='rounded-lg'
        priority
      />
      <div className='mt-4 flex h-full flex-col text-left md:mt-0'>
        <h2 className='mb-4 text-4xl font-bold'>About Me</h2>
        <p className='text-base lg:text-lg'>
          I am a Full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, TypeScript, React, Next, Nest, Node, Express, React
          Native, PostgreSQL, Mongo, MySql. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and I
          am excited to work with others to create amazing applications.
        </p>
        <div className='mt-8 flex flex-row justify-start'>
          {TAB_DATA.map(data => (
            <TabButton
              key={data.id}
              selectTab={() =>
                setTab(data.id as 'skills' | 'tech-stack' | 'certifications')
              }
              active={tab === data.id}
            >
              {data.title}
            </TabButton>
          ))}
        </div>
        <div className='mt-8'>
          {TAB_DATA.find(data => data.id === tab)?.content}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
