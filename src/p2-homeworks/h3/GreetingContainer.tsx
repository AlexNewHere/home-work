import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onPressKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const addUser = () => {
        if ((name.length <= 2) || name.match(/\d/)) {
            setError(name)
            setName('')
            setTimeout(() => setError(''), 3000)
        } else {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
            setError('')
        }
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onPressKeyboard={onPressKeyboard}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
