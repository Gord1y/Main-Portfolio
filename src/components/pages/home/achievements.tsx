'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers')
  },
  { ssr: false }
)

const achievementsList = [
  {
    metric: 'Years of Experience',
    value: 5,
    postfix: '+'
  },
  {
    prefix: '~',
    metric: 'Users',
    value: 100000
  },
  {
    prefix: '~',
    metric: 'Teams',
    value: 3
  },
  {
    metric: 'Completed Projects',
    value: 15,
    postfix: '+'
  }
]

const AchievementsSection = () => {
  return (
    <section className='mt-10 flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:py-16 xl:gap-16 xl:px-16'>
      {achievementsList.map((achievement, index) => {
        return (
          <div
            key={index}
            className='mx-4 my-4 flex flex-col items-center justify-center sm:my-0'
          >
            <h2 className='flex flex-row text-4xl font-bold'>
              {achievement.prefix}
              <AnimatedNumbers
                includeComma={true}
                animateToNumber={achievement.value}
                locale='en-US'
                className='text-4xl font-bold'
                transitions={index => ({
                  type: 'tween',
                  duration: 0.5,
                  delay: index * 0.2
                })}
              />
              {achievement.postfix}
            </h2>
            <p className='text-base text-foreground/50'>{achievement.metric}</p>
          </div>
        )
      })}
    </section>
  )
}

export default AchievementsSection
