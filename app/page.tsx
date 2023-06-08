import Image from 'next/image'
import React from 'react'
import { Features, Hero, TicketFlow } from './components'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="flex flex-col justify-center md:mx-36 mt-[71px]">
      <Hero />
      <TicketFlow />
      <Features />
    </main>
  )
}

export default HomePage