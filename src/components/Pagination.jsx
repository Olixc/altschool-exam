import React, { useState, useEffect } from "react";
import { PaginationData } from "../context/context";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  // const { userInfo: data, USERS_PER_PAGE, page, setPage } = PaginationData();
  const {
    userInfo: data,
    displayUsers,
    setPageNumber,
    pageNumber,
    USERS_PER_PAGE,
  } = PaginationData();
  const pageCount = Math.ceil(data.length / USERS_PER_PAGE);
  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(pageNumber);
  return (
    <PaginationStyle>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        previousLinkClassName={"previous"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
      />
    </PaginationStyle>
  );

  // const total = data?.length;
  // const pages = Math.ceil(total / USERS_PER_PAGE);

  // return (
  //   <PaginationStyle>
  //     <button
  //       onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
  //       disabled={page === 1}
  //     >
  //       &lt;
  //     </button>

  //     {Array.from({ length: 3 }, (_, i) => i + 1).map((p) => (
  //       <button
  //         disabled={page === p}
  //         key={p}
  //         onClick={() => {
  //           setPage(p);
  //         }}
  //       >
  //         {p}
  //       </button>
  //     ))}

  //     {page > 3 && <span>...</span>}

  //     <button
  //       disabled={page === pages}
  //       onClick={() => {
  //         setPage(pages);
  //       }}
  //     >
  //       {page > 3 ? page : null}
  //     </button>

  //     <button disabled={page === pages} onClick={() => setPage(page + 1)}>
  //       &gt;
  //     </button>
  //   </PaginationStyle>
  // );
};

export default Pagination;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    .previous,
    .next {
      background-color: var(--asset-color-blue);
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    li:not(.previous):not(.next) {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: var(--asset-color-blue);
        color: #fff;
      }
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .active {
      background-color: var(--asset-color-blue);
      color: #fff;
    }
  }
`;
