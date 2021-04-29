import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, Modal, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { getSuggestionRef, getSuggestionsSnapshot } from '../../utils/firebaseUtils'

interface Props {
    id:string,
    title: string,
    descriptionSmall: string,
    descriptionLarge: string,
    roadmap:string | null
}

interface SuggestChangesInterface {
    id: string,
    title: string,
    description: string,
    upVotes: number,
    downVotes: number,
    createdAt: string,
    updatedAt: string
}

export const SuggestChanges = (props: Props) => {
    const date = new Date();
    const [loading, setLoading] = useState(false)

    const [postData, setPostData] = useState<SuggestChangesInterface>(
        {
            id:"0",
            title:"",
            description:"",
            upVotes:0,
            downVotes:0,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString(),
        })
    const [showModal, setShowModal] = useState(false)
    const [suggestChanges, setSuggestChanges] = useState<SuggestChangesInterface[]>([])

    
    const handleCloseModal = () => setShowModal(false)

    const handleShowModal = () => setShowModal(true)

    const onValChange = (key:string,value:string) => {
        setPostData(oldData=>({...oldData,[key]:value}))
    }

    const Vote = (val : 'upVote' | 'downVote',doc:SuggestChangesInterface) =>{
        if(val==='upVote') getSuggestionRef(props.id,doc.id).set({...doc,upVotes:doc.upVotes +1})
        if(val==='downVote') getSuggestionRef(props.id,doc.id).set({...doc,downVotes:doc.downVotes +1})
    }
    const handleSavePost = async () => {
        setLoading(true)
        getSuggestionsSnapshot(props.id).add({...postData}).then((data)=>{console.log({data});setLoading(false);}).catch(error=>{console.log({error});setLoading(false);})
        
    }


    useEffect(() => {
        const getAllPosts = () =>{
        
            const snapshotRef = getSuggestionsSnapshot(props.id);
            return snapshotRef.orderBy('upVotes','desc').onSnapshot(snapshot=>{
                        setLoading(true)
                        let _posts: SuggestChangesInterface[] = [];
                        snapshot.forEach(doc=>{
                            const id = doc.id;
                            const {title,description,upVotes,downVotes,createdAt,updatedAt} = doc.data();
                            _posts.push({title,description,upVotes,downVotes,id,createdAt,updatedAt})
                        })
                        setSuggestChanges(_posts)
                        setLoading(false)
                    },(error)=>{
                        setLoading(false)
                    })
    
        }
        const unsubscribeFromSuggestChanges = getAllPosts()

        return () => {
            unsubscribeFromSuggestChanges()
        }
    },[props.id])

    return (
        <div>
            <Helmet>
                <title>Suggest Changes - {props.title} Roadmap</title>
                <meta
                    name="description"
                    content={`${props.descriptionSmall} ${props.descriptionLarge}`}
                />
                <meta property="og:title" content={"Suggest Changes - "+props.title + " Roadmap"}/>
                <meta property="og:description" content={`Suggest Changes - ${props.descriptionSmall}`}/>
                <meta property="og:image" content={"https://careerado.com/"+props.roadmap}/>
                <meta property="og:url" content={`https://careerado.com/roadmap/${props.id}/suggestchanges`}/>
                <meta property="twitter:title" content={"Suggest Changes - "+props.title + " Roadmap"}/>
                <meta property="twitter:description" content={`Suggest Changes - ${props.descriptionSmall}`}/>
                <meta property="twitter:image" content={"https://careerado.com/"+props.roadmap}/>
            </Helmet>
            <section className="mt-4 text-center">
                <Button variant="secondary" className="w-50" onClick={handleShowModal}>Create suggestion</Button>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header>
                        <Modal.Title className="mr-auto ml-auto">Create new suggestion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <FormControl as="textarea" placeholder="Title" value={postData.title} onChange={e=>onValChange('title',e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <FormControl as="textarea" rows={4} placeholder="Description" value={postData.description} onChange={e=>onValChange('description',e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleCloseModal}>Close</Button>
                        <Button onClick={handleSavePost}>
                            {loading?
                                <>
                                    <Spinner 
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"/>
                                    Saving...
                                </>:
                                "Save" 
                            }
                        </Button>
                    </Modal.Footer>
                </Modal>
                {
                    
                    suggestChanges.map(data=>{
                        return(
                            <div key={data.id} className="border m-2">
                                <div>{data.title}</div>
                                <div>{data.description}</div>
                                <div>
                                    <span className="mr-2 btn btn-primary" onClick={e=>Vote('upVote',data)}>{data.upVotes} upvote</span>
                                    <span className="btn btn-danger" onClick={e=>Vote('downVote',data)}>{data.downVotes} downvote</span>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
