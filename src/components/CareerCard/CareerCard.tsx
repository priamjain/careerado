import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './CareerCard.module.css'
interface Props {
    title: string,
    description: string,
    comingsoon:boolean
}

export const CareerCard = (props: Props) => {
    return (
            <div className="col-12 col-md-6 col-xl-4 p-3">
                <Link to={`${!props.comingsoon?("/roadmap/"+props.title):'#'}`} className="no_style_link">
                    <Card className={styles.main}>
                        <Card.Body>
                            {props.comingsoon && <div className={"badge bg-secondary text-light mb-2 "+styles.badge}>
                                Coming Soon
                            </div>}
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                            {props.description}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
             
    )
}
