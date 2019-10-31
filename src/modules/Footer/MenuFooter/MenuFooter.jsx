import React from 'react';
import s from './MenuFooter.module.css';
import ItemMenuFooter from './ItemMenuFooter/ItemMenuFooter';


function MenuFooter() {
    return (
      <div className={s.menu}>
        <ItemMenuFooter text="С чего начать" />
        <ItemMenuFooter text="Инструменты" />
        <ItemMenuFooter text="Агентам и фрилансерам" />
        <ItemMenuFooter text="Помощь" />
      </div>
    );
  }
  
  export default MenuFooter;