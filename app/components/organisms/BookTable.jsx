"use client";

import React, { useState, useContext } from "react";
import { BookContext } from "../../context/BookContext";
import SearchInput from "../molecules/SearchInput";
import Pagination from "../molecules/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faGhost } from "@fortawesome/free-solid-svg-icons";
import BookCard from "../molecules/BookCard";
import Spinner from "../atoms/Spinner";

const BookTable = ({ itemsPerPage }) => {
  const { books, fetchBooks, loading } = useContext(BookContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTheme, setSearchTheme] = useState("Título");

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handleSearch = ({ query, theme }) => {
    setSearchQuery(query);
    setSearchTheme(theme);
    setCurrentPage(1);
    fetchBooks(query, theme);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={`w-full min-h-[50vh] flex flex-col ${books.length > 0 && "justify-between"} gap-6 my-6`}>
      <div className="w-2/5 max-lg:w-full">
        <SearchInput onSearch={handleSearch} />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8 ">
        {loading ? (
          <div className="flex flex-col w-full items-center mt-20 justify-center gap-12 opacity-55">
            <Spinner size={24} />
            <p className="font-semibold text-2xl text-center">
              Cargando resultados ...
            </p>
          </div>
        ) : !searchQuery ? (
          <div className="flex flex-col w-full items-center mt-20 justify-center gap-12 opacity-55">
            <FontAwesomeIcon className="h-24" icon={faBookmark} />
            <p className="font-semibold text-2xl text-center">
              Ingresa el {searchTheme.toLowerCase()} de tu libro favorito.
            </p>
          </div>
        ) : books.length === 0 ? (
          <div className="flex flex-col w-full items-center mt-20 justify-center gap-12 opacity-55">
            <FontAwesomeIcon className="h-24" icon={faGhost} />
            <p className="font-semibold text-2xl text-center">
              No se encontraron coincidencias para "{searchQuery}" por {searchTheme.toLowerCase()}.
            </p>
          </div>
        ) : (
          currentBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              authorKey={book.authorKey}
              subject={book.subject}
              publishYear={book.publishYear}
              description={book.description}
              amazonId={book.amazonId}
              rating={book.rating}
              ia={book.ia}
              language={book.language}
              numPage={book.numPage}
            />
          ))
        )}
      </div>

      {searchQuery && !loading && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default BookTable;
