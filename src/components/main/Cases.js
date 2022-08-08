import React from 'react';
import * as L from '../../constants/labels';
import style from '../../style/Main.module.scss';
import Img1 from '../../img/main/img1.svg';
import Img2 from '../../img/main/img2.svg';
import Img3 from '../../img/main/img3.svg';
import Img4 from '../../img/main/img4.svg';
import Img5 from '../../img/main/img5.svg';
import Img6 from '../../img/main/img6.svg';
import { Button } from './Button';


export const Cases = () => {
    return (
        <div className={style.cases}>
            <div className={style.cases_firstBlock}>
                <div className={style.cases_firstBlock_case}>
                    <img
                        className={style.img}
                        src={ Img1 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.SEARCH_STRATEGY } <br/>
                        <p>{ L.MARSK_GROUP }</p>
                    </div>
                </div>
                <div className={style.caseUXDesigner}>
                    <img
                        src={ Img2 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                </div>
                <div className={style.cases_firstBlock_case}>
                    <img
                        className={style.img}
                        src={ Img3 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.BRAND_PLATFORM } <br/>
                        <p>{ L.SUPERDAK }</p>
                    </div>
                </div>
            </div>
            <div className={style.cases_secondBlock}>
                <div className={style.cases_secondBlock_case}>
                    <img
                        className={style.img}
                        src={ Img4 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.SILVAN_BRAND_PLATFORM } <br/>
                        <p>{ L.WHY }<br/>{ L.YOU_CAN}</p>
                    </div>
                </div>
                <div className={style.caseDiversity}>
                    <img
                        src={ Img5 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                </div>
                <div className={style.caseLGTB}>
                    <p>{L.LGTB}</p>
                    <span>
                        To celebrate diversity, we created an alphabet of love for LGBT+ Ungdom. Each letter was assigned its own meaningful word to spark conversations across the gender spectrum.
                    </span>
                </div>
                <div className={style.cases_secondBlock_case}>
                    <img
                        className={style.img}
                        src={ Img6 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.BRANDINGCAMPAIGN } <br/>
                        <p>{ L.FRILAND_OKOLOGI }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}