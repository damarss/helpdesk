import Image from 'next/image'
import React from 'react'
import { Hero, TicketFlow } from './components'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="flex flex-col justify-center md:mx-36 mt-[71px]">
      <Hero />
      <TicketFlow />
    </main>
  )
}

export default HomePage