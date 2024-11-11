import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../atoms/Button';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const getPaginationGroup = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      {currentPage > 1 && (
        <Button 
            variant='secondary'
            icon={faChevronLeft} 
            iconSize='w-3' 
            onClick={() => onPageChange(currentPage - 1)} 
        />
      )}

      {currentPage > 3 && <span>. . .</span>}

      {getPaginationGroup().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 ${currentPage === pageNumber && 'font-bold bg-primary rounded-full p-2'}`}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages - 2 && <span>. . .</span>}

      {currentPage < totalPages && (
        <div className="w-12 h-12">
          <Button 
            variant='secondary'
            icon={faChevronRight} 
            iconSize='w-3' 
            onClick={() => onPageChange(currentPage + 1)} 
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
