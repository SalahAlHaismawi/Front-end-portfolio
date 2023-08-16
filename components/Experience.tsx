import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import ReactFullpage from '@fullpage/react-fullpage';

type Props = {};

const Experience = (props: Props) => {

  return (

    <div className="h-screen overflow-hidden">
        ReactFullpage
        pluginWrapper = {pluginWrapper}

        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
        scrollHorizontally = {true}  /* Because we are using the extension */
        scrollHorizontallyKey = {'YOUR KEY HERE'}

        render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
                <div className="section">
                    <p>Section 1 (welcome to fullpage.js)</p>
                    <button onClick={() => fullpageApi.moveSectionDown()}>
                        Click me to move down
                    </button>
                </div>
                <div className="section">
                    <p>Section 2</p>
                </div>
            </ReactFullpage.Wrapper>
        );
    }}
        />
    </div>

  );
};

export default Experience;
