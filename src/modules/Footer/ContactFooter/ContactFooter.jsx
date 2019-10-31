import React from 'react';
import s from './ContactFooter.module.css';
import ItemListCont from './ItemListCont/ItemListCont';
import LinkText from '../../Elements/LinkText/LinkText';
import SocialItem from './SocialItem/SocialItem';


function ContactFooter() {
    return (
      <div className={s.contact}>
          <div className={s.logo}>
              <img src="img/logo_footer.svg" />
          </div>
          <div className={s.contList}>
            <ItemListCont nomber="8 (499) 270-27-90" text="Москва" />
            <ItemListCont nomber="8 (812) 318-40-54" text="Санкт-Петербург" />
            <ItemListCont nomber="8 (800) 500-31-90" text="Звонки по России" />
            <div className={s.link}>
                <LinkText text="milo@elama.ru" />
                <LinkText text="Реквизиты" />
            </div>
          </div>
          <div className={s.social}>
              <SocialItem href="#" img="img/social/1.svg" />
              <SocialItem href="#" img="img/social/2.svg" />
              <SocialItem href="#" img="img/social/3.svg" />
              <SocialItem href="#" img="img/social/4.svg" />
              <SocialItem href="#" img="img/social/5.svg" />
              <SocialItem href="#" img="img/social/6.svg" />
          </div>
      </div>
    );
  }
  
  export default ContactFooter;