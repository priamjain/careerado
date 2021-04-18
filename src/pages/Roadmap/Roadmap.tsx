import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../../utils/Layout/Layout'


interface Props {
    id:string,
    title: string,
    description: string,
    roadmap:string
}

export const Roadmap = (props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      })
    return (
            <Layout>
                <Helmet>
                    <title>{props.title} Roadmap</title>
                    <meta
                        name="description"
                        content={props.description}
                    />
                    <meta property="og:title" content={props.title + " Roadmap"}/>
                    <meta property="og:description" content={props.description}/>
                    <meta property="og:image" content={"https://careerado.com/"+props.roadmap}/>
                    <meta property="og:url" content={`https://careerado.com/roadmap/${props.id}`}/>
                    <meta property="twitter:title" content={props.title + " Roadmap"}/>
                    <meta property="twitter:description" content={props.description}/>
                    <meta property="twitter:image" content={"https://careerado.com/"+props.roadmap}/>
                </Helmet>
                <h2 className="text-center h2 mt-3">
                    {props.title} Roadmap
                </h2>
                <article className="text-dark text-center">
                    A comprehensive step by step roadmap for {props.title}.
                    <br/>
                    {props.description}
                </article>
                <div className="mt-5">
                    <img src={props.roadmap} alt="React JS Roadmap" width="100%"/>
                </div>
            </Layout>
    )
}
