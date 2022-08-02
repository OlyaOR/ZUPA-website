import React from 'react';
import style from '../../style/Main.module.scss'
import * as L from '../../constants/labels'
import Icon from "../../img/main/icon-article.svg";
import Arrow from "../../img/main/Icon-arrow.svg";
import {ArticleCases} from "./ArticleCases";

export const Article = () => {
    return (
        <div className={style.article}>
            {L.LOREM}
            <p>
                Exlibris magna lix est consectetur <br/> hammock quality celcius
            </p>
            <div className={style.article_info}>
                <div>Viral normcore roof party kinfolk banjo skateboard salvia gentrify deep v affogato vice beard stumptown retro aesthetic. Pitchfork selvage artisan, organic lyft single-origin coffee tattooed affogato echo park. Four dollar toast cold-pressed pitchfork craft beer pok pok tote bag tattooed raclette single-origin coffee hexagon. Meditation hot chicken raw denim, pour-over drinking vinegar </div>
                <div>typewriter mustache taiyaki. Irony kombucha glossier, bushwick authentic everyday carry fixie chillwave vexillologist enamel pin tilde hot chicken green juice four dollar toast yuccie. Man braid slow-carb cloud bread, mixtape master cleanse swag biodiesel asymmetrical air plant copper mug chicharrones af bicycle rights macaroni exlit litterature paperbag stuff holiday swipe pool […]</div>
            </div>
            <div className={style.article_btn}>
                <img
                    src={ Icon }
                    alt={ L.READ_THE_ARTICLE }
                />
                <img
                    src={ Arrow }
                    alt={ L.ARROW }
                />
                { L.READ_THE_ARTICLE }
            </div>
            <ArticleCases/>
        </div>
    )
}