import React from 'react';
import * as L from '../../constants/labels'
import style from '../../style/Main.module.scss'
import Img1 from '../../img/main/img1.svg'
import Img2 from '../../img/main/img2.svg'
import Img3 from '../../img/main/img3.svg'
import Img4 from '../../img/main/img4.svg'
import Img5 from '../../img/main/img5.svg'
import Img6 from '../../img/main/img6.svg'
import {Button} from "./Button";


export const Cases = () => {
    return (
        <div className={style.cases}>
            <div className={style.cases_firstBlock}>
                <div>
                    <img
                        src={ Img1 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
                <div className={style.caseUXDesigner}>
                    <img
                        src={ Img2 }
                        alt={ L.CASE_IMAGE }
                    />
                </div>
                <div>
                    <img
                        src={ Img3 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
            </div>
            <div className={style.cases_secondBlock}>
                <div>
                    <img
                        src={ Img4 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
                <div className={style.caseDiversity}>
                    <img
                        src={ Img5 }
                        alt={ L.CASE_IMAGE }
                    />
                </div>
                <div className={style.caseLGTB}>
                    <p>{L.LGTB}</p>
                    <span>
                        To celebrate diversity, we created an alphabet of love for LGBT+ Ungdom. Each letter was assigned its own meaningful word to spark conversations across the gender spectrum.
                    </span>
                </div>
                <div>
                    <img
                        src={ Img6 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
            </div>
        </div>
    )
}