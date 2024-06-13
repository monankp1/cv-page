import React from 'react'
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.section}>
            <h3>SKILLS </h3>
            <hr />

            <div className={styles.heading}>
                <p><b>Computer</b> </p>
            </div>
            <p>- Word, Excel, Power Point</p>
            <div className={styles.heading}>
                <p><b>Language</b> </p>
            </div>
            <p>- English, Japanese, Chinese</p>

        </div>
    )
}

export default Skills