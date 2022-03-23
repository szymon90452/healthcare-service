import * as React from 'react';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Title from '../Title/Title';
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return(
        <div className={styles.headerSection}>
            <Title>HealthCare Services</Title>
            <Menu />
            <Button>Attend to programme</Button>
        </div>
    );
}

export default Header;