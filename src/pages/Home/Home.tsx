import {Helmet} from 'react-helmet'
import cover from '../../assets/cover.png'
import SVG1 from '../../assets/illustrations/career_development.svg'
import styles from './Home.module.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LayoutWithSidebar } from '../../components/Layout/Layout';
import data from '../../utils/MainData.json'
// import Allcards from '../../containers/Allcards/Allcards';
// import { RoadmapData } from '../../actions/RoadmapData.service';
interface Props {

}

export const Home = (props: Props) => {


    return (
        <LayoutWithSidebar>
            <Helmet>
                <title>{data.title}</title>
                <meta
                    name="description"
                    content={data.description1}
                />
                <meta property="og:title" content={data.title}/>
                <meta property="og:description" content={data.description1 +" "+ data.description2}/>
                <meta property="og:image" content={"https://careerado.com/"+cover}/>
                <meta property="og:url" content="https://careerado.com"/>
                <meta property="twitter:title" content={data.title}/>
                <meta property="twitter:description" content={data.description1}/>
                <meta property="twitter:image" content={"https://careerado.com/"+cover}/>
            </Helmet>
           
            <div className="row mt-3 mb-4">
                <div className="col-7 d-flex justify-content-center align-items-center flex-column">
                    <h1>Careerado</h1>
                    <p className="mt-3 text-center">
                        {data.description1}
                    </p>
                    <div>
                        <Link to="/roadmap">
                            <Button variant="info">Explore Roadmaps</Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="col-5">
                    <img src={SVG1} alt="Explore every career option" className={styles.header_image}/>
                </div>
            </div>           
        </LayoutWithSidebar>
    )
}
