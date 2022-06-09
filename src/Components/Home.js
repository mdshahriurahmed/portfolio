import React from 'react';
import About from './About';
import Skills from './Header/Skills';
import Main from './Main';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div>

            <Main></Main>
            <About></About>
            <Skills></Skills>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;