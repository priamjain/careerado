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
                    id={roadmapsData.roadmaps.react.id}
                    title={roadmapsData.roadmaps.react.title}
                    description={roadmapsData.roadmaps.react.descriptionSmall}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.roadmaps.backend.id}
                    title={roadmapsData.roadmaps.backend.title}
                    description={roadmapsData.roadmaps.backend.descriptionSmall}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.roadmaps.datascience.id}
                    title={roadmapsData.roadmaps.datascience.title}
                    description={roadmapsData.roadmaps.datascience.descriptionSmall}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.roadmaps.guitar.id}
                    title={roadmapsData.roadmaps.guitar.title}
                    description={roadmapsData.roadmaps.guitar.descriptionSmall}
                    comingsoon={false}
                />
                <CareerCard
                    id={roadmapsData.roadmaps.devops.id}
                    title={roadmapsData.roadmaps.devops.title}
                    description={roadmapsData.roadmaps.devops.descriptionSmall}
                    comingsoon={true}
                />
            </div>
        </div>
    )
}

export default Allcards
