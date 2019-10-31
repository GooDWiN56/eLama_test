import React from 'react';
import s from './LogoHeader.module.css';


function LogoHeader() {
    return (
      <div className={s.logo}>
        <img src='./img/logo.svg' />
      </div>
    );
  }
  
  export default LogoHeader;