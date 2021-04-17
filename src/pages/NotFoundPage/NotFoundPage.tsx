import React from 'react'
import { Layout } from '../../utils/Layout/Layout';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'
interface Props {
    
}

export const NotFoundPage = (props: Props) => {
    return (
        <Layout>
            <Helmet>
                <title>404</title>
                <meta
                    name="description"
                    content="Page not found on Careerado.com"
                />
            </Helmet>
                <h2 className="text-center display-4 mt-5">
                404 Not Found
                </h2>
                <p className="text-center text-muted">Page you are looking for is not there</p>
                <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-secondary">Home</Link>
                </div>
        </Layout>
    )
}
