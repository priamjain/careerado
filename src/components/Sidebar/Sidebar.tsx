import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
interface Props {
    
}

export const Sidebar = (props: Props) => {
    return (
        <div className={styles.main}>
            <p>Most Visited</p>
            <div className="mt-3">
                <Link to="/card" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 " + styles.card}>Aircraft Maintainance</div>
                </Link>
                <Link to="/card" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 " + styles.card}>Aircraft Maintainance</div>
                </Link>
                <Link to="/card" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 " + styles.card}>Aircraft Maintainance</div>
                </Link>
                <Link to="/card" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 " + styles.card}>Aircraft Maintainance</div>
                </Link>
            </div>
        </div>
    )
}
