import React from 'react'
import Allcards from '../../containers/Allcards/Allcards';
import { Layout } from '../../utils/Layout/Layout';
interface Props {
    
}

export const Home = (props: Props) => {
    return (
        <Layout>
            <Allcards/>
        </Layout>
    )
}
