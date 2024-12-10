'use client'

import React, { useEffect, useMemo, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate target date: current date + 7 days
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 7)
    return date
  }, []) // Empty array ensures it's only initialized once
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = Number(targetDate) - Number(now)

      if (difference <= 0) {
        clearInterval(interval)
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }) // Timer completed
      } else {
        // Convert milliseconds to days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTime({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [targetDate])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready to unlock unbeatable shopping deals this month! Every purchase comes with
          special perks and discounts, making this a month filled with incredible savings and
          exciting offers. Don't miss out on the chance to make smart choices and snag some amazing
          deals. 🎁🛍️
        </p>
        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
