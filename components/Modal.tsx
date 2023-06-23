import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface Props {
  closeModal: () => void;
  searchResults: SearchItem[];
  searchText: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SearchItem {
  question: string;
  answer: string;
  categoryTitle: string;
  questionId: number;
  id: number;
}

const Modal: React.FC<Props> = ({
  closeModal,
  searchResults,
  handleSearch,
  searchText,
}) => {
  const categoryTitles: string[] = [];

  searchResults.forEach((item) => {
    if (!categoryTitles.includes(item.categoryTitle)) {
      categoryTitles.push(item.categoryTitle);
    }
  });

  const router = useRouter();
  const pathname = usePathname();

  const handleQuestionClick = (id: number, questionId: number) => {
    const query = `?aid=${id}&qid=${questionId}`;
    const faqUrl = `/faq${query}`;

    if (pathname.startsWith('/faq')) {
      window.location.href = faqUrl;
    } else {
      router.push(faqUrl);
      closeModal();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={closeModal}
    >
      <div
        className='bg-white w-10/12 md:w-[36vw] rounded-lg p-6 h-5/6 md:h-4/6 overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
          onClick={closeModal}
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close modal</span>
        </button>

        <div className='flex relative mb-4'>
          <span className='absolute inset-y-0 start-0 grid w-10 place-content-center cursor-pointer'>
            <BiSearchAlt className='text-gray-400' />
          </span>
          <input
            type='input'
            id='modal-search'
            placeholder='Cari di pertanyaan umum'
            className='ps-10 sm:text-sm text-h3 font-h3 placeholder:text-h3 placeholder:font-h3 h-[42px] w-full rounded-md shadow-shadow-1 border-[1px] border-grey-light cursor-pointer'
            autoFocus
            onChange={handleSearch}
          />
        </div>

        {searchResults.length === 0 ? (
          searchText === '' ? (
            <div className='text-center'>
              <p className='text-base font-h4 mt-8 text-grey-light'>
                Masukkan kata kunci pencarian
              </p>
            </div>
          ) : (
            <div className='text-center'>
              <p className='text-base font-h4 mt-8 text-grey-light'>
                Tidak ada hasil untuk pencarian ini
              </p>
            </div>
          )
        ) : (
          <ul className='space-y-4'>
            {categoryTitles.map((title) => (
              <li key={title}>
                <h3 className='text-base font-semibold text-black-base mb-1'>
                  {title}
                </h3>
                {searchResults
                  .filter((item) => item.categoryTitle === title)
                  .map((item) => (
                    <p
                      key={item.id}
                      className='text-justify mb-4 pl-4 text-base hover:text-dark-main hover:font-semibold text-grey-mid cursor-pointer'
                      onClick={() =>
                        handleQuestionClick(item.id, item.questionId)
                      }
                    >
                      {item.question}
                    </p>
                  ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
