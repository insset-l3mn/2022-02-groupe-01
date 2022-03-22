import React from 'react';

import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';


class Home extends React.Component {

    render () {
        return (
            <main>
                <div class="container py-4">
                    <HomeHeader></HomeHeader>
                    <HomeBanner></HomeBanner>
                </div>
            </main>
        );
    }
}

export default Home;