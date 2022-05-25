import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useAppDispatch, useAppSelector} from './bll/store';
import {loadingAC, offLoadingAC} from './bll/loadingReducer';
import './loadingStyle.css'

function HW10() {

  const {loading} = useAppSelector(state => state.loading)
  const dispatch = useAppDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(offLoadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h3>homeworks 10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className='loader'></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
