import React, { useEffect } from 'react';
import { Footer } from '../parts/Footer';
import { Header } from '../parts/Header';
import style from '../../style/Case.module.scss';
import { Statistic } from './Statistic';
import { Info } from './Info';
import Background from '../../img/case/bg-img.svg';
import * as L from '../../constants/labels';


export const Case = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div className={style.casePage}>
            <nav>
                <Header main={ false }/>
            </nav>
            <main>
                <h1>The chance of you <span>not</span> knowing OK is now less than 5%</h1>
                <h2>Supporting local sports clubs have led to a +95% brand recognition for OK. We’ve been part of the journey from day one.</h2>
                <div className={style.infoTitle}>
                    <div className={style.text}>
                        { L.BRANDING_CAMPAIGN} <br/>
                        <p>{ L.OK }</p>
                    </div>
                    <div className={style.background}>
                        <img
                            src={ Background }
                            alt={ L.BACKGROUND_IMG }
                            loading={ L.LAZY }
                        />
                    </div>
                </div>
                <Info/>
                <Statistic/>
            </main>
            <footer>
                <Footer main={ false }/>
            </footer>
        </div>
    )
}