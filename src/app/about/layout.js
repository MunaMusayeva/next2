import SideMenu from '@/components/about/SideMenu'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='flex justify-between'>
            <SideMenu />
            {children}
        </div>
    )
}

export default Layout