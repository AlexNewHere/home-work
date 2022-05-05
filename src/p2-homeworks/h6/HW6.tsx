import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './common/c4-SuperEditableSpan/HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div className={s.place}>
            <hr/>
            <h1>homeworks 6</h1>

            {/*should work (должно работать)*/}

                <div className={s.placeTitle} >
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                        className={s.spanStyle}
                    />
                </div>
                <div><SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
)
}

export default HW6
