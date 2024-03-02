import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Dikshit</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className="footer-links">
        <a href="https://github.com/DikshitY" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/dikshit-yadav-823781285/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:dikshit20022003@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://twitter.com/DikshitYadavv" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
