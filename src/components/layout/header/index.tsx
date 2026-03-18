'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Header: React.FC = () => {
  const { setTheme, theme } = useTheme()

  return (
    <header className='fixed left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-center border-b bg-background/90 lg:h-20'>
      <section className='container flex h-fit justify-between'>
        <Link className='text-xl font-bold lg:text-2xl' href={'/'}>
          Gord1y
        </Link>
        <Button
          variant='ghost'
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          className='size-10 p-0'
        >
          <Sun className='size-5 dark:hidden' />
          <Moon className='hidden size-5 transition-all dark:block' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </section>
    </header>
  )
}

export default Header
