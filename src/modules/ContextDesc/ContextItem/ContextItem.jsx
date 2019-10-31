import React from 'react';
import s from './ContextItem.module.css';
import ParagraphBig from '../../Elements/ParagraphBig/ParagraphBig';
import ParagraphSmall from '../../Elements/ParagraphSmall/ParagraphSmall';


const ContextItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={props.img} />
            </div>
            <ParagraphBig text={props.head} />
            <ParagraphSmall text={props.text} />
        </div>
    );
}

export default ContextItem;
