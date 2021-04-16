import React, { ReactElement } from 'react'
import styles from './Header.module.css'

function Header(): ReactElement {
    return (
        <div className={"d-flex w-100 justify-content-center flex-column mt-4 p-5 "+styles.main}>
            <p className={"ml-auto mr-auto "+styles.h1}>Careerado</p>
            <p className={"ml-auto mr-auto "+styles.h2}>The Roadmap Library</p>
        </div>
    )
}

export default Header
