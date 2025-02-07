import React from "react";
import "./Contactus.css";
import { contactInfos } from "./ContactInfo";

const Contactus = () => {
  return (
    <section className="contact-wrapper">
      <div className=" paddings innerWidth flexCenter contact">
        <div className="content">
          <h2>Contact Us</h2>
        </div>

        <div className="c-container">
          <div className="contactInfo">
            {contactInfos.map((item, index) => (
              <div className="c-box" key={index}>
                <div className="c-icon">
                  <b></b> <i class={`fa-solid ${item.icon_class}`}></i>
                </div>
                <div className="c-text">
                  <h3>{item.type}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
            <h2 className="txt"> Connect With Us</h2>
            <ul className="sci">
              <li>
                {" "}
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <form action="">
              <h2>Send Message</h2>

              <div className="inputBox">
                <input type="text" name="" required />
                <span>Full Name</span>
              </div>

              <div className="inputBox">
                <input type="email" name="" required />
                <span>Email</span>
              </div>

              <div className="inputBox">
                <textarea name="" id="" required></textarea>
                <span>Type Your Message</span>
              </div>

              <div className="inputBox">
                <input type="submit" name="" value="Send" required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
