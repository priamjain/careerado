import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/logo.png'
import styles from './Footer.module.css'
import data from '../../../../utils/MainData.json'
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
                    {data.title}
                </div>
                <p className="text-muted mt-3 w-75">
                {data.description1}
                </p>
            </div>
                <ul className="col-12 col-md-4 list-unstyled">
                    <li>
                        <Link className="no_style_link" to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link className="no_style_link" to="/roadmap">Roadmaps</Link>
                    </li>
                    <li>
                        <a href="mailto:contact@priamjain.me" target="_blank_"className="no_style_link mb-4">Contact Us</a>
                    </li>
                    <li>
                        <p className="h5 mt-2"><span>© </span><span className="align-text-top">careerado.com</span></p>
                    </li>
                </ul>
        </div>
    )
}
