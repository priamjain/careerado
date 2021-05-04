import { LayoutWithSidebar } from '../../utils/Layout/Layout';
import {Helmet} from 'react-helmet'
import Logo from '../../assets/logo.png'
import SVG1 from '../../assets/illustrations/career_development.svg'
import styles from './Home.module.css'

interface Props {

}

export const Home = (props: Props) => {

    return (
        <LayoutWithSidebar>
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
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                    <h1>Careerado</h1>
                    <p className="mt-3 text-center">
                        Explore career options, roadmap for your passion and grow in your career.
                    </p>
                </div>
                <div className="col-6">
                    <img src={SVG1} alt="Explore every career option" className={styles.header_image}/>
                </div>
            </div>
            
            
        </LayoutWithSidebar>
    )
}
