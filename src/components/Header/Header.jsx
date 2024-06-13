import React from 'react';
import styles from './Header.module.css'

const Header = ({ name, role }) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.nameRole}>
                <h1>{name}</h1>
                <h4>{role}</h4>
            </div>
            <div className={styles.coloredBox}>

            </div>

        </div>
    )
}

export default Header
