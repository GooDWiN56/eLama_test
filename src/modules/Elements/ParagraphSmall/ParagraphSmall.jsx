
import React from 'react';
import s from './ParagraphSmall.module.css';


const ParagraphSmall = (props) => {
    return (
      <p className={s.parag}>{props.text}</p>
    );
  }
  
  export default ParagraphSmall;