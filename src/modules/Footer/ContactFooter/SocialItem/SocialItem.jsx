import React from 'react';
import s from './SocialItem.module.css';


const SocialItem = (props) => {
    return (
      <div className={s.item}>
          <a href={props.href} target="_blank">
              <img src={props.img} />
          </a>
      </div>
    );
  }
  
  export default SocialItem;