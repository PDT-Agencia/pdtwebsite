import React from 'react';
import { SvgArrowIcon } from '../svg/svgs';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2 my-4 text-2xl">
      <button
        className={`w-12 h-12 min-w-10 min-h-10 flex items-center justify-center  border rounded-full rotate-180 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <SvgArrowIcon size={30} color='#000'/>
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`w-12 h-12 min-w-10 min-h-10 border rounded-full text-white font-bold  duration-200 transition ${currentPage === page ? 'bg-black' : 'bg-black/10'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`w-12 h-12 min-w-10 min-h-10 flex items-center justify-center border rounded-full ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <SvgArrowIcon size={30} color='#000'/>
      </button>
    </div>
  );
};

export default Pagination;
