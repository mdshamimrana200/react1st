import React from "react";
import ContactForm from './demu'
import Home from "../../sub_components/Home";
import Socile from "../../sub_components/social";

export default function Contact() {
  return (
    <div>

      <Home
        Login={""}
        Social={<Socile />}
        h1="Contact Us"
        p="Have problem that cannot resolve by yourself or have a question you do not have an answer to? Send us a"
      />
      <ContactForm />
    </div>
  );
}
