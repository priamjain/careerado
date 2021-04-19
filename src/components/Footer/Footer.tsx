import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styles from './Footer.module.css'
interface Props {
    
}

export const Footer = (props: Props) => {
    return (
        <div className={"row pt-5 mb-5 "+styles.main}>
            <div className="col-12 col-md-8">
                <Link to="/" className="no_style_link">
                    <div className="d-flex align-items-center">
                        <img src={Logo} alt={Logo} height="50"/>
                        <div className={"pl-2 "+styles.name}>Careerado.</div>
                    </div>
                </Link>
                <div className="mt-3">
                    The roadmap library
                </div>
                <div className="text-muted mt-3 w-75">
                    Find a roadmap for your passion and grow in your career.
                </div>
            </div>
            <div className="col-12 col-md-4">
                <a href="mailto:contact@priamjain.me" target="_blank_"className="no_style_link h5 mb-4">CONTACT US</a>
                <p className="h5 mt-2"><span>© </span><span className="align-text-top">careerado.com</span></p>
            </div>
        </div>
    )
}
