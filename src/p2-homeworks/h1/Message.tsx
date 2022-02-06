import React from 'react'
import s from './Message.module.css';


type propsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: propsType) {
    return (
        <div className={s.all}>
            <div className={s.ava}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.content}>
                <div className={`${s.bubble} ${s.bubble_bottom_left}`} contentEditable>
                    <div className={s.name}>{props.name}</div>
                    <div>
                        <div className={s.message}>{props.message}</div>
                        <div className={s.time}>{props.time}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
