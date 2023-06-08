import React from 'react'
import Image from 'next/image'


const Logo = () => {
  return (
    <div>
      <Image 
        src={'/assets/img/logo.png'}
        alt="Logo Helpdesk"
        width={50}
        height={50}
      />
    </div>
  )
}

export default Logo