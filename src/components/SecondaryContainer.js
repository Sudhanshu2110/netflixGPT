import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black mt-10">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
