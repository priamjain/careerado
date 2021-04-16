import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import styles from './Layout.module.css'

interface Props {
    children: React.ReactNode
}

export const Layout = (props: Props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9">
                <Navbar/>
                <div style={{minHeight:'78vh'}}>
                {
                    props.children
                }
                </div>
                <Footer/>
                </div>
                <div className={"col-12 col-md-3 "+styles.c2}>
                   <Sidebar/>
                </div>
            </div>
        </div>
    )
}
