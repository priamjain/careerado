import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './CareerCard.module.css'
interface Props {
    id:string,
    title: string,
    description: string,
    comingsoon:boolean
    card: '1-1' | '1-3'
}

export const CareerCard = (props: Props) => {
    return (
            <div className={`col-12 ${props.card==='1-3' && 'col-md-6 col-lg-4 p-3'} p-2 align-items-stretch`}>
                <Link to={`${!props.comingsoon?("/roadmap/"+props.id):'#'}`} className="no_style_link">
                    <Card className={styles.main}>
                        <Card.Body>
                            <Card.Title>
                                {props.title}{props.comingsoon && <div className={"badge bg-secondary text-light ml-2 "+styles.badge}>
                                    Coming Soon
                                </div>}
                            </Card.Title>
                            <Card.Text>
                            {props.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
             
    )
}
