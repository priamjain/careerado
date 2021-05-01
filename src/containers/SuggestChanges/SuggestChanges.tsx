import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form, FormControl, Modal, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router'
import { getSuggestionRef, getSuggestionsSnapshot, voteSuggestion, getVoteSuggestions} from '../../actions/firebaseUtils'
import { AuthContext } from '../../context/AuthContext'
import firebase from '../../firebase'

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
    createdAt: firebase.firestore.Timestamp,
    updatedAt: firebase.firestore.Timestamp,
    createdByUID: string | null,
    createdByPhotoUrl: string | null,
    createdByDisplayName: string | null

}

interface LocalSuggestChangesInterface extends SuggestChangesInterface {
    voted : 'upVote' | 'downVote' | null
}

export const SuggestChanges = (props: Props) => {
    const [mode, setMode] = useState("new")
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const user = useContext(AuthContext);
    const [postData, setPostData] = useState<SuggestChangesInterface>(
        {
            id:"0",
            title:"",
            description:"",
            upVotes:0,
            downVotes:0,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
            createdByUID: user?user.uid:null,
            createdByDisplayName: user?user.displayName:null,
            createdByPhotoUrl:user?user.photoURL:null
        })
    const [showModal, setShowModal] = useState(false)
    const [suggestChanges, setSuggestChanges] = useState<LocalSuggestChangesInterface[]>([])

    
    const handleCloseModal = () => {
        setMode('new');
        setShowModal(false);
        setPostData(p=>({...p,title:"",description:""}))
    }

    const handleShowModal = () => setShowModal(true)

    const onValChange = (key:string,value:string) => {
        setPostData(oldData=>({...oldData,[key]:value}))
    }

    const Vote = (val : 'upVote' | 'downVote',doc:LocalSuggestChangesInterface) =>{
        const voteRef = voteSuggestion(props.id,doc.id)
        const suggestionRef = getSuggestionRef(props.id,doc.id);
        
        voteRef?.get().then(data=>{
            const voted : 'upVote' | 'downVote' = data?.exists?data.data()?.voted:null;
            const toVote : 'upVotes' | 'downVotes' = val==="upVote"?'upVotes':'downVotes';
            if(voted){
                const removeVote : 'upVotes' | 'downVotes' = voted==="upVote"?'upVotes':'downVotes';
                if(removeVote===toVote){
                    console.log({removeVote,toVote})
                    voteRef.delete().then(()=>{
                        suggestionRef.update({
                            [removeVote]:doc[removeVote]-1,
                            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                        });
                    })
                }
                else{
                    console.log({removeVote,toVote})
                   voteRef.update({
                       voted:val
                   }).then(()=>{
                       suggestionRef.update({
                           [removeVote]:doc[removeVote]-1,
                           [toVote]:doc[toVote]+1,
                           updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                       })
                   })
                }
                
            }
            else{
                console.log({toVote})

                voteRef.set({
                    voted:val
                }).then(()=>{
                    suggestionRef.update({
                        [toVote]:doc[toVote]+1,
                        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    .catch(error=>console.log({error}))
                })

            }   
        })
        }        

    const handleSavePost = (docId:string|null) => {
        setLoading(true)
        if(postData.title!==""){
            if(mode==='new')
            getSuggestionsSnapshot(props.id).add({...postData}).then((data)=>{console.log({data});setLoading(false);}).catch(error=>{console.log({error});setLoading(false);})
            else if(docId && mode !=='new'){
                const suggestionRef = getSuggestionRef(props.id,docId);
                suggestionRef.update({title:postData.title,description:postData.description,updatedAt:firebase.firestore.FieldValue.serverTimestamp()})
            }
            setPostData(p=>({...p,title:"",description:""}))
            setShowModal(false);
        }
        else{
            alert('Title is required')
        }
        setLoading(false)
        
    }

    const deletePost = (docId:string) =>{
        const val = prompt('Write "y" if you want to delete this post')
        console.log(val)
        if(val==='y'){
            const suggestionRef = getSuggestionRef(props.id,docId);
            suggestionRef.delete().then((res=>{
                console.log('deleted')
            }))
            .catch((error)=>console.log(error))
        }
        
    }

    const handleUpdatePost=(doc:LocalSuggestChangesInterface)=>{
        setMode(doc.id);
        setPostData(d=>({...d,title:doc.title,description:doc.description}));
        setShowModal(true)
    }

    useEffect(() => {
        const getAllPosts = () =>{
            
            setLoading(true);
            const snapshotRef = getSuggestionsSnapshot(props.id);
           
            return snapshotRef.orderBy('upVotes','desc').onSnapshot(async allSuggestions=>{
                let _posts: LocalSuggestChangesInterface[] = [];
                let _allVotes:any = {};
                const userVotesSnapshotRef = getVoteSuggestions(props.id);
                await userVotesSnapshotRef?.get().then(snapshot=>{
                        snapshot.forEach(doc=>{
                            const id = doc.id;
                            _allVotes[id]=doc.data();
                        })
                        
                }).catch(error=>console.log(error))

                console.log(_allVotes)
                allSuggestions.forEach(doc=>{
                            const id = doc.id;
                            const {title,description,upVotes,downVotes,createdAt,updatedAt,createdByDisplayName,createdByPhotoUrl,createdByUID} = doc.data();
                            _posts.push({title,description,upVotes,downVotes,id,createdAt,updatedAt,createdByDisplayName,createdByPhotoUrl,createdByUID,voted:_allVotes[id] && _allVotes[id].voted })
                        })
                        console.log('should Update')
                        setLoading(false)
                        setSuggestChanges(_posts)
                        

                    },(error)=>{
                        console.log({error})
                        setLoading(false)
                    })
            
                }
        
        
        const unsubscribeFromSuggestChanges = getAllPosts()
        setPostData(p=>({...p,createdByUID: user?user.uid:null,
            createdByDisplayName: user?user.displayName:null,
            createdByPhotoUrl:user?user.photoURL:null}))

        return () => {
            unsubscribeFromSuggestChanges();
        }
    },[props.id,user])
    
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
                <Button variant="secondary" className="w-50" onClick={()=>!user?history.push('/login'):handleShowModal()}>Create suggestion</Button>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header>
                        <Modal.Title className="mr-auto ml-auto">Create new suggestion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <FormControl required as="textarea" placeholder="Title" value={postData.title} onChange={e=>onValChange('title',e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <FormControl as="textarea" rows={4} placeholder="Description" value={postData.description} onChange={e=>onValChange('description',e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleCloseModal}>Close</Button>
                        <Button onClick={()=>{
                            if(mode==='new')handleSavePost(null);
                            else handleSavePost(mode)
                            }}>
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
                    suggestChanges.length===0?
                                <div className="m-5 d-flex align-items-center justify-content-center">
                                    <Spinner 
                                    as="span"
                                    animation="border"
                                    
                                    role="status"
                                    aria-hidden="true"/>
                                    <span className="ml-3 align-center">
                                        Loading
                                    </span>
                                    
                                </div>:  
                    suggestChanges.map(data=>{
                        console.log()
                        return(
                            <Card className="row d-flex flex-row text-left mt-4 mb-4 m-1" key={data.id}>
                                <Card.Title className="col-12 col-lg-3 row d-flex align-self-start justify-content-around order-1 order-lg-0 pt-4">
                                            <div className="col-5 col-lg-12 row d-flex text-center mb-3">
                                                <div  className="col-6 text-lg-right">
                                                    {data.upVotes}
                                                </div>
                                                <i style={{cursor:'pointer'}} 
                                                    
                                                    className={`col-6 bi bi-arrow-up-${data.voted==='upVote'?"square-fill":"square"}`}
                                                    onClick={e=>Vote('upVote',data)}>
                                                </i>
                                            </div>
                                            <div className="col-6 col-lg-12 row d-flex text-center mb-3">
                                                <span  className="col-6 order-1 order-lg-0 text-lg-right" >
                                                    {data.downVotes}
                                                </span>
                                                <i style={{cursor:'pointer'}} 
                                                    
                                                    className={`col-6 order-0 order-lg-1 bi bi-arrow-down-${data.voted==='downVote'?"square-fill":"square"}`}
                                                    onClick={e=>Vote('downVote',data)}>
                                                </i>
                                            </div>
                                            {
                                                data.createdByUID===user?.uid 
                                                &&
                                                <div className="col-6 col-lg-12 row d-flex text-center" >
                                                    <i style={{cursor:'pointer'}} className="col-6 bi bi-trash-fill text-left text-lg-right" onClick={()=>deletePost(data.id)}></i>
                                                    <i style={{cursor:'pointer'}} className="col-6 bi bi-pencil-square" onClick={()=>{handleUpdatePost(data)}}></i>
                                                </div> 
                                            }
                                            
                                            
                                           
                                </Card.Title>
                                <Card.Body className="col-12 col-lg-9 order-0 order-lg-1">
                                    <Card.Title className="text-uppercase fs-1">{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.description}
                                    </Card.Text>
                                    <footer className="blockquote-footer text-right">
                                        {data.createdByDisplayName} at {data.createdAt.toDate().toDateString()}
                                    </footer>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </section>
        </div>
    )
}
