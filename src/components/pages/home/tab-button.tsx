import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  active: boolean
  selectTab: () => void
}

const TabButton: React.FC<PropsWithChildren<Props>> = ({
  active,
  selectTab,
  children
}) => {
  return (
    <button onClick={selectTab}>
      <p
        className={cn('mr-3 font-semibold hover:text-primary', {
          'text-primary': active,
          'text-primary/50': !active
        })}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={{
          default: { width: 0 },
          active: { width: 'calc(100% - 0.75rem)' }
        }}
        className='mr-3 mt-2 h-0.5 bg-primary'
      />
    </button>
  )
}

export default TabButton
