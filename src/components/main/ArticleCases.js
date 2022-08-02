import React from 'react';
import * as L from '../../constants/labels'
import style from '../../style/Main.module.scss'
import Img9 from '../../img/main/img9.svg'
import Img10 from '../../img/main/img10.svg'
import Img11 from '../../img/main/img11.svg'
import Img12 from '../../img/main/img12.svg'
import {Button} from "./Button";


export const ArticleCases = () => {
    return (
        <div className={style.articleCases}>
            <div className={style.articleCases_firstBlock}>
                <div>
                    <img
                        src={ Img9 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
                <div>
                    <img
                        src={ Img10 }
                        alt={ L.CASE_IMAGE }
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
                <div>
                    <img
                        src={ Img11 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>

                <div>
                    <img
                        src={ Img12 }
                        alt={ L.CASE_IMAGE }
                    />
                    <Button/>
                </div>
            </div>
        </div>
    )
}