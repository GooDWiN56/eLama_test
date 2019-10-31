import React from 'react';
import s from './ItemListCont.module.css';


const ItemListCont = (props) => {
    return (
      <div className={s.item}>
          <a href="#" href={"tel:"+props.nomber}>{props.nomber}</a>
          <p>{props.text}</p>
      </div>
    );
  }
  
  export default ItemListCont;