import React from 'react'
import Allcards from '../../containers/Allcards/Allcards';
import { Layout } from '../../utils/Layout/Layout';
import {Helmet} from 'react-helmet'
import Logo from '../../assets/logo.png'
interface Props {
    
}

export const Home = (props: Props) => {
    return (
        <Layout>
            <Helmet>
                <title>Careerado, the roadmap library</title>
                <meta
                    name="description"
                    content="Find a roadmap for your passion and grow in your career."
                />
                <meta property="og:title" content="Careerado, the roadmap library"/>
                <meta property="og:description" content="Find a roadmap for your passion and grow in your career."/>
                <meta property="og:image" content={"https://careerado.com/"+Logo}/>
                <meta property="og:url" content="https://careerado.com"/>
                <meta property="twitter:title" content="Careerado, the roadmap library"/>
                <meta property="twitter:description" content="Find a roadmap for your passion and grow in your career."/>
                <meta property="twitter:image" content={"https://careerado.com/"+Logo}/>
            </Helmet>
            <Allcards/>
        </Layout>
    )
}
