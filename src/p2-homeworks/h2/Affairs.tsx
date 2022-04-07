import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (a: FilterType | AffairPriorityType)=> void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}

            <tr className={s.button}>
                <th>
                    <button onClick={setAll}>All</button>
                </th>
                <th>
                    <button onClick={setHigh}>High</button>
                </th>
                <th>
                    <button onClick={setMiddle}>Middle</button>
                </th>
                <th>
                    <button onClick={setLow}>Low</button>
                </th>
            </tr>
        </div>
    )
}

export default Affairs
