import React from 'react'
import Logo from './Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-grey-base h-1/2 w-full flex md:flex-row flex-col justify-evenly px-14 py-10'>
      <div className='flex flex-col flex-auto md:mx-12'>
        <div className="flex font-medium items-center ">
          <Logo></Logo>
        <div className='flex flex-col mx-2 py-4'> 
          <span className="ml-4 text-3xl leading-11 font-bold text-black-base">Helpdesk</span>
          <span className="ml-4 font-normal leading-6 text-base text-grey-mid">SPMB Politeknik Statistika STIS</span>
        </div>    
      </div>
          <span className="my-6 font-semibold text-sm leading-6 text-grey-mid">Copyright © Politeknik Statistika STIS 2023</span>
      </div>

      <div className='mx-8'>
        <div className='flex flex-col'>
          <span className="font-bold text-sm leading-7 text-black-base">Pertanyaan</span>
          <span className="text-sm leading-7 text-grey-mid">Pertanyaan Umum</span>
          <span className="text-sm leading-7 text-grey-mid">Buat Tiket</span>
          <span className="text-sm leading-7 text-grey-mid">Cek Status Tiket</span>
          </div>
      </div>
      <div className='mx-8'>
        <div className='flex flex-col'>
          <span className="font-bold text-sm leading-7 text-black-base">Bantuan</span>
          <span className="text-sm leading-7 text-grey-mid">Panduan Pembuatan Tiket</span>
          <span className="text-sm leading-7 text-grey-mid">Kontak Kami (?)</span>
          </div>
      </div>
    </div>
  )
}

export default Footer