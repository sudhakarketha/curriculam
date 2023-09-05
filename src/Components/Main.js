import React from 'react';

import Sidebar from './Sidebar';
import Body from './Body';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='lside-bar'>
            <Sidebar />
            </div>
            <div className='rside-bar'>
               <Body/>
            </div>
           
        </div>
    )
}

export default Main