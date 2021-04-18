import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../../utils/Layout/Layout'


interface Props {
    id:string,
    title: string,
    descriptionSmall: string,
    descriptionLarge: string,
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
                <h1 className="text-center h2 mt-3">
                    {props.title} Roadmap
                </h1>
                <article className="text-dark text-center w-75 ml-auto mr-auto">
                    <h2 className="h5 mb-3">{props.descriptionSmall}</h2>
                    <p>{props.descriptionLarge}</p>
                </article>
                <div className="mt-5">
                    <img src={props.roadmap} alt={`${props.title} Roadmap`} width="100%"/>
                </div>
            </Layout>
    )
}
