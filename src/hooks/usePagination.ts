import { useState, useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  startIndex: number;
  endIndex: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

/**
 * Hook for pagination logic
 */
export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const startIndex = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage, itemsPerPage]
  );

  const endIndex = useMemo(
    () => Math.min(startIndex + itemsPerPage, totalItems),
    [startIndex, itemsPerPage, totalItems]
  );

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const previousPage = () => {
    goToPage(currentPage - 1);
  };

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  return {
    currentPage,
    totalPages,
    pageSize: itemsPerPage,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
  };
}
