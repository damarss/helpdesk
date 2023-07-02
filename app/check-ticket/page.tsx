import React from 'react';
import { CheckForm } from '@/components';
import Image from 'next/image';

type Props = {};

const CheckTicketPage = (props: Props) => {
  return (
    <main className='flex flex-col flex-grow mx-7 md:mx-28 lg:mx-36'>
      <div className='mt-8 md:mt-18 mb-4 pl-1 w-full'>
        <h1 className='text-[36px] font-h1 leading-[54px]'>Cek Status Tiket</h1>
        <p className='text-base text-grey-mid font-normal mb-4 leading-5'>
          Ingin mengecek status tiket yang telah dibuat? Silahkan masukan email
          dan nomor tiket anda.
        </p>
      </div>
      <div className='flex flex-col md:flex-row w-full lg:w-3/4'>
        <div className='w-full md:w-1/2 lg:w-3/5 xl:w-2/5'>
          <CheckForm />
        </div>
        <div className='hidden md:flex md:flex-1 mx-auto justify-evenly lg:justify-end xl:justify-center items-center '>
          <Image
            src='/assets/img/Verify.png'
            alt='Create Ticket Illustration'
            width={250}
            height={250}
            priority
          />
        </div>
      </div>

      <div className='mt-6 sm:mt-6 mb-16 md:mb-24 text-grey-mid text-secondary'>
        <p>
          Jika ini pertama kali Anda menghubungi kami atau Anda lupa nomor
          tiket. Silakan{' '}
          <span className='font-semibold underline text-black-base'>
            <a href='/create-ticket'>buka tiket baru</a>
          </span>
          .
        </p>
      </div>
    </main>
  );
};

export default CheckTicketPage;
