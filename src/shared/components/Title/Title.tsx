import * as React from 'react';
import styles from "./Title.module.scss";

const Title:React.FC = () => {
    return(
        <h4 className={styles.title}>HealthCare Services</h4>
    );
}

export default Title;