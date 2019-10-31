import React from 'react';
import s from './ItemMenu.module.css';


const ItemMenu = (props) => {
    return (
      <div className={s.item}>
          <a href="#">{props.text}</a>
      </div>
    );
  }
  
  export default ItemMenu;