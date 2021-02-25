import React from 'react';

export const Paginator = ({itemsPerPage, totalItems, paginate}) => {
    let pageNumbers = [];
    for (let i = 1; i <= (Math.ceil(totalItems/itemsPerPage)); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (

            <ul className="pagination">
                {pageNumbers.map(number => {
                    return <li key={number} className="page-item" onClick={() => paginate(number)}>
                        <a className="page-link">
                        {number}
                        </a>
                    </li>                   
                })}
            </ul>
    )
}