'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const Header: React.FC = () => {
  const { setTheme } = useTheme()

  return (
    <header className='fixed left-0 right-0 top-0 z-10 flex h-20 w-full items-center justify-center border-b bg-background/80'>
      <section className='container flex h-fit justify-between'>
        <Link className='text-xl font-bold lg:text-2xl' href={'/'}>
          Gord1y
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Menu className='size-6' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Go to About</DropdownMenuItem>
              <DropdownMenuItem>Go to Projects</DropdownMenuItem>
              <DropdownMenuItem>Go to Contact</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className='flex flex-row items-center gap-2'>
                  Theme{' '}
                  <div className='flex flex-row'>
                    <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Toggle theme</span>
                  </div>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      className='flex w-full flex-row justify-between'
                      onClick={() => {
                        setTheme('dark')
                      }}
                    >
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className='flex w-full flex-row justify-between'
                      onClick={() => {
                        setTheme('light')
                      }}
                    >
                      Light
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </header>
  )
}

export default Header
