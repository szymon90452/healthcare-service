import * as React from 'react';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Title from '../Title/Title';
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
    return(
        <div className={styles.headerSection}>
            <Title>HealthCare Services</Title>
            <Menu />
            {width >= breakpoint && 
                <Button>Attend to programme</Button>
            }
        </div>
    );
}

export default Header;