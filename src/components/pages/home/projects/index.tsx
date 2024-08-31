'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import ProjectCard from './card'
import ProjectTag from './tag'

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/'
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
