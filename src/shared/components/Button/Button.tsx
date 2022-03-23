import * as React from 'react';
import styles from "./Button.module.scss";

const Button:React.FC = (props) => {
    return(
        <button className={styles.Button}>{props.children}</button>
    );
}

export default Button;