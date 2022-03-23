import * as React from 'react';
import styles from "./MenuItem.module.scss";

const MenuItem: React.FC = (props) => {
    return(
        <div className={styles.menuItem}>{props.children}</div>
    )
}

export default MenuItem;