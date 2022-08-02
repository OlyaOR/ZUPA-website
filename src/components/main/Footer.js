import React from 'react';
import style from '../../style/Main.module.scss'
import * as L from '../../constants/labels'
import Next from "../../img/main/icon-next.svg";
import NextArrow from "../../img/main/Icon-arrow-next.svg";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_firstBlock}>
                <div className={style.footer_firstBlock_info}>
                    {L.MORE_INFO}
                    <p>
                        Mogens Kristensen, CEO <br/>
                        +45 55 54 32 10 <br/>
                        mk@zupa.dk <br/>
                    </p>
                </div>
                <div className={style.footer_firstBlock_next}>
                    <div>
                        <img
                            src={ Next }
                            alt={ L.NEXT }
                        />
                    </div>
                    <div className={style.nextText}>
                        {L.SERVICES_NEXT}
                        <p>
                            Check out our work magna <br/>
                            exlibris lorem ipsum
                        </p>
                        <img
                            src={ NextArrow }
                            alt={ L.NEXT }
                        />
                    </div>
                </div>
            </div>
            <div className={style.footer_secondBlock}>
                <div>
                    {L.YEAR} <br/>
                    {L.ALL_RIGHTS_RESERVED}
                </div>
                <div className={style.footer_secondBlock_cities}>
                    <span>{L.COPENHAGEN}</span>
                    <span>{L.AARHUS}</span>
                    <span>{L.ODENSE}</span>
                </div>
                <div>
                    {L.EMAIL} <br/>
                    {L.PHONE}
                </div>
            </div>
        </div>
    )
}