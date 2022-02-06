import React from 'react'
import {NavLink} from "react-router-dom";
import s from './h5.module.css';

function Header() {
    return (
        <span>
            <span>
                <NavLink className={navData => navData.isActive ? s.active : s.item}
                         to={'/pre-junior'}>PRE_JUNIOR </NavLink>
            </span>
            <span>
                <NavLink className={navData => navData.isActive ? s.active : s.item}
                         to={'/junior'}>JUNIOR </NavLink>
            </span>
            <span>
                <NavLink className={navData => navData.isActive ? s.active : s.item}
                         to={'/junior-plus'}>JUNIOR_PLUS </NavLink>
            </span>
        </span>
    )
}

export default Header
