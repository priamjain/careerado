import React from 'react'
import cover from '../../assets/cover.png'
import { LayoutWithSidebar } from '../../components/Layout/Layout'
interface Props {
    
}

export const AboutUs = (props: Props) => {
    return (
        <LayoutWithSidebar>
            <img src={cover} alt="Cover" className="w-75 d-block ml-auto mr-auto mt-2 mb-5"/>
            <section className="mt-5 mb-4">
                <h1>
                    About Us
                </h1>
                <p>
                    People, mostly teenagers and sometimes professionals too, find it difficult to decide/change their occupation. Most common reason for their difficulty  is that they don’t know what different career options they have?
                    In addition to getting confused about getting started, they sometimes have no clear career goals and clear directions.
                </p>

                <p>
                    Our main motive is to help you explore and analyze different career options and not restrict yourself only to skills that you’ve heard about. We want you to Identify fields you want to pursue to develop long-term objectives, play with them and look out for what works the best for you.
                </p>

                <p>
                    Gain insight on the main duties of each profession, the work environment, training requirements, advancement prospects and more. Analyse the information to select appropriate career opportunities when formalizing your Career Roadmap.
                </p>
            </section>
            <hr/>
            <section className="mt-4 mb-5">
                <h3>
                    Our Mission
                </h3>
                <p>
                Explore different career paths, discover your passion and get a realistic roadmap on what it's going to take to achieve those career aspirations.
                </p>
            </section>
            
            
        </LayoutWithSidebar>
    )
}
