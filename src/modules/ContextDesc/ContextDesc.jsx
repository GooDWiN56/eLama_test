import React from 'react';
import s from './ContextDesc.module.css';

import ContextItem from './ContextItem/ContextItem';
import Headline_h1 from '../Elements/Headline_h1/Headline_h1';

function ContextDesc() {
    return (
        <div className={s.context}>
            <div className="all_wrap">
                <Headline_h1 text="Ведем контекстную и таргетированную рекламу" />
                <div className={s.contList}>
                    <ContextItem img="img/contItem/1.svg" head="Привлекаем целевой трафик на сайт" text="Создаем и оптимизируем рекламные кампании с учетом особенностей вашего бизнеса, чтобы вы получали максимум потенциальных клиентов" />
                    <ContextItem img="img/contItem/2.svg" head="Совершенствуем нашу работу" text="Используем все возможности рекламных систем и eLama для результативной работы с рекламными кампаниями" />
                    <ContextItem img="img/contItem/3.svg" head="Помогаем стать эффективнее" text="Выбираем метрики в соответствии с вашими бизнес-задачами и понятно рассказываем о результатах рекламы" />
                </div>
            </div>

        </div>
    );
}

export default ContextDesc;
