import React from 'react';
import s from './Button.module.css';


const Button = (props) => {
    let color;
    if (props.color === "blue") {
        color = s.blue;
    }
    else if (props.color === "green"){
        color = s.green;
    }
    return (
      <button className={s.button+" "+color}>
          {props.text}
      </button>
    );
  }
  
  export default Button;