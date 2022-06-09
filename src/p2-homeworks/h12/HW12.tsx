import React, {CSSProperties} from 'react';
import s from './HW12.module.css';
import {useAppDispatch, useAppSelector} from '../h10/bll/store';
import {themesAC} from '../h10/bll/themesReducer';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes: Array<string> = ['dark', 'red', 'some', 'mixing'];

function HW12() {
    const theme = useAppSelector(state => state.themes)
    const dispatch = useAppDispatch()

    const onChangeCallback = (color: string) => {
        dispatch(themesAC(color))
    }

    const styleMixing: CSSProperties = {
        backgroundImage: `linear-gradient(to left, 
        rgba(${theme.minAmount*2}, ${theme.maxAmount-theme.minAmount}, ${theme.maxAmount*2}, 1), 
        rgba(196, ${theme.minAmount*2}, ${theme.maxAmount}, 1), 
        rgba(${theme.maxAmount-theme.minAmount}, ${theme.maxAmount}, ${theme.maxAmount*2}, 1))`
    }

const styleTheme: CSSProperties | undefined = ((theme.theme==='mixing') ? styleMixing: undefined)

    return (
<>{(theme.theme==='mixing') && <span style={{display: 'flex', justifyContent: 'center'}}>select range</span>}
        <div style={styleTheme} className={s.placeWork + ' ' + s[theme.theme]}>

                <span className={s[theme.theme + '-text']}>
                <h3>homeworks 12</h3>
            </span>

            <span><SuperSelect options={themes} onChangeOption={onChangeCallback}/></span>


            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}


        </div>
</>
    );
}

export default HW12;
