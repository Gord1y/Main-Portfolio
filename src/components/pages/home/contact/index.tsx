import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail, MessageCircleDashed } from 'lucide-react'
import Link from 'next/link'

import ContactForm from './form'

const ContactSection: React.FC = () => {
  return (
    <section
      id='contact'
      className='grid gap-8 py-20 md:my-12 md:grid-cols-2 lg:py-24'
    >
      <section className='relative flex h-full flex-col items-center justify-center gap-2 md:items-start'>
        <h5 className='my-2 text-xl font-bold md:text-2xl lg:text-4xl'>
          Let&apos;s Connect
        </h5>
        <p className='mb-4 max-w-md text-center text-foreground/50 md:text-start lg:text-lg'>
          My inbox is always open. Whether you have a question or just want to
          say hi - I&apos;ll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link
            href='https://github.com/Gord1y'
            target='_blank'
            className='text-foreground/50 hover:text-primary'
          >
            <GitHubLogoIcon className='size-10' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/danylo-hordiienko'
            target='_blank'
            className='text-foreground/50 hover:text-primary'
          >
            <LinkedInLogoIcon className='size-10' />
          </Link>
          <Link
            href='mailto:gordiyvl@gmail.com'
            target='_blank'
            className='text-foreground/50 hover:text-primary'
          >
            <Mail className='size-10' />
          </Link>
          <Link
            href='https://t.me/Gord1yy'
            target='_blank'
            className='text-foreground/50 hover:text-primary'
          >
            <MessageCircleDashed className='size-10' />
          </Link>
        </div>
        <span className='absolute top-1/2 size-40 -translate-y-1/2 self-center rounded-full bg-primary/20 blur-lg' />
      </section>
      <ContactForm />
    </section>
  )
}

export default ContactSection
