import React,{useEffect} from 'react'
import { Nav } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import { SuggestChanges } from '../../containers/SuggestChanges/SuggestChanges'
import { Layout } from '../../utils/Layout/Layout'
import styles from './Roadmap.module.css'

interface Props {
    id:string,
    title: string,
    descriptionSmall: string,
    descriptionLarge: string,
    roadmap:string | null
}

export const Roadmap = (props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      })
    
    
    return (
            <Layout>
                <h1 className={"text-center h2 mt-3 mb-5 border-bottom border-dark pb-3 pl-5 pr-5 mr-auto ml-auto "+styles.title}>
                    {props.title} Roadmap
                </h1>
                <section className="text-dark text-center w-75 ml-auto mr-auto">
                    <h2 className="h5 mb-3">{props.descriptionSmall}</h2>
                    <p>{props.descriptionLarge}</p>
                </section>

                <Nav variant="tabs" fill className="mt-5">
                    <Nav.Item>
                        <Nav.Link 
                            as={NavLink} 
                            to={"/roadmap/"+props.id+"/"} 
                            exact={true}
                            className="text-dark"
                            activeClassName="border border-dark"
                            >Roadmap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            as={NavLink} 
                            to={"/roadmap/"+props.id+"/resources/"} 
                            exact={true}
                            className="text-dark"
                            activeClassName="border border-dark"
                            >Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            as={NavLink} 
                            to={"/roadmap/"+props.id+"/suggestchanges/"} 
                            exact={true}
                            className="text-dark"
                            activeClassName="border border-dark"
                            >Suggest Changes</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>

                    <Route exact path={"/roadmap/"+props.id+"/"}>
                        <Helmet>
                            <title>{props.title} Roadmap</title>
                            <meta
                                name="description"
                                content={`${props.descriptionSmall} ${props.descriptionLarge}`}
                            />
                            <meta property="og:title" content={props.title + " Roadmap"}/>
                            <meta property="og:description" content={`${props.descriptionSmall}`}/>
                            <meta property="og:image" content={"https://careerado.com/"+props.roadmap}/>
                            <meta property="og:url" content={`https://careerado.com/roadmap/${props.id}`}/>
                            <meta property="twitter:title" content={props.title + " Roadmap"}/>
                            <meta property="twitter:description" content={`${props.descriptionSmall}`}/>
                            <meta property="twitter:image" content={"https://careerado.com/"+props.roadmap}/>
                        </Helmet>
                        <div className="mt-5">
                            {props.roadmap && <img src={props.roadmap} alt={`${props.title} Roadmap`} width="100%"/>}
                        </div>
                    </Route>
               
                    <Route exact path={"/roadmap/"+props.id+"/resources/"}>
                        <Helmet>
                            <title>Resources - {props.title} Roadmap</title>
                            <meta
                                name="description"
                                content={`${props.descriptionSmall} ${props.descriptionLarge}`}
                            />
                            <meta property="og:title" content={"Resources - "+props.title + " Roadmap"}/>
                            <meta property="og:description" content={`Resources - ${props.descriptionSmall}`}/>
                            <meta property="og:image" content={"https://careerado.com/"+props.roadmap}/>
                            <meta property="og:url" content={`https://careerado.com/roadmap/${props.id}/resources`}/>
                            <meta property="twitter:title" content={"Resources - "+props.title + " Roadmap"}/>
                            <meta property="twitter:description" content={`Resources - ${props.descriptionSmall}`}/>
                            <meta property="twitter:image" content={"https://careerado.com/"+props.roadmap}/>
                        </Helmet>
                        <article className="mt-5 text-center">
                            COMING SOON
                        </article>
                    </Route>

                    <Route exact path={"/roadmap/"+props.id+"/suggestchanges/"}>
                        <SuggestChanges {...props}/>
                    </Route>
                    
                </Switch>

            </Layout>
    )
}
