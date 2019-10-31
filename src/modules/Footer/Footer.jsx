import React from 'react';
import s from './Footer.module.css';
import MenuFooter from './MenuFooter/MenuFooter';
import ContactFooter from './ContactFooter/ContactFooter';
import Copyright from './Copyright/Copyright';


function Footer() {
    return (
      <footer className={s.footer}>
        <div className="all_wrap">
            <MenuFooter />
            <ContactFooter />
            <Copyright />
        </div>
      </footer>
    );
  }
  
  export default Footer;