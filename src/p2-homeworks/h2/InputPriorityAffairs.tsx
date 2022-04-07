import React, {useState} from 'react'


type newTitleType = 'high' | 'low' | 'middle'



const InputPriorityAffairs = () => {

    let [newTitle, setNewTitle] = useState<newTitleType>('high')

    const onChangePriorityHandler = (  ) => {

    };
    console.log(newTitle)
    return (
        <div>
            <select value={newTitle} onChange={onChangePriorityHandler}>
                <option value='high'>High</option>
                <option value="middle">Middle</option>
                <option value="low">Low</option>
            </select>
        </div>
    )
}


