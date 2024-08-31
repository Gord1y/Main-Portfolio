import { Code2, Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
  imgUrl: string
  title: string
  description: string
  gitUrl?: string
  previewUrl?: string
}

const ProjectCard: React.FC<Props> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl
}) => {
  return (
    <div>
      <div
        className='group relative h-52 rounded-t-xl bg-foreground/10 bg-cover transition-all duration-500 md:h-72'
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className='overlay absolute left-0 top-0 flex h-full w-full flex-row items-center justify-center gap-2 rounded-t-lg bg-black/60 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-80 lg:hidden lg:group-hover:flex'>
          {gitUrl && (
            <Link
              href={gitUrl}
              className='grid size-14 cursor-pointer place-items-center rounded-full border-4 border-white text-white hover:border-primary hover:text-primary'
            >
              <Code2 className='size-10' />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className='grid size-14 cursor-pointer place-items-center rounded-full border-4 border-white text-white hover:border-primary hover:text-primary'
            >
              <Eye className='size-10' />
            </Link>
          )}
        </div>
      </div>
      <div className='mt-3 rounded-b-xl bg-foreground/10 px-4 py-6'>
        <h5 className='mb-2 text-xl font-semibold'>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
