import React, {useState,useEffect} from 'react'
import Allcards from '../../containers/Allcards/Allcards';
import data from '../../actions/RoadmapData.service';
import { LayoutWithSidebar } from '../../utils/Layout/Layout';

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


export const ExploreRoadmaps = (props: Props) => {

    const [roadmaps, setRoadmaps] = useState<Roadmap[] | []>([])

    useEffect(() => {
        let allRoadmaps : Roadmap[]  = []
        data.forEach(category=>{
            allRoadmaps = allRoadmaps.concat(category.roadmaps)
        })
        setRoadmaps(allRoadmaps)
    }, [])

    return (
        <LayoutWithSidebar>
            <Allcards roadmaps={roadmaps} card='1-3'/>
        </LayoutWithSidebar>
    )
}
