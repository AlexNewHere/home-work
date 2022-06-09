import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
// import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {DoubleRangeSlider} from './common/rangeSlider/DoubleRangeSlider'
import s from './common/c7-SuperRange/SuperRange.module.css';
import {useAppDispatch} from '../h10/bll/store';
import {changeColorsAC} from '../h10/bll/themesReducer';


function HW11() {

    const dispatch=useAppDispatch()

    const [maxValue, setMaxValue] = useState<number>(100)

    const [minVal, setMinVal] = useState<number>(0);

    useEffect(()=>{
        dispatch(changeColorsAC(minVal, maxValue))
    }, [minVal ,maxValue])


    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div className={s.placeInput} >
                <span>{minVal}</span>
                <SuperRange
                    onChangeRange={(valueSlide)=>{setMinVal(valueSlide)}}
                    value={minVal}
                    max={maxValue}

                />
            </div>
            <DoubleRangeSlider
                min={0}
                max={100}
                onChange={({min, max}) => {setMaxValue(max); setMinVal(min)}}
                minVal={minVal}
                setMinVal={(val)=>setMinVal(val)}
            />
            {/*<div>*/}
            {/*    <span>{minValue}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        value={[minValue, maxValue]}*/}
            {/*        // onChangeRange={setMinValue}*/}
            {/*    />*/}
            {/*    <span>{maxValue}</span>*/}
            {/*</div>*/}
            <hr/>

            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
