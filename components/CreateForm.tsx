"use client";

import React, { useEffect, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

type Props = {};

const CreateForm = (props: Props) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    console.log("isVerified: " + isVerified);
  }, [isVerified])

  return (
    <form name="create-ticket" className="flex-1 space-y-6 me-9 mb-6 w-full">
      <div className="border-b-[1.5px] pb-12 border-grey-light">
        <h2 className="text-h2 font-h2">Data Diri</h2>
        <p className="text-secondary text-grey-mid mb-6">
          Lengkapi data diri anda dibawah ini.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full md:space-x-5">
          <div className="flex flex-1 flex-col">
            <label htmlFor="name" className="text-dark text-h3 font-h3 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="nama lengkap Anda"
              className="w-full border-[1.5px] text-base p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-grey-light"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              name="name"
              id="email"
              placeholder="email yang dapat dihubungi"
              className="w-full border-[1.5px] text-base p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-grey-light"
            />
          </div>
        </div>
      </div>

      <div className="pb-6">
        <h2 className="text-h2 font-h2">Detail Tiket</h2>
        <p className="text-secondary text-grey-mid mb-6">
          Detail pertanyaan yang akan diajukan.
        </p>

        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-5 md:space-x-5">
            <div className="flex flex-1 flex-col">
              <label htmlFor="topik" className="text-dark text-h3 font-h3 mb-1">
                Topik Bantuan
              </label>
              <select
                name="topik"
                id="topik"
                className="w-full border-[1.5px] p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 text-base placeholder:text-grey-light"
                defaultValue="default"
              >
                <option value="default" disabled hidden>
                  pilih salah satu topik bantuan
                </option>
                <option value="topik-1">Pengaduan</option>
                <option value="topik-2">Pendaftaran</option>
                <option value="topik-3">KTPU</option>
                <option value="topik-4">Pembayaran</option>
                <option value="topik-5">Pelaksanaan Ujian</option>
              </select>
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="judul" className="text-dark text-h3 font-h3 mb-1">
                Judul Permasalahan
              </label>
              <input
                type="text"
                name="judul"
                id="judul"
                placeholder="judul permasalahan yang dihadapi"
                className="w-full border-[1.5px] p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 text-base placeholder:text-grey-light"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
            Detail Permasalahan
          </label>
          <textarea
            name="detail"
            id="detail"
            cols={30}
            rows={6}
            placeholder="tuliskan detail permasalahan  yang dihadapi"
            className="w-full border-[1.5px] p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-base placeholder:text-grey-light"
          ></textarea>
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="button"
            className="text-biru text-base border-[1.5px] border-biru border-dashed px-5 py-2 rounded-lg hover:bg-grey-light shadow-shadow-2 w-full md:w-fit"
          >
            Klik untuk unggah dokumen
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <HCaptcha
          sitekey="8e3b4de6-cd98-4c8c-ad52-2c0a82f1a024"
          onVerify={(token, ekey) => setIsVerified(true)}
        />
      </div>
      <div className="flex space-x-5 justify-center md:justify-start">
        <button
          type="submit"
          className="bg-biru flex-1 md:flex-none px-6 md:px-9 py-2 text-active font-active rounded-lg text-grey-base shadow-shadow-2"
        >
          Buat Tiket
        </button>
        <button
          type="reset"
          onClick={() => {
            // scroll to top
            window.scrollTo(0, 0);
          }}
          className="bg-grey-base flex-1 md:flex-none px-6 md:px-9 py-2 border-[1.5px] border-biru rounded-lg  text-biru text-active font-active  shadow-shadow-2"
        >
          Set Ulang
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
