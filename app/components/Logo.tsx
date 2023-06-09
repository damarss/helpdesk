import React from 'react'
import Image from 'next/image'


const Logo = () => {
  return (
    <div>
      <Image 
        src={'/assets/img/logo.png'}
        alt="Logo Helpdesk"
        width={37}
        height={35}
      />
      <h1>

      </h1>
    </div>
  )
}

export default Logo