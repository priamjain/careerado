import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './CareerCard.module.css'
interface Props {

}

export const CareerCard = (props: Props) => {
    return (
            <div className="col-12 col-md-6 col-lg-4 p-3">
                <Link to="/roadmap" className="no_style_link">
                    <Card className={styles.main}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
             
    )
}
