'use client';

import React, { useState } from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface FormErrors {
  email: string;
  ticketNumber: string;
}

const Alert: React.FC<{
  showAlert: boolean;
  errorMessage: string;
  setShowAlert: (show: boolean) => void;
}> = ({ showAlert, setShowAlert, errorMessage }) => {
  return (
    <>
      {showAlert ? (
        <div className='text-white px-5 py-3 border-0 rounded relative w-full mb-4 bg-red-500'>
          <span className='text-xl inline-block mr-5 align-middle'>
            <HiBellAlert />
          </span>
          <span className='inline-block align-middle mr-2 leading-7 text-h3'>
            {errorMessage}
          </span>
          <button
            className='absolute bg-transparent text-xl font-h3 leading-none right-0 top-1 mt-3 mr-3 outline-none focus:outline-none'
            onClick={() => setShowAlert(false)}
          >
            <MdOutlineClose />
          </button>
        </div>
      ) : null}
    </>
  );
};
const CheckForm = () => {
  const [email, setEmail] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: '',
    ticketNumber: '',
  });

  const validateForm = () => {
    let errors = {
      email: '',
      ticketNumber: '',
    };

    if (!email.trim()) {
      errors.email = 'Email tidak boleh kosong';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email tidak valid';
      setShowError(true);
    }

    if (!ticketNumber) {
      errors.ticketNumber = 'Nomor Tiket di Perlukan';
    }

    setFormErrors(errors);

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (!Object.values(errors).some((error) => error !== '')) {
      console.log('Form berhasil di submit');
      router.push(`/check-ticket/${ticketNumber}`);
    } else {
      setFormErrors(errors);
      setShowError(true);
    }
  };

  const errorMessage = formErrors.email || formErrors.ticketNumber;

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex '>
        <div className='flex flex-col space-y-4 md:space-y-6 w-full'>
          <Alert
            showAlert={showError}
            setShowAlert={setShowError}
            errorMessage={errorMessage}
          />
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-dark text-h3 font-h3 mb-1'>
              Alamat Email
            </label>
            <div className='relative'>
              <input
                type='email'
                name='email'
                id='email'
                aria-describedby={
                  formErrors.email
                    ? 'outlined_error_help'
                    : 'outlined_success_help'
                }
                placeholder=' '
                className={`block w-full p-3 text-base ${
                  !formErrors.email ? 'border-grey-light' : 'border-red-500'
                } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor='email'
                className='absolute w-full mx-2 text-[10px] lg:text-sm xl:text-base text-grey-light duration-300 transform -translate-y-4 scale-50 top-4 z-0 origin-[0] peer-focus:border-dark rounded-md peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-[.5] peer-focus:-translate-y-4 left-0 '
              >
                Email yang telah dimasukkan sebelumnya
              </label>
            </div>
            <p
              id='outlined_error_help'
              className={`mt-2 text-xs ${
                formErrors.email ? 'text-red-500' : 'hidden'
              }`}
            >
              <span className='font-medium'>{formErrors.email}</span>
            </p>
          </div>

          <div className='flex flex-col pb-3'>
            <label
              htmlFor='nomor-tiket'
              className='text-dark text-h3 font-h3 mb-1'
            >
              Nomor Tiket
            </label>
            <div className='relative'>
              <input
                type='number'
                name='nomor-tiket'
                id='nomor-tiket'
                aria-describedby='outlined_error_help'
                placeholder=' '
                className={`block w-full p-3 text-base ${
                  !formErrors.ticketNumber
                    ? 'border-grey-light'
                    : 'border-red-500'
                } rounded-md border-[1.5px] bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-dark peer shadow-shadow-4`}
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
              />
              <label
                htmlFor='nomor-tiket'
                className='absolute w-full mx-2 text-[10px] lg:text-sm xl:text-base text-grey-light duration-300 transform -translate-y-4 scale-50 top-4 z-0 origin-[0]  peer-focus:border-dark rounded-md peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-[.5] peer-focus:-translate-y-4 left-0 '
              >
                Masukkan Nomor Tiket
              </label>
            </div>
            <p
              id='outlined_error_help'
              className={`mt-2 text-xs ${
                formErrors.ticketNumber ? 'text-red-500' : 'hidden'
              }`}
            >
              <span className='font-medium'>{formErrors.ticketNumber}</span>
            </p>
          </div>

          <div className='flex space-x-7 justify-center md:justify-start'>
            <button
              type='submit'
              className='bg-biru px-6 md:px-9 py-2 text-active font-active rounded-lg text-grey-base shadow-shadow-2'
            >
              Lihat Tiket
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckForm;
