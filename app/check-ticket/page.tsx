import React from 'react'
import { CheckForm } from '../components'

type Props = {}

const CheckTicketPage = (props: Props) => {
  return <>
        <div className="flex flex-col m-12 mt-24 md:m-28">
            <div className="mb-4 pl-1 w-full">
        <h1 className="text-4xl font-bold mt-2 leading-[54px]">Cek Status Tiket</h1>
        <p className="text-[13px] text-grey-mid font-normal mb-4 leading-5">Ingin mengecek status tiket yang telah dibuat? Silahkan masukan email dan nomor tiket anda.</p>

            </div>
        <CheckForm />
        </div>
    </> 
  
}

export default CheckTicketPage