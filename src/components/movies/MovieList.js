import React from "react";

import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const toDelete = (title) => {
    const findIndex = props.movies.findIndex((movie) => movie.title === title);
    props.forDelete(props.movies[findIndex].id);
  };

  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          delete={toDelete}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
