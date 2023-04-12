import "./Footer.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            enim ipsa recusandae quam officiis magnam distinctio, eius hic harum
            possimus est quasi natus! Dolorem expedita maiores inventore
            mollitia impedit non?
          </div>
        </div>
        <div className="col">
          <div className="title">Content</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Song An,Vu Thu,Thai Binh, Viet Nam, 01231232131.
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone Number: 0355794997</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: longkhieu10@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">HeadPhone</span>
          <span className="text">Smart Watch</span>
          <span className="text">Blutooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projector</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Long Khieu 2023 ReactJS</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
