import React from 'react'
import Affair from './Affair'
import {AffairType, ArrType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
//import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType
    setFilter: Function
    deleteAffairCallback: Function
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: ArrType, i) => (
        <Affair // should work
            key={i} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <SuperButton onClick={setAll}>
                All
            </SuperButton>
            <SuperButton onClick={setHigh}>
                High
            </SuperButton>
            <SuperButton onClick={setMiddle}>
                Middle
            </SuperButton>
            <SuperButton onClick={setLow}>
                Low
            </SuperButton>
        </div>
    )
}

export default Affairs
