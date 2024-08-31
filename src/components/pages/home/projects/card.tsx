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
        <div className='overlay absolute left-0 top-0 flex h-full w-full flex-row items-center justify-center gap-2 rounded-t-lg bg-foreground/10 bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-80 lg:hidden lg:group-hover:flex'>
          {gitUrl && (
            <Link
              href={gitUrl}
              className='group/link grid size-14 cursor-pointer place-items-center rounded-full border-2 border-foreground hover:border-destructive'
            >
              <Code2 className='size-10 group-hover/link:text-destructive' />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className='group/link grid size-14 cursor-pointer place-items-center rounded-full border-2 border-foreground hover:border-destructive'
            >
              <Eye className='size-10 group-hover/link:text-destructive' />
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
