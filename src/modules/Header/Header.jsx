import React from 'react';
import s from './Header.module.css';
import LogoHeader from './Logo/LogoHeader';
import Button from '../Elements/Button/Button';
import MenuHeader from './Menu/MenuHeader';


function Header() {
    return (
      <header className={s.header}>
        <div className="all_wrap">
            <LogoHeader />
            <MenuHeader />
            <Button text="Вход" color="blue" />
        </div>
      </header>
    );
  }
  
  export default Header;