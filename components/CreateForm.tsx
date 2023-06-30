"use client";

import React, { useEffect, useState, FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { HiBellAlert } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import Swal from "sweetalert2";

interface FormErrors {
  name: string;
  email: string;
  judul: string;
  detail: string;
  topik: string;
  verified: string;
}

const Alert: React.FC<{
  showAlert: boolean;
  errorMessage: string;
  setShowAlert: (show: boolean) => void;
}> = ({ showAlert, setShowAlert, errorMessage }) => {
  return (
    <>
      {showAlert ? (
        <div className="text-white px-5 py-3 border-0 rounded relative w-full md:w-fit md:pe-12 mb-4 bg-red-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <HiBellAlert />
          </span>
          <span className="inline-block align-middle mr-2 leading-7 text-h3">
            {errorMessage}
          </span>
          <button
            className="absolute bg-transparent text-xl font-h3 leading-none right-0 top-1 mt-3 mr-3 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <MdOutlineClose />
          </button>
        </div>
      ) : null}
    </>
  );
};

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton:
      "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded mx-4",
    cancelButton:
      "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-2 rounded mx-4",
  },
  buttonsStyling: false,
});

const CreateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [judul, setJudul] = useState("");
  const [detail, setDetail] = useState("");
  const [topik, setTopik] = useState("");
  const [verified, setVerified] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    judul: "",
    detail: "",
    topik: "",
    verified: "",
  });

  const validateForm = () => {
    const errors: FormErrors = {
      name: "",
      email: "",
      judul: "",
      detail: "",
      topik: "",
      verified: "",
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

    if (!topik.trim()) {
      errors.topik = "Topik permasalahan tidak boleh kosong";
    }

    if (!isVerified) {
      errors.verified = "Anda belum menyelesaikan verifikasi";
    }

    setFormErrors(errors);

    return errors;
  };

  const showResetButton = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Anda yakin ingin set ulang?",
        text: "Data yang telah dimasukkan akan terhapus",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Iya",
        cancelButtonText: "Tidak",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setName("");
          setEmail("");
          setDetail("");
          setTopik("");
          setVerified("");
          setJudul("");
          setFormErrors({
            name: "",
            email: "",
            judul: "",
            detail: "",
            topik: "",
            verified: "",
          });
          setShowError(false);
          swalWithBootstrapButtons
            .fire("Berhasil!", "Formulir berhasil di set ulang!", "success")
            .then(() => {
              setTimeout(() => window.scrollTo(0, 0), 300);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Gagal!",
            "Formulir gagal di set ulang",
            "error"
          );
        }
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (isVerified && !Object.values(errors).some((error) => error !== "")) {
      console.log("Form berhasil di submit");
      window.scrollTo(0, 0);
    } else {
      setFormErrors(errors);
      setShowError(true);
      window.scrollTo(0, 0);
    }
  };

  const errorMessage =
    formErrors.name ||
    formErrors.email ||
    formErrors.judul ||
    formErrors.topik ||
    formErrors.detail ||
    formErrors.verified;

  return (
    <form
      onSubmit={handleSubmit}
      name="create-ticket"
      className="flex-1 space-y-6 me-9 mb-6 w-full"
    >
      <div className="border-b-[1.5px] pb-12 border-grey-light">
        <Alert
          showAlert={showError}
          setShowAlert={setShowError}
          errorMessage={errorMessage}
        />

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
              placeholder="Masukkan Nama Lengkap"
              className={`w-full p-3 text-base placeholder:text-[13px] placeholder:text-grey-light ${
                !formErrors.name ? "border-grey-light" : "border-red-500"
              } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-1`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && (
              <p className="mt-2 text-xs text-red-500">
                <span className="font-medium">{formErrors.name}</span>
              </p>
            )}
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="email" className="text-dark text-h3 font-h3 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email yang dapat dihubungi"
              className={`w-full p-3 text-base placeholder:text-[13px] placeholder:text-grey-light ${
                !formErrors.email ? "border-grey-light" : "border-red-500"
              } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-1`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <p className="mt-2 text-xs text-red-500">
                <span className="font-medium">{formErrors.email}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pb-4">
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
                className={`w-full p-3 text-base placeholder:text-[13px] placeholder:text-grey-light ${
                  !formErrors.topik ? "border-grey-light" : "border-red-500"
                } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-1`}
                defaultValue="default"
                onChange={(e) => setTopik(e.target.value)}
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
              {formErrors.topik && (
                <p className="mt-2 text-xs text-red-500">
                  <span className="font-medium">{formErrors.topik}</span>
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="judul" className="text-dark text-h3 font-h3 mb-1">
                Judul Permasalahan
              </label>
              <input
                type="text"
                name="judul"
                id="judul"
                placeholder="Judul permasalahan yang dihadapi"
                className={`block w-full p-3 text-base placeholder:text-[13px] placeholder:text-grey-light ${
                  !formErrors.judul ? "border-grey-light" : "border-red-500"
                } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-1`}
                onChange={(e) => setJudul(e.target.value)}
                value={judul}
              />
              {formErrors.judul && (
                <p className="mt-2 text-xs text-red-500">
                  <span className="font-medium">{formErrors.judul}</span>
                </p>
              )}
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
            placeholder="Tuliskan Detail Permasalahan yang dihadapi"
            className={`block w-full p-3 text-xs lg:text-sm xl:text-base placeholder:text-[13px] placeholder:text-grey-light ${
              !formErrors.detail ? "border-grey-light" : "border-red-500"
            } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-1`}
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          ></textarea>
          {formErrors.detail && (
            <p className="mt-2 text-xs text-red-500">
              <span className="font-medium">{formErrors.detail}</span>
            </p>
          )}
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            type="button"
            className="text-biru text-base border-[1.5px] border-biru border-dashed px-5 py-2 rounded-lg hover:bg-grey-light shadow-shadow-1 w-full md:w-fit"
          >
            Klik untuk unggah dokumen
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <HCaptcha
          sitekey="8e3b4de6-cd98-4c8c-ad52-2c0a82f1a024"
          onVerify={(token, ekey) => setIsVerified(true)}
        />
        {formErrors.verified && (
          <p className="text-red-500 text-xs mt-1">
            <span className="font-medium">{formErrors.verified}</span>
          </p>
        )}
      </div>
      <div className="flex space-x-5 justify-center md:justify-start">
        <button
          type="submit"
          className="bg-biru flex-1 md:flex-none px-6 md:px-9 py-3 md:py-2 text-active font-active rounded-lg text-grey-base shadow-shadow-2"
        >
          Buat Tiket
        </button>
        <button
          type="button"
          onClick={showResetButton}
          className="bg-grey-base flex-1 md:flex-none px-6 md:px-9 py-3 md:py-2 border-[1.5px] border-biru rounded-lg text-biru text-active font-active  shadow-shadow-2"
        >
          Set Ulang
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
