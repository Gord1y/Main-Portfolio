'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, {
      message: 'Email must be at least 5 characters long'
    })
    .max(50, {
      message: 'Email must be at most 50 characters long'
    }),
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long'
    })
    .max(20, {
      message: 'Name must be at most 20 characters long'
    }),
  subject: z
    .string()
    .min(3, {
      message: 'Subject must be at least 3 characters long'
    })
    .max(20, {
      message: 'Subject must be at most 20 characters long'
    }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters long'
    })
    .max(100, {
      message: 'Message must be at most 100 characters long'
    })
})

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: ''
    },
    mode: 'onChange'
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setIsError(true)
      }
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h2 className='text-2xl font-bold'>Thank you for your message!</h2>
        <p className='text-lg'>I will get back to you as soon as possible.</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h2 className='text-2xl font-bold'>An error occurred!</h2>
        <p className='text-lg'>Please try again later.</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='gordiyvl@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder='Danylo' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder='Hello!' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Hello! I would like to chat with you!'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='!mt-4' type='submit' disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
