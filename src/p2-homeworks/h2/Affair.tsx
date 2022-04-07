import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from './HW2';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_d: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
       return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div key={props.affair._id}>
            <tr className={s.table}>
                <th>{props.affair.name}</th>
                <th>{props.affair.priority}</th>
                <th>
                    <button onClick={deleteCallback}>X</button>
                </th>
            </tr>
        </div>
    )
}

export default Affair
