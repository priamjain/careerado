import React, { ReactElement } from 'react'
import styles from './Header.module.css'

function Header(): ReactElement {
    return (
        <div className={"container d-flex w-100 justify-content-center flex-column mt-4 p-5 "+styles.main}>
            <p className="ml-auto mr-auto" style={{fontSize:'3rem'}}>Careerado.</p>
            <p className="ml-auto mr-auto" style={{fontSize:'2rem'}}> A place to learn. A chance to grow</p>
        </div>
    )
}

export default Header
