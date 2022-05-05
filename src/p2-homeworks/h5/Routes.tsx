import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    SENIOR: '/senior',
}

export const Pages=()=> {
    return (
        <div>
            <Routes>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>


            <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
