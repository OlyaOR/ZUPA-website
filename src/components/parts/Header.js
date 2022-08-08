import React from 'react';
import * as L from '../../constants/labels';
import style from '../../style/Parts.module.scss';
import Icon from '../../img/main/zupa_icon.svg';
import IconWite from '../../img/case/zupa-icon-white.svg';
import { useNavigate } from 'react-router-dom';

export const Header = ({main}) => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(`/`);
    };
    return (
        <div className={main ? style.headerBlack : style.headerWhite}>
            <img
                src={ main ? Icon : IconWite }
                alt={ L.ZUPA_ICON }
                loading={ L.LAZY }
                onClick={() => goHome()}
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
    )
}