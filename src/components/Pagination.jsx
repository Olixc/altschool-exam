import React, { useState, useEffect } from "react";
import { PaginationData } from "../context/context";
import styled from "styled-components";

const Pagination = () => {
  const { userInfo: data, USERS_PER_PAGE, page, setPage } = PaginationData();

  const total = data?.length;
  const pages = Math.ceil(total / USERS_PER_PAGE);

  return (
    <PaginationStyle>
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        &lt;
      </button>

      {Array.from({ length: 3 }, (_, i) => i + 1).map((p) => (
        <button
          disabled={page === p}
          key={p}
          onClick={() => {
            setPage(p);
          }}
        >
          {p}
        </button>
      ))}

      {page > 3 && <span>...</span>}

      <button
        disabled={page === pages}
        onClick={() => {
          setPage(pages);
        }}
      >
        {page > 3 ? page : null}
      </button>

      <button disabled={page === pages} onClick={() => setPage(page + 1)}>
        &gt;
      </button>
    </PaginationStyle>
  );
};

export default Pagination;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  button {
    border: none;
    background-color: var(--bg-color-v2);
    font-size: 1.2rem;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--headings-color);
    transition: all 0.3s ease-in-out;
    width: 2rem;
    height: 2rem;
    // border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);

    &:hover {
      color: var(--primary-color);
    }

    &:disabled {
      color: var(--grey-dark);
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }

    &:active {
      transform: scale(0.95);
      background-color: var(--asset-color-blue);
      color: var(--bg-color);
    }
  }
`;
