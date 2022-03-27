import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import SideMenu from './SideMenu';
import Questions from './Questions';


class App extends React.Component {

    render () {
        return (
        
            <main>
                <div class="container py-4">
                    <Header></Header>

                    <div className='row'>
                        <div className='col-12'>
                            <SideMenu />
                        </div>
                        <div className='col-12'>
                            <Routes>
                                <Route path="" element={<Home />} />
                                <Route path="qustions/domain/:domainId"  element={<Questions /> } />
                            </Routes>
                        </div>
                    </div>
                    
                </div>
            </main>
                
            
        );
    }
}

export default App;