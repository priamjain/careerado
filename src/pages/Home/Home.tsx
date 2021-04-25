import React, {useState,useEffect} from 'react'
import Allcards from '../../containers/Allcards/Allcards';
import { Layout } from '../../utils/Layout/Layout';
import {Helmet} from 'react-helmet'
import Logo from '../../assets/logo.png'
import data from '../../data/RoadmapData';

interface Props {

}

interface Roadmap {
    id: string,
    title: string,
    descriptionSmall: string,
    descriptionLarge: string,
    comingsoon: boolean,
    image: string | null,
}

export const Home = (props: Props) => {
    const [roadmaps, setRoadmaps] = useState<Roadmap[] | []>([])
    useEffect(() => {
        let allRoadmaps : Roadmap[]  = []
        data.forEach(category=>{
            allRoadmaps = allRoadmaps.concat(category.roadmaps)
        })
        setRoadmaps(allRoadmaps)
    }, [])
    
    
    return (
        <Layout>
            <Helmet>
                <title>Careerado, the roadmap library</title>
                <meta
                    name="description"
                    content="Find a roadmap for your passion and grow in your career."
                />
                <meta property="og:title" content="Careerado, the roadmap library"/>
                <meta property="og:description" content="Find a roadmap for your passion and grow in your career. Step by step roadmap models to help you get started with a new skill and assiste you wherever you get stuck. "/>
                <meta property="og:image" content={"https://careerado.com/"+Logo}/>
                <meta property="og:url" content="https://careerado.com"/>
                <meta property="twitter:title" content="Careerado, the roadmap library"/>
                <meta property="twitter:description" content="Find a roadmap for your passion and grow in your career."/>
                <meta property="twitter:image" content={"https://careerado.com/"+Logo}/>
            </Helmet>
            <Allcards roadmaps={roadmaps}/>
        </Layout>
    )
}
