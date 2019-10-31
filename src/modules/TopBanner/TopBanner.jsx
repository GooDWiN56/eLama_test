import React from 'react';
import s from './TopBanner.module.css';
import Headline_h1 from '../Elements/Headline_h1/Headline_h1';
import RegBaner from './Registration/Registration';

function TopBaner() {
  return (
    <div className={s.baner}>
        <div className="all_wrap">
            <Headline_h1 text="Возьмем заботу о вашей интернет-рекламе на себя" />
            <RegBaner />
        </div>
    </div>
  );
}

export default TopBaner;
