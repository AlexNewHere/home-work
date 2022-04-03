import React from 'react'
import a from './Message.module.css'

export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export const Message = (props: messageDataType) => {
    return (
        <div className={a.post}>
            <div className={a.block_message}>
                <img className={a.img_avatar} src={props.avatar} alt="icon"/>
                <div className={a.message}>
                    <h2 className={a.h2}>{props.name}</h2>
                    <p className={a.p_text}>{props.message}
                        <p className={a.time}>{props.time}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

