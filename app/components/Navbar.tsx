import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/create-ticket">Create Ticket</Link></li>
            <li><Link href="/check-ticket">Check Ticket</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar