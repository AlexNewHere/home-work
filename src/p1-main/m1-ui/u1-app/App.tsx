import React from 'react'
import s from './App.module.css'
import Header from '../../../p2-homeworks/h5/Header';
import InRoutes, {PATH} from '../../../p2-homeworks/h5/Routes';


function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>

            <Header/>
            <InRoutes/>

        </div>
    )
}

export default App
