
import ReactRoadmap from '../assets/roadmaps/reactjs.png'
import BackendRoadmap from '../assets/roadmaps/backend.png'
import DataScienceRoadmap from '../assets/roadmaps/datascience.png'
import GuitarRoadmap from '../assets/roadmaps/guitar.png'


export const RoadmapData = 
    [
        {
            categoryName:"Computer Science",
            id:"computerscience",
            roadmaps:[
                {
                    id:"react",
                    title:"React",
                    descriptionSmall:"A comprehensive roadmap for starting your career as a React developer in 2021.",
                    descriptionLarge:"Make websites, mobile apps, desktop apps using React library - maintained by facebook and a community of individual developers.",
                    comingsoon:false,
                    image:ReactRoadmap
                },
                {
                    id:"backend",
                    title:"Backend Development",
                    descriptionSmall:"A comprehensive, step by step roadmap for starting your career as a Backend developer in 2021.",
                    descriptionLarge:"Implement 'behind-the-scenes' functionality of web applications. Communicate with database, use REST / graphql to make API for communication with frontend, etc.",
                    comingsoon:false,
                    image:BackendRoadmap
                },
                {
                    id:"datascience",
                    title:"Data Science",
                    descriptionSmall:"A comprehensive, step by step roadmap for starting your career in Data Science / Machine Learning  in 2021.",
                    descriptionLarge:"Deal with tremendous volumes of data using modern softwares, tools and techniques to discover unseen patterns, derive meaningful information, and make business decisions. Data science uses complex machine learning algorithms to build predictive models.",
                    comingsoon:false,
                    image:DataScienceRoadmap
                }
            ]
        },
        {
            categoryName:"Music",
            id:"music",
            roadmaps:[
                {
                    id:"guitar",
                    title:"Guitar",
                    descriptionSmall:"A comprehensive, step by step roadmap for getting started with Guitar in 2021.",
                    descriptionLarge:"Get started and learn guitar. Increase your creativity, coordination and confidence by learning guitar. Practice and having fun is the most important part while learning guitar.",
                    comingsoon:false,
                    image:GuitarRoadmap
                }
            ]
        },
        {
            categoryName:"Coming Soon",
            id:"comingsoon",
            roadmaps:[
                {
                    id:"devops",
                    title:"Devops",
                    descriptionSmall:"A comprehensive, step by step roadmap for starting your career in Devops in 2021.",
                    descriptionLarge:"DevOps is the combination of practices that joins Development (Dev) and Operations (Ops). It plans to cut the software development life cycle and increases an organization's ability to deliver applications and services at high velocity.",
                    comingsoon:true,
                    image:null
                },
            ]
        }
    ]





    
    