import React from 'react'
import SideMenu from './SideMenu';
 const LayOut = ({children}) => {
        return (
            <div className='layout'>
                <SideMenu />
                {children}
            </div>
        )
    }


export default LayOut;
