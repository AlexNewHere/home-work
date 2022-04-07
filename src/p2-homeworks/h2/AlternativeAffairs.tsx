import React, {ChangeEvent, useState} from 'react'
import s from './Affairs.module.css'

type PropsType = {
    addAffair: (nameAffair: string, priorityAffair: string) => void
}

function AlternativeAffairs(props: PropsType) {

    let [newPriority, setNewPriority] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPriority(event.currentTarget.value)
    };

    let [newTitle, setNewTitle] = useState('high')

    const onChangePriorityHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setNewTitle(value)
    };

    const onChangeButtonHandler = () => {
        props.addAffair(newPriority, newTitle)
        setNewPriority('')
    }
    return (
        <div className={s.input}>
            <input value={newPriority} onChange={onChangeInputHandler} required/>
            <select value={newTitle} onChange={onChangePriorityHandler}>
                <option value="high">high</option>
                <option value="low">low</option>
                <option value="middle">middle</option>
            </select>
            <button onClick={onChangeButtonHandler}>+</button>
        </div>
    )
}

export default AlternativeAffairs
