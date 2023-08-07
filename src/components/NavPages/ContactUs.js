import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const contactHandler = async (contact) => {
    console.log(contact);
    const response = await fetch(
      "https://react-http-38901-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <section>
      <ContactForm contact={contactHandler} />
    </section>
  );
};

export default ContactUs;
