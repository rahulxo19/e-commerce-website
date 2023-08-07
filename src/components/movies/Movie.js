import React from "react";

import classes from "./Movie.module.css";
import { Button } from "react-bootstrap";

const Movie = (props) => {
  const clickHandler = () => {
    props.delete(props.title);
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button onClick={clickHandler} className="btn-danger">
        Delete
      </Button>
    </li>
  );
};

export default Movie;
