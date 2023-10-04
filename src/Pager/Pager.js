import React, { useState } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './Pager.css';

const Pager = ({ totalPages, initialPage = 1, onPageChange, visibleButtons = 3 }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    
    const maxPages = 10;
    totalPages = Math.min(totalPages, maxPages);

    const handlePageClick = (page) => {
        if (page < 1) page = 1;
        if (page > maxPages) page = maxPages;

        setCurrentPage(page);
        if(onPageChange) onPageChange(page);
    };

    let startPage = 1;
    let endPage = totalPages;
    const halfWay = Math.ceil(visibleButtons / 2);

    if (totalPages <= visibleButtons) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= halfWay) {
        startPage = 1;
        endPage = visibleButtons;
    } else if (currentPage + halfWay >= totalPages) {
        startPage = totalPages - visibleButtons + 1;
        endPage = totalPages;
    } else {
        startPage = currentPage - halfWay + 1;
        endPage = startPage + visibleButtons - 1;
    }

    const pageNumbers = [];
    for(let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <Panel backgroundColor="gray">
            <Button disabled={currentPage === 1} onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)} text="<" />

            {pageNumbers.map((page, index, array) => (
                <>
                    <Button 
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageClick(page)}
                        text={String(page)}
                    />
                    {(index === array.length - 1 && page < totalPages - 1) && '...'}
                </>
            ))}
            
            <Button disabled={currentPage === maxPages} onClick={() => currentPage < maxPages && handlePageClick(currentPage + 1)} text=">" />
        </Panel>
    );
};

export default Pager;

