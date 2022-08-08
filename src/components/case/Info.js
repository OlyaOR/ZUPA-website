import React from 'react';
import style from '../../style/Case.module.scss';
import * as L from '../../constants/labels';
import Img1 from '../../img/case/img1.svg';
import Img2 from '../../img/case/img2.svg';
import Bumper1 from '../../img/case/Bumper1.svg';
import Bumper2 from '../../img/case/Bumper2.svg';
import Bumper3 from '../../img/case/Bumper3.svg';
import Bumper4 from '../../img/case/Bumper4.svg';


export const Info = () => {
    return (
        <div className={style.info}>
            <div className={style.info_content}>
                <img
                    src={ Img1 }
                    alt={ L.CASE_IMAGE }
                    loading={ L.LAZY }
                />
                <h3>For more than a decade, energy company OK has celebrated the unsung heroes of local sports in their TV ads, building a strong brand position along the way.</h3>
                <p>The in-your-face comedy and likeable characters of the OK universe resonate broadly. Today, more than 95% of all Danes knows the brand, and OK is by far the most liked brand in in the “Energy” category, according to YouGov.</p>
                <img
                    alt={ L.CASE_IMAGE }
                    src={ Img2 }
                    loading={ L.LAZY }
                />
                <div className={style.info_content_text}>
                    <p>While the OK formula is well-known, the universe is evolving. Our latest films are the first to follow a main character across multiple ads. In this case, a smalltown club manager willing to do whatever it takes to win.</p>
                    <p>For each TV ad, we develop series of bumpers for digital channels. With a concept this well-established, 6 seconds is amble time to get the message across.</p>
                </div>
                <div className={style.bumper}>
                    <div className={style.bumper_firstBlock}>
                        <div>
                            <img
                                alt={ `${L.BUMPER_IMG} 1` }
                                src={ Bumper1 }
                                loading={ L.LAZY }
                            />
                            { `${L.BUMPER} 1` }
                        </div>
                        <div>
                            <img
                                alt={ `${L.BUMPER_IMG} 3` }
                                src={ Bumper3 }
                                loading={ L.LAZY }
                            />
                            { `${L.BUMPER} 3` }
                        </div>
                    </div>
                    <div className={style.bumper_secondBlock}>
                        <div>
                            <img
                                alt={ `${L.BUMPER_IMG} 2` }
                                src={ Bumper2 }
                                loading={ L.LAZY }
                            />
                            { `${L.BUMPER} 2` }
                        </div>
                        <div>
                            <img
                                alt={ `${L.BUMPER_IMG} 4` }
                                src={ Bumper4 }
                                loading={ L.LAZY }
                            />
                            { `${L.BUMPER} 4` }
                        </div>
                    </div>
                </div>
                <p>Everyone is in the joke. Even former head coach of FC Copenhagen, Ståle Solbakken. In 2020, he starred in a Facebook teaser ad, which generated more than a million unique views and +1000 comments.</p>
            </div>
        </div>
    )
}