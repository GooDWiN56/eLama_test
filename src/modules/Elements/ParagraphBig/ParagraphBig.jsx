
import React from 'react';
import s from './ParagraphBig.module.css';


const ParagraphBig = (props) => {
    return (
      <p className={s.parag}>{props.text}</p>
    );
  }
  export default ParagraphBig;