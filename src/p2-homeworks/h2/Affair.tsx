import React from 'react'
import {ArrType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: ArrType
    deleteAffairCallback: Function
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id:number) => {props.deleteAffairCallback(id)}// need to fix

    return (
        <div>
            <div className={s.main} >{props.affair.name}</div>
            <div className={s.main} >{props.affair.priority}</div>
            {/*<button onClick={()=>{deleteCallback(props.affair.id)}}>X</button>*/}
            <SuperButton red onClick={()=>{deleteCallback(props.affair.id)}}>
                x
            </SuperButton>
        </div>
    )
}

export default Affair
