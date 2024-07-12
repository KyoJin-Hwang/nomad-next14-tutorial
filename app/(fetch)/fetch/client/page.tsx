"use client";
import { useEffect, useState } from "react";

const Client = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? <h1>Loading...</h1> : JSON.stringify(movies)}</div>;
};

export default Client;
