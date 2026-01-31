import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Make sure your CSS is imported

const ContactUs = () => {
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate random 6-digit ticket number
    const ticketNum = Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(ticketNum);

    // Get form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      ticket_number: ticketNum,
    };

    // Send email using EmailJS
    emailjs
      .send("service_f9ljq87", "template_542cupg", formData, "a8vpCX46-HhyeqFS4")
      .then(
        (response) => {
          alert("Message sent successfully! We will contact you soon.");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="section">
      <label className="l1">Contact Us.</label>
      <div className="container">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-12 col-sm-12 col-md-6" id="sms">
            <div className="contact-card">
              <h2>Get in touch with us</h2>
              <div className="row g-4">
                <div className="col-lg-12"><p className="label">Email:-</p></div>
                <div className="col-lg-6 getintouch">
                  <p className="label1">eventmanagement@gmail.com</p>
                </div>
                <div className="col-lg-6 getintouch">
                  <p className="label1">eventcreation@gmail.com</p>
                </div>
                <div className="col-lg-12"><p className="label">Phone No:-</p></div>
                <div className="col-lg-4 getintouch"><p className="label1">9221286284</p></div>
                <div className="col-lg-4 getintouch"><p className="label1">7710892845</p></div>
                <div className="col-lg-4 getintouch"><p className="label1">9518317084</p></div>
                <div className="col-lg-12"><p className="label">Address</p></div>
                <div className="col-lg-12 getintouch">
                  <p className="label1">123 Business Street, Suite 456 New York, NY 10001</p>
                </div>
                <div className="col-lg-12"><p className="label">Time & Days</p></div>
                <div className="col-lg-12 getintouch">
                  <p className="label1">
                    Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-sm-12 col-md-6" id="ourinfo">
            <div className="contact-card">
              <h2>Send us message on</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <p className="label">Name:</p>
                  <input type="text" name="name" placeholder="Your Name" required className="textarea" />
                </div>
                <div className="form-group">
                  <p className="label">Email:</p>
                  <input type="email" name="email" placeholder="Your Email" required className="textarea"/>
                </div>
                <div className="form-group">
                  <p className="label">Subject:</p>
                  <input type="text" name="subject" placeholder="Subject" required className="textarea"/>
                </div>
                <div className="form-group">
                  <p className="label">Message:</p>
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <input type="submit" value="send message" className="b1" />
                {ticketNumber && <div id="ticketNumber">Your ticket number: #{ticketNumber}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
