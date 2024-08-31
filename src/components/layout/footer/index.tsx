import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='z-10 w-full border-t py-12'>
      <section className='container flex justify-between'>
        <Link className='text-lg font-bold lg:text-xl' href={'/'}>
          Gord1y
        </Link>
        <p className='text-foreground/50'>All rights reserved © 2024</p>
      </section>
    </footer>
  )
}

export default Footer
