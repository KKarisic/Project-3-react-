import React from "react";
import "../styles/_footer.scss";
import logoImage from "../images/asiosoLogo.svg";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";
import google from "../images/icons/google.svg";
import chat from "../images/icons/chat-quote.svg";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");

  const handleEmailChange = (event) => {
    setNewsletterEmail(event.target.value); // Update the state as user types
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Newsletter email submitted:", newsletterEmail);
    setNewsletterEmail(""); // Reset the input field after submission
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="logo-newsletter">
          <div className="logo">
            <img className="logoImage" src={logoImage} alt="Logo" />
          </div>
          <p>
            asioso blog is a technology blog. We make digital business simple.
          </p>
          <div className="social-icons">
            <div className="social-icon">
              <img src={facebook} alt="Facebook" />
            </div>
            <div className="social-icon">
              <img src={twitter} alt="Twitter" />
            </div>
            <div className="social-icon">
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="social-icon">
              <img src={google} alt="Google" />
            </div>
            <div className="social-icon">
              <img src={chat} alt="Chat" />
            </div>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="email"
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={handleEmailChange}
            />
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="popular-categories">
          <div className="popular-categories-headline">Popular Categories</div>
          <div className="footer-category">
            <p>Marketing</p>
            <p>(21)</p>
          </div>

          <div className="footer-category">
            <p>SEO Service</p>
            <p>(5)</p>
          </div>

          <div className="footer-category">
            <p>Digital Agency</p>
            <p>(31)</p>
          </div>

          <div className="footer-category">
            <p>Make Money</p>
            <p>(22)</p>
          </div>

          <div className="footer-category">
            <p>Blogging</p>
            <p>(66)</p>
          </div>
        </div>

        <div className="copyrights">
          <div className="copyrights-headline">Copyrights</div>
          <div className="footer-category">
            <p>About Us</p>
          </div>
          <div className="footer-category">
            <p>Advertising</p>
          </div>
          <div className="footer-category">
            <p>Write For Us</p>
          </div>
          <div className="footer-category">
            <p>Trademark</p>
          </div>
          <div className="footer-category">
            <p>Lisence & Help</p>
          </div>
        </div>

        <div className="footer-line">
          <p>
            &copy; asioso Blog, Design: <span>asioso Team.</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
