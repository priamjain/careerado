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
                <Link to="/roadmap/react" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 text-center " + styles.card}>React</div>
                </Link>
                <Link to="/roadmap/backend" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 text-center " + styles.card}>Backend Web Development</div>
                </Link>
            </div>
            <p className="mt-4">Coming Soon</p>
            <div className="mt-3">
                <Link to="#" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 text-center " + styles.card}>Devops</div>
                </Link>
                <Link to="#" className="no_style_link">
                    <div className={"p-3 border border-dark rounded mt-2 text-center " + styles.card}>Frontend Web Development</div>
                </Link>
            </div>
        </div>
    )
}
