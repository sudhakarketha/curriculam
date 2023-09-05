import React from 'react'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LanguageIcon from '@mui/icons-material/Language';
import './Header.css'


const Header = () => {
    return (
        <div>
            <header>
                <div className='libraries'>
                    <LanguageIcon />
                    <div className='library-title'>
                        LIBRARY
                    </div>
                </div>
                <div>
                    <div className='header-title'>
                        A Fun Course You Made in 30 Seconds
                    </div>
                </div>
                <div className='shares'>
                    <AcUnitIcon />
                    <div className='share-title'>SHARE</div>
                </div>
            </header>
        </div>
    )
}

export default Header