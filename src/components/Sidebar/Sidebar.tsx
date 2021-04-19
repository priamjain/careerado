import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
interface Props {
    
}

export const Sidebar = (props: Props) => {
    return (
        <div className={styles.main}>
            <p>Most Visited</p>
            <ul className={"mt-3 "+styles.list}>
                <li className={"rounded mt-2 text-center " + styles.card}>
                    <Link to="/roadmap/react" className="p-3 no_style_link d-block w-100 h-100">
                        React
                    </Link>
                </li>

                <li className={"rounded mt-2 text-center " + styles.card}>
                    <Link to="/roadmap/backend" className="p-3 no_style_link d-block w-100 h-100">
                        Backend Development
                    </Link>
                </li>

                <li className={"rounded mt-2 text-center " + styles.card}>
                    <Link to="/roadmap/datascience" className="p-3 no_style_link d-block w-100 h-100">
                        Data Science
                    </Link>
                </li>
            </ul>
            <p className="mt-4">Coming Soon</p>
            <ul className={"mt-3 "+styles.list}>
                <li className={"rounded mt-2 text-center " + styles.card}>
                    <Link to="#" className="p-3 no_style_link d-block w-100 h-100">
                        Devops
                    </Link>
                </li>

                <li className={"rounded mt-2 text-center " + styles.card}>
                    <Link to="#" className="p-3 no_style_link d-block w-100 h-100">
                        Frontend Development
                    </Link>
                </li>
            </ul>
        </div>
    )
}
