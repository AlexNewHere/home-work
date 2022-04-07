import React, {ChangeEvent, useState} from 'react'


export const InputAffairs = () => {

    let [newTitle, setNewTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    };

    return (
        <div>
            <input type={'text'} value={newTitle} onChange={onChangeInputHandler} required/>
        </div>
    )
}


