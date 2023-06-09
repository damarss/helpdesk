import React from 'react'

type Params = {
    id: string
}

const page = ({ params }: {params: Params}) => {
  return (
    <main className=''>{params.id}</main>
  )
}

export default page