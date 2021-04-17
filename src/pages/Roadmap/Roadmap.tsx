import React from 'react'
import { Layout } from '../../utils/Layout/Layout'


interface Props {
    title: string,
    description: string,
    roadmap:string
}

export const Roadmap = (props: Props) => {
    return (
            <Layout>
                <div className="text-center h2 mt-3">
                    {props.title} Roadmap
                </div>
                <div className="text-dark text-center">
                    <p>A comprehensive step by step roadmap for {props.title}.</p> 
                    <p>{props.description}</p>
                </div>
                <div className="mt-5">
                    <img src={props.roadmap} alt="React JS Roadmap" width="100%"/>
                </div>
            </Layout>
    )
}
