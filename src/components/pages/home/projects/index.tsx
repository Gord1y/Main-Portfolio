'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import ProjectCard from './card'
import ProjectTag from './tag'

const projectsData = [
  {
    id: 1,
    title: 'Satoshi',
    description: 'The Bitcoin App',
    image: '/projects/1.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/satoshimoney',
    previewUrl: 'https://satoshi.money/'
  },
  {
    id: 2,
    title: 'ActiveDocks',
    description:
      'My personal startup project, which was a copy of the well-known Diia and developed and grew with me. No longer active.',
    image: '/projects/2.png',
    tag: ['All', 'Web', 'Mobile']
  },
  {
    id: 3,
    title: 'The Kiosko',
    description:
      'I Made a front part for software in a coworking center, a mobile application for internal work of services and employees, as well as websites for users to work with data and mobile admin panel.',
    image: '/projects/3.png',
    tag: ['All', 'Web', 'Mobile'],
    previewUrl: 'https://thekiosko.com/'
  },
  {
    id: 4,
    title: 'Katyas Space',
    description: 'This is a portfolio website for a english teacher.',
    image: '/projects/4.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Gord1y/katyasspace',
    previewUrl: 'https://katyas.space/'
  }
]

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<'All' | 'Web' | 'Mobile'>('All')
  const ref = useRef<HTMLUListElement | null>(null)
  const isInView = useInView(ref, { once: true })

  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id='projects' className='flex flex-col py-20 lg:py-24'>
      <h2 className='text-center text-4xl font-bold'>My Projects</h2>
      <div className='flex flex-row items-center justify-center gap-2 py-6'>
        <ProjectTag onClick={setTag} name='All' isSelected={tag === 'All'} />
        <ProjectTag onClick={setTag} name='Web' isSelected={tag === 'Web'} />
        <ProjectTag
          onClick={setTag}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid gap-8 md:grid-cols-3 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
