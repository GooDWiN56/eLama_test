import React from 'react';
import s from './Headline_h1.module.css';


const Headline_h1 = (props) => {
    return (
      <h1 className={s.headline}>{props.text}</h1>
    );
  }
  
  export default Headline_h1;