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
    metric: 'Users',
    value: 100000,
    postfix: '+'
  },
  {
    metric: 'Completed Projects',
    value: 50,
    postfix: '+'
  },
  {
    metric: 'Years of Experience',
    value: 5,
    postfix: '+'
  },
  {
    metric: 'Teams',
    value: 3,
    postfix: '+'
  }
]

const AchievementsSection = () => {
  return (
    <section className='flex flex-col items-center justify-between rounded-md px-16 py-20 lg:py-24 sm:flex-row sm:border xl:gap-16 xl:px-16'>
      {achievementsList.map((achievement, index) => {
        return (
          <div
            key={index}
            className='mx-4 my-4 flex flex-col items-center justify-center sm:my-0'
          >
            <h2 className='flex flex-row text-4xl font-bold'>
              {/* {achievement.prefix} */}
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
