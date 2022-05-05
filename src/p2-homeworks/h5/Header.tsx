import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Routes';
import s from './Header.module.css'



function Header() {
    return (
        <div  className={s.flexStyle}>
            <div>
                <NavLink to={PATH.PRE_JUNIOR}
                        className={({isActive}) => isActive ? s.active + ' ' + s.link : s.link}>PRE_JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => isActive ? s.active + ' ' + s.link : s.link}>JUNIOR</NavLink>
                <NavLink to={PATH.SENIOR}
                         className={({isActive}) => isActive ? s.active + ' ' + s.link : s.link}>SENIOR</NavLink>
            </div>
            <div className={`${s.triangle} ${s.right}`}></div>
        </div>
    )
}

export default Header
