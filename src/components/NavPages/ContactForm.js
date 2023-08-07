import React, { useRef } from "react";
import classes from "../movies/AddMovie.module.css";

const ContactForm = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const contact = {
      name: titleRef.current.value,
      emailId: openingTextRef.current.value,
      phoneNo: releaseDateRef.current.value,
    };

    props.contact(contact);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Email</label>
        <input type="email" id="opening-text" ref={openingTextRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Phone Number</label>
        <input type="phone" id="date" ref={releaseDateRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
