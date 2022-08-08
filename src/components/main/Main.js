import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '../../constants/labels';
import style from '../../style/Main.module.scss';
import Title from '../../img/main/title.svg';
import { Cases } from './Cases';
import { Button } from './Button';
import Img7 from '../../img/main/img7.svg';
import Img8 from '../../img/main/img8.svg';
import { Article } from './Article';
import { Footer } from '../parts/Footer';
import { Header } from '../parts/Header';


export const Main = () => {
    const navigate = useNavigate();
    const onOpenCase = () => {
        navigate(`branding/campaign`);
    };
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div className={style.mainPage}>
            <nav>
                <Header main={ true }/>
            </nav>
            <main>
                <div className={style.main}>
                    <div className={style.main_info}>
                        <img
                            src={ Title }
                            alt={ L.WMBG }
                            loading={ L.LAZY }
                        />
                        <div className={style.main_info_text}>
                            <p>You recognize it when it is here.  And when it is not. <br/>
                                Often it is hard to tell what exactly it is.  Yet it sometimes makes you laugh, cry, wonder. Or maybe even share, talk, discuss, dream or finally take action. We simply call it the Glow of a brand.</p>
                            <p>The essence of what sets a brand apart. What makes it attractive, famous, and lively. And ultimately that clarity translates into brand growth. It takes strategic rigor, creative curiosity, and multidisciplinary teams to bring to life. And that’s what we do.</p>
                        </div>
                    </div>
                    <Cases/>
                    <div className={style.main_text}>
                        { L.LOREM }
                        <p>
                            {L.LOREM} <br/>
                            Magna pisce. Fam chartreuse <br/> live edge brunch. Non banh mi.
                        </p>
                    </div>
                    <div className={style.cases}>
                        <div className={style.cases_firstBlock}>
                            <div className={style.cases_firstBlock_case2}>
                                <img
                                    className={style.img}
                                    src={ Img7 }
                                    alt={ L.CASE_IMAGE }
                                    loading={ L.LAZY }
                                />
                                <Button/>
                                <div className={style.imgText}>
                                    { L.CONCEPT_DESIGN } <br/>
                                    <p>{ L.SALLING }</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.cases_secondBlock}>
                            <div className={style.cases_secondBlock_case}>
                                <img
                                    className={style.img}
                                    src={ Img8 }
                                    alt={ L.CASE_IMAGE }
                                    loading={ L.LAZY }
                                />
                                <Button/>
                                <div className={style.imgText}>
                                    { L.ARLA } <br/>
                                    <p>{ L.PASSION }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <article>
                        <Article onOpenCase={() => onOpenCase()}/>
                    </article>
                </div>
            </main>
            <footer>
                <Footer main={ true }/>
            </footer>
        </div>
    )
}