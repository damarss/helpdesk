"use client"

import React, { useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import DataFAQ from "./data/DataFAQ";
import Modal from "./Modal";

interface SearchItem {
  question: string;
  answer: string;
  categoryTitle: string;
  id: number;
}

const Searchbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();

    if (query === "") {
      setSearchText("");
      setSearchResults([]);
    } else {
      const filteredResults: SearchItem[] = [];
      DataFAQ.forEach((category) => {
        category.questions.forEach((question) => {
          if (question.question.toLowerCase().includes(query)) {
            filteredResults.push({
              question: question.question,
              answer: question.answer,
              categoryTitle: category.title,
              id : category.id
            });
          }
        });
      });

      setSearchText(query);
      setSearchResults(filteredResults);
    }
  };

  const handleInputClick = () => {
    setShowModal(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSearchText("");
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <BiSearchAlt className="text-gray-400" />
      </span>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Cari pertanyaan umum"
        className="hidden ps-10 sm:text-sm text-h3 font-h3 placeholder:text-h3 placeholder:font-h3 h-[42px] w-[276px] rounded-md shadow-shadow-1 border-[1px] border-grey-light cursor-pointer"
        onClick={handleInputClick}
        onChange={handleSearch}
        value={searchText}
      />

      {showModal && (
        <Modal closeModal={closeModal} searchResults={searchResults} handleSearch={handleSearch} />
      )}
    </div>
  );
};

export default Searchbar;
