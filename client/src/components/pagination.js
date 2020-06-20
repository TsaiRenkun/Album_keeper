import React from "react";

const pagination = ({ photoPerPage, totalPhotos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default pagination;
