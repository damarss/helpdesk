"use client";

import React, { useEffect, useState, FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { IoAlertOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

interface FormErrors {
  name: string;
  email: string;
  judul: string;
  detail: string;
}


const Alert: React.FC<{
  showAlert: boolean;
  errorMessage: string;
  setShowAlert: (show: boolean) => void;
}> = ({ showAlert, setShowAlert, errorMessage }) => {
  return (
    <>
      {showAlert ? (
        <div className="text-white px-2 py-2 border-0 rounded relative w-full md:w-1/2 mx-auto mb-4 bg-red-500">
          <span className="text-lg inline-block mr-2 align-middle">
            <IoAlertOutline />
          </span>
          <span className="inline-block align-middle mr-2 leading-7 text-h3">{errorMessage}</span>
          <button
            className="absolute bg-transparent text-xl font-h3 leading-none right-0 top-0 mt-3 mr-3 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <MdOutlineClose />
          </button>
        </div>
      ) : null}
    </>
  );
};

const CreateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [judul, setJudul] = useState("");
  const [detail, setDetail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    judul: "",
    detail: "",
  });

    const validateForm = () => {
    const errors: FormErrors = {
      name: "",
      email: "",
      judul: "",
      detail: "",
    };

    if (!name.trim()) {
      errors.name = "Nama tidak boleh kosong";
    }

    if (!email.trim()) {
      errors.email = "Email tidak boleh kosong";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email tidak valid";
      setShowError(true);
    }

    if (!judul.trim()) {
      errors.judul = "Judul permasalahan tidak boleh kosong";
    }

    if (!detail.trim()) {
      errors.detail = "Detail permasalahan tidak boleh kosong";
    }

    setFormErrors(errors);

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (isVerified && !Object.values(errors).some((error) => error !== "")) {
      // Kirim tiket atau lakukan tindakan lainnya
      console.log("Form berhasil di submit");
    } else {
      setFormErrors(errors);
      setShowError(true);
    }
  };


  const errorMessage = formErrors.name || formErrors.email || formErrors.judul || formErrors.detail;

  useEffect(() => {
    console.log("isVerified: " + isVerified);
  }, [isVerified])

  return (
    <form onSubmit={handleSubmit} name="create-ticket" className="flex-1 space-y-6 me-9 mb-6 w-full">
      <div className="border-b-[1.5px] pb-12 border-grey-light">

      <Alert showAlert={showError} setShowAlert={setShowError} errorMessage={errorMessage} />

        <h2 className="text-h2 font-h2">Data Diri</h2>
        <p className="text-secondary text-grey-mid mb-6">
          Lengkapi data diri anda dibawah ini.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full md:space-x-5">
          <div className="flex flex-1 flex-col">
            <label htmlFor="name" className="text-dark text-h3 font-h3 mb-1">
              Nama Lengkap
            </label>
            <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              aria-describedby="outlined_error_help"
              placeholder=" "
              className={`block w-full p-3 text-base ${!formErrors.name ? 'border-grey-light' : 'border-red-500' } rounded-md border-[1.5px] bg-transparent appearance-none dark:text-white dark:border-green dark:focus:border-green focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
           <label htmlFor="name" className="absolute w-full mx-2 text-base text-grey-light duration-300 transform -translate-y-4 scale-50 top-4 z-10 origin-[0] bg-white peer-focus:border-dark rounded-md peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-[.5] peer-focus:-translate-y-4 left-0 ">Masukkan Nama Lengkap</label>
            </div>
            <p id="outlined_error_help" className={`mt-2 text-xs ${(formErrors.name) ? 'text-red-500' : 'hidden' }`}><span className="font-medium">{formErrors.name}</span></p>    
          </div>


         <div className="flex flex-1 flex-col">
            <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
              Alamat Email
            </label>
            <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              aria-describedby={(formErrors.email) ? "outlined_error_help" : "outlined_success_help"}
              placeholder=" "
              className={`block w-full p-3 text-base ${!formErrors.email ? 'border-grey-light' : 'border-red-500' } rounded-md border-[1.5px] bg-transparent appearance-none dark:text-white dark:border-green dark:focus:border-green focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="absolute w-full mx-2 text-base text-grey-light duration-300 transform -translate-y-4 scale-50 top-4 z-10 origin-[0] bg-white peer-focus:border-dark rounded-md peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-[.5] peer-focus:-translate-y-4 left-0 ">Email yang dapat dihubungi</label>

            </div> 
            <p id="outlined_error_help" className={`mt-2 text-xs ${(formErrors.email) ? 'text-red-500' : 'hidden' }`}><span className="font-medium">{formErrors.email}</span></p>    

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
                className="w-full border-[1.5px] p-3 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 text-base placeholder:text-grey-light"
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
              <div className="relative">
              <input
                type="text"
                name="judul"
                id="judul"
                placeholder=" "
                aria-describedby="outlined_error_help"
               className={`block w-full p-3 text-base ${!formErrors.judul ? 'border-grey-light' : 'border-red-500' } rounded-md border-[1.5px] bg-transparent appearance-none dark:text-white dark:border-green dark:focus:border-green focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
              />
             <label htmlFor="judul" className="absolute w-full mx-2 text-base text-grey-light duration-300 transform -translate-y-4 scale-50 top-4 z-10 origin-[0] bg-white peer-focus:border-dark rounded-md peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-[.5] peer-focus:-translate-y-4 left-0 ">Judul permasalahan yang dihadapi</label>
              </div>
                <p id="outlined_error_help" className={`mt-2 text-xs ${(formErrors.judul) ? 'text-red-500' : 'hidden' }`}><span className="font-medium">{formErrors.judul}</span></p>  
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
            Detail Permasalahan
          </label>
          <div className="relative">
          <textarea
            name="detail"
            id="detail"
            cols={30}
            rows={6}
            aria-describedby="outlined_error_help"
            placeholder="Tuliskan Detail Permasalahan yang dihadapi"
            className={`block w-full p-3 text-base ${!formErrors.detail ? 'border-grey-light' : 'border-red-500' } rounded-md border-[1.5px] bg-transparent appearance-none dark:text-white dark:border-green dark:focus:border-green focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
          ></textarea>
          </div>
            <p id="outlined_error_help" className={`mt-2 text-xs ${(formErrors.detail) ? 'text-red-500' : 'hidden' }`}><span className="font-medium">{formErrors.detail}</span></p>  
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
