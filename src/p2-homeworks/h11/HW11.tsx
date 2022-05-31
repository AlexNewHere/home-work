import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)


    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div>
                <span>{minValue}</span>
                <SuperRange
                    onChangeRange={setMinValue}
                />
            </div>

            <div>
                <span>{minValue}</span>
                <SuperDoubleRange
                    // value={[value1, value2]}
                    // onChangeRange={setValue1}
                />
                <span>{maxValue}</span>
            </div>
            <hr/>

            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
