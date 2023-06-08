"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Searchbar from "./Searchbar";

type menuType = {
  id: number;
  name: string;
  url: string;
};

const menus: menuType[] = [
  {
    id: 1,
    name: "Beranda",
    url: "/",
  },
  {
    id: 2,
    name: "Pertanyaan Umum",
    url: "/faq",
  },
  {
    id: 3,
    name: "Buka Tiket Baru",
    url: "/create-ticket",
  },
  {
    id: 4,
    name: "Cek Status Tiket",
    url: "/check-ticket",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white md:h-[77px] border-b-[1px] border-grey-light">
      <div className="md:mx-20 max-w-screen-xl flex flex-wrap items-center mx-auto p-4 md:gap-10 justify-between">
        <Link
          href="/"
          className="flex items-center justify-center space-x-[10px]"
        >
          <Logo />
          <div className="flex flex-col">
            <span className="font-h1 text-[17px] whitespace-nowrap">
              Helpdesk
            </span>
            <span className="text-[11px]">SPMB Politeknik Statistika STIS</span>
          </div>
        </Link>
        <div className="flex md:flex-1 items-center md:justify-between">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0">
              {menus.map((menu: menuType) => (
                <li key={menu.id}>
                  <Link
                    href={menu.url}
                    className={`${
                      pathname == menu.url ? "active" : ""
                    } block text-h3 font-h3 py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:border-b-2 hover:border-biru`}
                    aria-current="page"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Searchbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
