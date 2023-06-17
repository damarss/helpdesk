import Image from 'next/image'
import React from 'react'
import { Features, Hero, HomeFAQ, TicketFlow, AccordionFAQ} from '@/components'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main className="flex flex-col justify-center mx-7 md:mx-36">
      <Hero />
      <TicketFlow />
      <Features />
      <HomeFAQ />
    </main>
  )
}

export default HomePage