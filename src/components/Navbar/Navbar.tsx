import React, { ReactElement } from 'react'
import Logo from '../../assets/logo.png'

function Navbar(): ReactElement {
    return (
        <div className="d-flex container pt-3">
            <img src={Logo} width="50" alt="Careerado"/>
            
            {/* <div className="d-flex ml-auto align-items-center text-muted">
                <div>Read</div>
                <div className="ml-3 mr-3">Watch</div>
            </div> */}
        </div>
    )
}

export default Navbar
