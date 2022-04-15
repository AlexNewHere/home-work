import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';


// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])
    console.log(users)
    const addUserCallback = (name: string) => {
        setUsers([...users, {_id: v1(), name: name}])
    }

    return (
        <div>
            <hr/>
            <div>homeworks 3</div>

            {/*should work (должно работать)*/}
            <div><GreetingContainer users={users} addUserCallback={addUserCallback}/></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}

        </div>
    )
}

export default HW3
