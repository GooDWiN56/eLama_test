import React from 'react';
import s from './Registration.module.css';
import ParagraphBig from '../../Elements/ParagraphBig/ParagraphBig';
import Button from '../../Elements/Button/Button';
import LinkText from '../../Elements/LinkText/LinkText';

function RegBaner() {
  return (
    <div className={s.form}>
        
        <ParagraphBig text="Поможем найти покупателей с помощью контекстной и таргетированной рекламы 
и расскажем о результатах на понятном языке." />
        <div className={s.form_right}>
            <Button text="Заполнить бриф" color="green" />
            <LinkText text="Получить консультацию" />
        </div>
    </div>
  );
}

export default RegBaner;
