import React from 'react';


class HomeBanner extends React.Component {

    render() {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Ekonomika</h1>
                    <p className="col-md-8 fs-4">bienvenue sur la plateforme qui vous permet d'évaluer vos connaissances dans le domaine économique.</p>
                    <button className="btn btn-primary btn-lg" type="button">Commencer</button>
                </div>
            </div>
        );
    }



}

export default HomeBanner;