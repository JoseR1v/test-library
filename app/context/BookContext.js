"use client";

import React, { createContext, useState } from 'react';
import { fetchBooks } from '../services/services';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchBooks = async (query, theme) => {
    setLoading(true);
    try {
      const result = await fetchBooks(query, theme);
      setBooks(result);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider 
      value={{ 
        books, 
        setBooks, 
        selectedBook, 
        setSelectedBook, 
        fetchBooks: handleFetchBooks, 
        loading 
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
