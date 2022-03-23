import * as React from 'react';
import Header from '../../shared/components/Header/Header';
import styles from "./Home.module.scss";

const Home: React.FC = () => {
    return(
        <div>
            <Header />
            <div>Page Content</div>
            <div>Footer</div>
        </div>
    )
}

export default Home;