import React from 'react';
import s from './Company.module.css';
import Headline_h1 from '../Elements/Headline_h1/Headline_h1';
import Button from '../Elements/Button/Button';
import ParagraphSmall from '../Elements/ParagraphSmall/ParagraphSmall';


function Company() {
    return (
      <div className={s.company}>
        <div className="all_wrap">
            <div className={s.list}>
                <div className={s.item}>
                    <Headline_h1 text="Бесплатная стартовая кампания" />
                    <Button text="Заполнить бриф" color="green" />
                </div>
                <div className={s.item}>
                    <ParagraphSmall text="Для клиентов с любыми бюджетами создадим стартовую кампанию бесплатно. Подберем ключи, напишем объявления, настроим инструменты автоматизации." />
                </div>
                <div className={s.item}>
                    <ParagraphSmall text="Для этого пополните баланс на 10 000 рублей и заполните бриф" />
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Company;