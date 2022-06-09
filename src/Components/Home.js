import React from 'react';
import About from './About';
import Contact from './Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;