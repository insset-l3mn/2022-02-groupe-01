import React from 'react';

import axios from 'axios';


import ForceDirectedGraph from '../ForceDirectedGraph/ForceDirectedGraph';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            domains: false
        };

    }
    

    componentDidMount() {
        
        // Make a request for a user with a given ID
        axios.get(process.env.REACT_APP_BACKEND_ENDPOINT +'domains')
        .then((response) => {

            this.setState({domains: response.data});
          
        })
        .catch((error) => {

            
        })
        .then(function () {
        // always executed
        });
        
        
    }

    
    render () {
        
        return (
            <>

                <div className='domains'>
                    <div className='row '>

                    {this.state.domains.length > 0 &&
                    <>

                        {
                        
                        this.state.domains.map((object, i) => {
                            return (
                            
                                <div className='col-3 p-2'>
                                    <a href="#" className={'h-100 text-white card shadow-sm py-4 px-4 text-decoration-none p-1 domain-card domain-card-'+i}>
                                        <h4>{object.label}</h4>
                                        <p>{object.description}</p>
                                    </a>
                                </div>
                            
                            );
                            })
                        }
                    
                    </>
                    }

                    </div>
                </div>
                <div class="graph">
                    <ForceDirectedGraph />
                </div>
            </>
            
        );
    }
}

export default Home;