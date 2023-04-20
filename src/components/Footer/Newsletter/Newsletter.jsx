import { useState } from "react";
import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Newsletter = () => {
  const [input, setInput] = useState("");
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">Newsletter</div>
        <span className="big-text">Sign Up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email address" />
          <button
            onClick={() => {
              alert(
                "Cảm ơn bạn đã quan tâm đến chúng tôi, Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất"
              );
              var a = document.getElementsByTagName(input);
              if (a.length >= 0) {
                a = input;
              }
            }}
          >
            Subcribe
          </button>
        </div>
        <div className="text">
          Will used in accordace with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
