import React from 'react';
import * as L from '../../constants/labels';
import style from '../../style/Main.module.scss';
import Img9 from '../../img/main/img9.svg';
import Img10 from '../../img/main/img10.svg';
import Img11 from '../../img/main/img11.svg';
import Img12 from '../../img/main/img12.svg';
import { Button } from './Button';


export const ArticleCases = ({onOpenCase}) => {
    return (
        <div className={style.articleCases}>
            <div className={style.articleCases_firstBlock}>
                <div
                    className={style.articleCases_firstBlock_case}
                    tooltip={ L.CLICK_HERE }
                    onClick={onOpenCase}
                >
                    <img
                        className={style.img}
                        src={ Img9 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.BRANDING_CAMPAIGN } <br/>
                        <p>{ L.OK }</p>
                    </div>
                </div>
                <div>
                    <img
                        src={ Img10 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                </div>
                <div className={style.caseOGI}>
                    <p>{L.OGI}</p>
                    <span>
                         Gentrify typewriter hammock thundercats snackwave asymmetrical sustainable pork belly poutine street art chia kinfolk. Try-hard meditation synth green juice live-edge kale.
                    </span>
                </div>
            </div>
            <div className={style.articleCases_secondBlock}>
                <div className={style.articleCases_secondBlock_case2}>
                    <img
                        className={style.img}
                        src={ Img11 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.CAMPAIGN } <br/>
                        <p>{ L.THE_JYSK } <br/> { L.APARTMENT }</p>
                    </div>
                </div>
                <div className={style.articleCases_secondBlock_case2}>
                    <img
                        className={style.img}
                        src={ Img12 }
                        alt={ L.CASE_IMAGE }
                        loading={ L.LAZY }
                    />
                    <Button/>
                    <div className={style.imgText}>
                        { L.WEBSITE } <br/>
                        <p>{ L.INVITIO }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}