'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import Searchbar from './Searchbar';

type menuType = {
  id: number;
  name: string;
  url: string;
};

const menus: menuType[] = [
  {
    id: 1,
    name: 'Beranda',
    url: '/',
  },
  {
    id: 2,
    name: 'Pertanyaan Umum',
    url: '/faq',
  },
  {
    id: 3,
    name: 'Buka Tiket Baru',
    url: '/create-ticket',
  },
  {
    id: 4,
    name: 'Cek Status Tiket',
    url: '/check-ticket',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav
      className={`z-10 fixed top-0 bg-white w-full ${
        isMenuOpen ? 'h-fit' : 'h-[77px]'
      }  border-b-[1px] border-grey-light`}
    >
      <div className='lg:mx-20 p-4 h-full flex flex-wrap items-center mx-auto lg:gap-10 justify-between'>
        <div className='flex w-full h-full lg:w-fit justify-between items-center'>
          <Link
            href='/'
            className='flex items-center justify-center space-x-[10px]'
          >
            <Logo width={37} height={45} />
            <div className='flex flex-col'>
              <span className='font-h1 text-[17px] whitespace-nowrap'>
                Helpdesk
              </span>
              <span className='text-[11px]'>
                SPMB Politeknik Statistika STIS
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='flex w-[35px] h-[35px] rounded-md justify-center items-center text-sm text-gray-500 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-grey-light'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'flex flex-col lg:flex-row' : 'hidden'
          } flex-1 w-full lg:flex lg:w-auto lg:items-center lg:justify-between`}
          id='navbar-default'
        >
          <ul
            className={`font-medium flex flex-1 flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-4 lg:mt-0 lg:border-0 ${
              isMenuOpen ? 'w-fit space-y-2' : ''
            }`}
          >
            {menus.map((menu: menuType) => (
              <li key={menu.id}>
                <Link
                  href={menu.url}
                  className={`block text-h3 font-h3 py-2 pl-3 pr-4 lg:bg-transparent lg:p-0 hover:active ${
                    pathname === menu.url ? 'active' : ''
                  } `}
                  aria-current='page'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex p-4 pt-0 lg:p-0'>
            <Searchbar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
