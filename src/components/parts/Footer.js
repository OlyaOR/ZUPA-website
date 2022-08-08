import React from 'react';
import style from '../../style/Parts.module.scss';
import * as L from '../../constants/labels';
import Next from '../../img/main/icon-next.svg';
import NextArrow from '../../img/main/Icon-arrow-next.svg';
import CaseNext from '../../img/case/img_case_next.svg';


export const Footer = ({main}) => {
    return (
        <div className={main ? style.footerBlack : style.footerWhite}>
            <div className={style.footer_firstBlock}>
                <div className={style.footer_firstBlock_info}>
                    {L.MORE_INFO}
                    <p>
                        {
                            main
                                ? <>
                                    Mogens Kristensen, CEO <br/>
                                    +45 55 54 32 10 <br/>
                                    mk@zupa.dk <br/>
                                </>
                                : <>
                                    Mads Mikkelsen <br/>
                                    +45 55 54 32 10 <br/>
                                    sh@zupa.dk <br/>
                                </>
                        }
                    </p>
                </div>
                <div className={style.footer_firstBlock_next}>
                    <img
                        className={style.img }
                        src={ main ? Next : CaseNext }
                        alt={ L.NEXT }
                        loading={ L.LAZY }
                    />
                    <div className={main ? style.nextText : style.nextTextCase}>
                        {
                            main ? L.SERVICES_NEXT : L.SILVAN_BRAND_PLATFORM
                        }
                        <p>
                            {
                                main
                                    ? <>
                                        Check out our work magna <br/>
                                        exlibris lorem ipsum
                                    </>
                                    : <>
                                        { L.WHY} <br/>
                                        { L.YOU_CAN }
                                    </>
                            }
                        </p>
                        <img
                            src={ NextArrow }
                            alt={ L.NEXT }
                            loading={ L.LAZY }
                        />
                    </div>
                </div>
            </div>
            <div className={style.footer_secondBlock}>
                <div className={style.footer_secondBlock_info}>
                    <div>
                        {L.YEAR} <br/>
                        {L.ALL_RIGHTS_RESERVED}
                    </div>
                    <div className={style.cities}>
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
        </div>
    )
}