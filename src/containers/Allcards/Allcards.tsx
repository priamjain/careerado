import React, { ReactElement } from 'react'
import { CareerCard } from '../../components/CareerCard/CareerCard'
import styles from './Allcards.module.css'
import roadmapsData  from '../../data/roadmaps.json'

function Allcards(): ReactElement {
    return (
        <div className={"mt-4 pt-3 pb-4 "+ styles.main}>
            <h2 className="h2 text-dark">Find a roadmap for your passion</h2>
            <div className="row">
                <CareerCard
                    title={roadmapsData.react.title}
                    description={roadmapsData.react.description}
                    comingsoon={false}
                />
                <CareerCard
                    title={roadmapsData.backend.title}
                    description={roadmapsData.backend.description}
                    comingsoon={true}
                />
                <CareerCard
                    title={roadmapsData.devops.title}
                    description={roadmapsData.devops.description}
                    comingsoon={true}
                />
            </div>
        </div>
    )
}

export default Allcards
