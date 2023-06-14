import React from "react";
import Image from "next/image";

type Props = {};

const CheckForm = (props: Props) => {
  return (
    <form>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col space-y-4 md:space-y-6 md:w-2/5 lg:w-1/4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email yang digunakan sebelumnya"
              className="w-full border-[1.5px] text-base p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-grey-light"
            />
          </div>

          <div className="flex flex-col pb-3">
            <label
              htmlFor="nomor-tiket"
              className="text-dark text-h3 font-h3 mb-1"
            >
              Nomor Tiket
            </label>
            <input
              type="number"
              name="nomor-tiket"
              id="nomor-tiket"
              placeholder="Nomor tiket yang didapatkan"
              className="w-full border-[1.5px] text-base p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-grey-light"
            />
          </div>

          {/* button lihat tiket */}
          <div className="flex space-x-7 justify-center md:justify-start">
            <button
              type="submit"
              className="bg-biru px-6 md:px-9 py-2 text-active font-active rounded-lg text-grey-base shadow-shadow-2"
            >
              Lihat Tiket
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-end w-full md:w-1/2 xl:w-1/3  md:pe-4 md:mx-6 ">
          <Image
            src="/assets/img/Verify.png"
            alt="Create Ticket Illustration"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="mt-6 sm:mt-6 mb-16 md:mb-24 text-grey-mid text-secondary">
        <p>
          Jika ini pertama kali Anda menghubungi kami atau Anda lupa nomor
          tiket. Silakan{" "}
          <span className="font-semibold underline text-black-base">
            <a href="/create-ticket">buka tiket baru</a>
          </span>
          .
        </p>
      </div>
    </form>
  );
};

export default CheckForm;
