import React from 'react';
import s from './LinkText.module.css';


const LinkText = (props) => {
    return (
      <a href="#" className={s.link}>
          {props.text}
      </a>
    );
  }
  
  export default LinkText;