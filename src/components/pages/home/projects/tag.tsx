import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  name: 'All' | 'Web' | 'Mobile'
  onClick: (name: 'All' | 'Web' | 'Mobile') => void
  isSelected: boolean
}

const ProjectTag: React.FC<Props> = ({ name, onClick, isSelected }) => (
  <button
    className={cn(
      'cursor-pointer rounded-full border-2 px-6 py-3 text-xl font-bold',
      {
        'border-primary bg-primary text-primary-foreground': isSelected,
        'border-foreground text-foreground hover:border-primary hover:text-primary':
          !isSelected
      }
    )}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
)

export default ProjectTag
