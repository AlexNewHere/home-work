import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void
    onPressKeyboard: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: ()=> void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onPressKeyboard}
) => {
    const inputClass = ((name.length <= 2) || name.match(/\d/))? s.inputFalse: s.inputTrue;
    const failClass = (error)? s.fail : s.failnone;

    return (
        <div className={s.someClass}>
          <div className={s.name}>Enter a name</div>
            <input placeholder={'Username'}
                   value={name}
                   onChange={setNameCallback}
                   onKeyPress={onPressKeyboard}
                   className={s.input+' '+inputClass}/>
            <div className={s.error}>{error}</div>
            <button className={s.btn} onClick={addUser}>Add</button>
            <div className={s.users}>{totalUsers}</div>
            <div className={s.amount}>Amount</div>
            <div className={failClass}>Fail</div>


        </div>
    )
}

export default Greeting
