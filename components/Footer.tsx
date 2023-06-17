"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

type Menu = {
  id: number;
  name: string;
  url: string;
};

const questionMenus: Menu[] = [
  {
    id: 1,
    name: "Pertanyaan Umum",
    url: "/faq",
  },
  {
    id: 2,
    name: "Buka Tiket Baru",
    url: "/create-ticket",
  },
  {
    id: 3,
    name: "Cek Status Tiket",
    url: "/check-ticket",
  },
];

const helpMenus: Menu[] = [
  {
    id: 4,
    name: "Panduan Pembuatan Tiket",
    url: "/guide",
  },
  {
    id: 5,
    name: "Kontak Kami",
    url: "/contact",
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-grey-base pt-8 w-full px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap items-start">
          <div className="flex items-center md:items-start md:flex-auto flex-col w-full px-4">
            <div className="flex items-center">
              <Logo />
              <div className="flex flex-col ml-4">
                <span className="text-3xl leading-11 font-bold">Helpdesk</span>
                <span className="font-normal leading-6 text-base text-grey-mid">SPMB Politeknik Statistika STIS</span>
              </div>
            </div>
            <div className="my-6 font-semibold text-sm leading-8 text-grey-mid hidden lg:block"> Copyright
              &copy; Politeknik Statistika STIS 2023
            </div>
                      </div>

          <div className="w-full md:w-auto flex flex-wrap md:flex-nowrap justify-center md:justify-end mt-6 md:mt-0 px-6 md:space-x-4">
            <div className="flex flex-col items-center mb-6 md:items-start px-4 md:px-6 md:w-[13rem] ">
              <span className="font-bold text-sm leading-7 text-black-base">Pertanyaan</span>
              {questionMenus.map((menu) => (
                <Link key={menu.id} href={menu.url}>
                  <span
                    className={`text-xs leading-5 text-grey-mid ${
                      pathname === menu.url ? "font-bold" : ""
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start md:mt-0 px-6 md:px-6 md:w-[13rem]">
              <span className="font-bold text-sm leading-7 text-black-base">Bantuan</span>
              {helpMenus.map((menu) => (
                <Link key={menu.id} href={menu.url}>
                  <span
                    className={`text-xs leading-5 text-grey-mid ${
                      pathname === menu.url ? "font-bold" : ""
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold mt-6 text-sm leading-6 text-grey-mid lg:hidden"> Copyright
          &copy; Politeknik Statistika STIS 2023
        </div>
    </footer>
  );
};

export default Footer;
