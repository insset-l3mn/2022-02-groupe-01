import React from 'react';
import { Link } from "react-router-dom";


class SideMenu extends React.Component {

    render() {
        return (

        <div class="side-menu">
            <div class="p-3">

                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            Home
                        </a>
                    </li>
                    
                    <hr />
                    <li>
                        <a href="#" className='nav-link link-dark'>Se Déconnecter</a>
                    </li>
                </ul>
                

                
            </div>
        </div>


            );
    }
}

export default SideMenu;