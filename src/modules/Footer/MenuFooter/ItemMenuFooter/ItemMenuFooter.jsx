import React from 'react';
import s from './ItemMenuFooter.module.css';


const ItemMenuFooter = (props) => {
    return (
        <div className={s.item}>
            <a href="#">{props.text}</a>
        </div>
    );
}

export default ItemMenuFooter;