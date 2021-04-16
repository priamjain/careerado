import React from 'react'
import Logo from '../../assets/logo.png'
import styles from './Footer.module.css'
interface Props {
    
}

export const Footer = (props: Props) => {
    return (
        <div className={"row pt-5 mb-5 "+styles.main}>
            <div className="col-12 col-md-8">
                <div className="d-flex align-items-center">
                    <img src={Logo} alt={Logo} height="50"/>
                    <div className={"pl-2 "+styles.name}>Careerado.</div>
                </div>
                <div className="mt-3">
                    The roadmap library
                </div>
                <div className="text-muted mt-3 w-75">
                    Roadmaps, articles, resources and journeys to help you choose your path and grow in your career.
                </div>
            </div>
            <div className="col-12 col-md-4">
                Learn more
            </div>
        </div>
    )
}
