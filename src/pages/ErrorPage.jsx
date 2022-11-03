import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <h1>Page does not exist</h1>
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginTop: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "var(--asset-color-blue)",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        &larr; Go back to dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
