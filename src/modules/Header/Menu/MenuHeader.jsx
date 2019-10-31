import React from 'react';
import s from './MenuHeader.module.css';
import ItemMenu from './ItemMenu/ItemMenu';


function MenuHeader() {
    return (
      <div className={s.menu}>
          <ItemMenu text="С чего начать" />
          <ItemMenu text="Инструменты" />
          <ItemMenu text="Услуги" />
      </div>
    );
  }
  
  export default MenuHeader;