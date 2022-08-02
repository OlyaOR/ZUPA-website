import React from 'react';
import * as L from '../../constants/labels'
import style from '../../style/Main.module.scss'
import Icon from '../../img/main/zupa_icon.svg'
import Title from '../../img/main/title.svg'
import {Cases} from "./Cases";
import {Button} from "./Button";
import Img7 from "../../img/main/img7.svg";
import Img8 from "../../img/main/img8.svg";
import {Article} from "./Article";
import {Footer} from "./Footer";


export const Main = () => {
    return (
        <div className={style.page}>
            <div className={style.header}>
                <img
                    src={ Icon }
                    alt={ L.ZUPA_ICON }
                />
                <div className={style.links}>
                    <ul>
                        <li>{L.SERVICES}</li>
                        <li>{L.CONTACTS}</li>
                    </ul>
                </div>
                <div className={style.socialNetwork}>
                    <ul>
                        <li>{L.FACEBOOK}</li>
                        <li>{L.INSTAGRAM}</li>
                        <li>{L.LINKEDIN}</li>
                    </ul>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.main_info}>
                    <img
                        src={ Title }
                        alt={ L.WMBG }
                    />
                    <div className={style.main_info_text}>
                        <p>You recognize it when it is here.  And when it is not. <br/>
                            Often it is hard to tell what exactly it is.  Yet it sometimes makes you laugh, cry, wonder. Or maybe even share, talk, discuss, dream or finally take action. We simply call it the Glow of a brand.</p>
                        <p>The essence of what sets a brand apart. What makes it attractive, famous, and lively. And ultimately that clarity translates into brand growth. It takes strategic rigor, creative curiosity, and multidisciplinary teams to bring to life. And that’s what we do.</p>
                    </div>
                </div>
                <Cases/>
                <div className={style.main_text}>
                    Lorem ipsum exlibris magna
                    <p>
                        {L.LOREM} <br/>
                        Magna pisce. Fam chartreuse <br/> live edge brunch. Non banh mi.
                    </p>
                </div>
                <div className={style.cases}>
                    <div className={style.cases_firstBlock}>
                        <div>
                            <img
                                src={ Img7 }
                                alt={ L.CASE_IMAGE }
                            />
                            <Button/>
                        </div>
                    </div>
                    <div className={style.cases_secondBlock}>
                        <div>
                            <img
                                src={ Img8 }
                                alt={ L.CASE_IMAGE }
                            />
                            <Button/>
                        </div>
                    </div>
                </div>
                <hr/>
                <article>
                    <Article/>
                </article>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}