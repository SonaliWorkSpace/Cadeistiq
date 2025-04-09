import React from "react";
import { FaInstagram, FaShoppingBag } from "react-icons/fa";

import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-box">
        {/* Corner Logos */}
        <div className="corner-logos">
          <FaInstagram className="icon" />
          <FaShoppingBag className="icon" />
        </div>

        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          {/* Place your orders through Swiggy Mini or connect with us on Instagram
          for the latest updates and offers! DM us for any queries  */}

For any inquiries or gift customizations, feel free to message us on Instagram. Stay updated with our latest offers and announcements there. Please place your orders exclusively through Swiggy Mini.
        </p>

        <div className="contact-links">
          <a href="https://cadeistiq.mini.site">
            <FaShoppingBag className="icon" /> Order on Swiggy Mini
          </a>
          <a href="https://www.instagram.com/cadeistiq_?igsh=Ym1tZXNhdWg2OXZz">
            <FaInstagram className="icon" /> Follow us on Instagram
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
