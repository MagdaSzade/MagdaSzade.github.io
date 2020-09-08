import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import HeaderBar from './HederBar/HeaderBar';
import FooterBar from './FooterBar';
import About from './About/About';
import Games from './games/Games';
import Contact from './contact/Contact';
import Menu from './Menu'

import '../styles/app.css'

const App = () => {
    return (
        <Router>
            <div className="app-conteiner">
                <div className='app-content'>
                    <Menu />
                    <div className="content-main-conteiner">
                        <HeaderBar />
                        <Switch>
                            <Route path="/games"  component={Games} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/" component ={About} />
                        </Switch>
                        <FooterBar />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

//                            <Router path="/contact">
//                                <Contact />
//                            </Router>
//                            <Route path="/">
//                                <About />
//                            </Route>
//                        </Switch>