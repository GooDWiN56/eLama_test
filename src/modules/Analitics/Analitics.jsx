import React from 'react';
import s from './Analitics.module.css';
import Headline_h1 from '../Elements/Headline_h1/Headline_h1';
import ParagraphSmall from '../Elements/ParagraphSmall/ParagraphSmall';
import Button from '../Elements/Button/Button';
import LinkText from '../Elements/LinkText/LinkText';



function Analitics() {
    return (
        <div className={s.analitics}>
            <div className="all_wrap">
                <div>
                    <picture>
                        <source srcset="img/monitor@2x.png 2x, ./img/monitor.png 1x" type="image/png" />
                        <img src="./img/monitor.png" alt="" />
                    </picture>
                </div>
                <div>
                    <Headline_h1 text="Настроим системы веб-аналитики или доработаем текущие настройки" />
                    <ParagraphSmall text="Создадим цели, события и свяжем системы аналитики с рекламными системами, чтобы вы получали правильные данные" />
                    <div className={s.form}>
                        <Button text="Заполнить бриф" color="green" />
                        <LinkText text="Получить консультацию" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analitics;
