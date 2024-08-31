'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export async function generateMetadata() {
  return {
    title: 'Not Found',
    description: 'The page you are looking for does not exist',
    keywords: '404, not found'
  }
}

export default function NotFoundPage() {
  return (
    <section className='container mt-24 flex flex-col items-center justify-center gap-4 md:mt-32 md:gap-4 xl:mt-52'>
      <h1 className='text-lg font-semibold md:text-xl xl:text-2xl'>
        Not Found Page
      </h1>
      <p className='font-semibold xl:text-lg'>
        The page you are looking for does not exist
      </p>
      <div className='flex gap-2 md:gap-4 xl:gap-6'>
        <Link
          href='/'
          className={buttonVariants({
            variant: 'default',
            size: 'lg'
          })}
        >
          Go Home
        </Link>
      </div>
    </section>
  )
}
