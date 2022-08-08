import React from 'react';
import style from '../../style/Case.module.scss';
import * as L from '../../constants/labels';
import Img3 from '../../img/case/img3.svg';


export const Statistic = () => {
    return (
        <div className={style.statistic}>
            <img
                alt={ L.CASE_IMAGE }
                src={ Img3 }
                loading={ L.LAZY }
            />
            <div className={style.statistic_table}>
                <div className={style.text}>
                    { L.VIEWS } <br/>
                    <p>1,7<span>mio +</span></p>
                </div>
                <div className={style.text}>
                    { L.UNIQUE_VIEWS } <br/>
                    <p>1 <span>mio +</span></p>
                </div>
                <div className={style.text}>
                    { L.COMMENTS } <br/>
                    <p>1000<span>+</span></p>
                </div>
                <div className={style.text}>
                    { L.BRAND_KNOWLEDGE } <br/>
                    <p>95%</p>
                </div>
                <div className={style.text}>
                    { L.BRAND_INDEX } <br/>
                    <p><span>No.</span> 01</p>
                </div>
            </div>
        </div>
    )
}