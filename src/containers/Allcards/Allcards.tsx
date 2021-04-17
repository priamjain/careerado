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
                    id={roadmapsData.react.id}
                    title={roadmapsData.react.title}
                    description={roadmapsData.react.description}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.backend.id}
                    title={roadmapsData.backend.title}
                    description={roadmapsData.backend.description}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.devops.id}
                    title={roadmapsData.devops.title}
                    description={roadmapsData.devops.description}
                    comingsoon={true}
                />
            </div>
        </div>
    )
}

export default Allcards
