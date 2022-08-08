import React from 'react';
import * as L from '../../constants/labels';
import style from '../../style/Main.module.scss';
import Arrow from '../../img/main/Icon-arrow.svg';


export const Button = () => {
    return (
        <div className={style.caseBtn}>
            <img
                src={ Arrow }
                alt={ L.ARROW }
                loading={ L.LAZY }
            />
        </div>
    )
}