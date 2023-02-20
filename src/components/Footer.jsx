import React from 'react';
import Logo from "../img/LogoAS.PNG";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made with ❤️ and <b>React.js</b>.</span>
    </footer>
  );
};

export default Footer;