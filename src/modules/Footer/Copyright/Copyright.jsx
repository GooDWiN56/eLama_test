import React from 'react';
import s from './Copyright.module.css';
import LinkText from '../../Elements/LinkText/LinkText';


function Copyright() {
    return (
        <div className={s.copy_wrap}>
            <div>© 2008—2018 eLama.ru. Все права защищены</div>
            <div><LinkText text="Политика в отношении обработки персональных данных" /></div>
        </div>
    );
}

export default Copyright;