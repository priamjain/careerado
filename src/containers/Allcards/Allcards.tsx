import React, { ReactElement } from 'react'
import { CareerCard } from '../../components/CareerCard/CareerCard'
import styles from './Allcards.module.css'
function Allcards(): ReactElement {
    return (
        <div className={"mt-4 pt-3 pb-4 "+ styles.main}>
            <p className="h2 text-dark">Find a roadmap for your passion</p>
            <div className="row">
                <CareerCard/>
                <CareerCard/>
                <CareerCard/>
                <CareerCard/>
                <CareerCard/>
                <CareerCard/>
                <CareerCard/>
            </div>
        </div>
    )
}

export default Allcards
