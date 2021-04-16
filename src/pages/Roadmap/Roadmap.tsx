import React from 'react'
import { Layout } from '../../utils/Layout/Layout'
import ReactjsRoadmap from '../../assets/roadmaps/reactjs.png'

interface Props {
    
}

export const Roadmap = (props: Props) => {

    return (
            <Layout>
                <div className="text-center h2 mt-3">
                    "Frontend" Roadmap
                </div>
                <div className="text-dark text-center">
                    A comprehensive step by step roadmap for "Frontend". 
                </div>
                <div className="mt-5">
                    <img src={ReactjsRoadmap} alt="React JS Roadmap" width="100%"/>
                </div>

            </Layout>
    )
}
