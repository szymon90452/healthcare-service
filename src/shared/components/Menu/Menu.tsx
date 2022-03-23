import * as React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from "./Menu.module.scss";

const Menu:React.FC = () => {
    return(
        <div className={styles.menuContainer}>
            <MenuItem>Plans</MenuItem>
            <MenuItem>Membership</MenuItem>
            <MenuItem>Our Doctors</MenuItem>
            <MenuItem>Blog</MenuItem>
        </div>
    );
}

export default Menu;