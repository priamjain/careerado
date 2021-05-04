import React, { ReactElement } from 'react'
import { CareerCard } from '../../components/CareerCard/CareerCard'
import styles from './Allcards.module.css'


interface Props{
    roadmaps: {
        id: string,
        title: string,
        descriptionSmall: string,
        descriptionLarge: string,
        comingsoon: boolean,
        image: string | null,       
    }[],
    card : '1-1' | '1-3'
}
function Allcards(props:Props): ReactElement {
    return (
        <div className={"mt-4 pt-3 pb-4 "+ styles.main}>
            <h2 className="h2 text-dark">Find a roadmap for your passion</h2>
            <div className="row">
                {
                    props.roadmaps.map(roadmap=>{
                        return(
                            <CareerCard
                                key={roadmap.id}
                                id={roadmap.id}
                                title={roadmap.title}
                                description={roadmap.descriptionSmall}
                                comingsoon={roadmap.comingsoon}
                                card={props.card}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Allcards
