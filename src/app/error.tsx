'use client'

import { Button } from '@/components/ui/button'

export async function generateMetadata() {
  return {
    title: 'Error',
    description: 'An error occurred',
    keywords: 'error, 404, 500'
  }
}

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <section className='container mt-24 flex flex-col items-center justify-center gap-4 md:mt-32 md:gap-4 xl:mt-52'>
      <h1 className='text-lg font-semibold md:text-xl xl:text-2xl'>Error</h1>
      <p className='font-semibold xl:text-lg'>
        An error occurred. Please try again.
        <br />
        {error.message}
      </p>
      <Button onClick={reset}>Try Again</Button>
    </section>
  )
}
