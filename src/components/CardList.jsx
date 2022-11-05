import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FetchData } from "../context/context";
import ErrorBoundary from "./ErrorBoundary";
import { useEffect, useState } from "react";
import data from "../data";
console.log(data);

export default function CardList() {
  const {
    userInfo: data,
    loading,
    USER_PER_PAGE,
    page,
    setLoading,
  } = FetchData();

  const [error, setError] = useState(null);

  // const selectedUser = data?.filter((user) => user.id !== 1);
  // get the new users selected from the
  const newUsers = data?.slice(0, USER_PER_PAGE);

  useEffect(() => {
    // check if the loading is more than 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      setError("Data couldn't be fetched");
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading && <h1>Loading...</h1>}

      {!loading && (
        <CardListStyle>
          {newUsers?.map((user) => {
            const { gender, name, email, picture, login } = user;
            return (
              <Link
                key={email}
                className="link"
                to={{
                  pathname: `/${login.uuid}`,
                  state: { user },
                }}
              >
                <ErrorBoundary>
                  <Card
                    gender={gender}
                    email={email}
                    picture={picture.large}
                    name={`${name.first} ${name.last}`}
                    phone={user.phone}
                  />
                </ErrorBoundary>
              </Link>
            );
          })}
        </CardListStyle>
      )}
    </>
  );
}

const CardListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;

  .link {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.95);
    }
  }

  @media screen and (max-width: 928px) {
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media screen and (max-width: 643px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  } ;
`;
