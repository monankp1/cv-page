import React from 'react';
import styles from './Education.module.css'

const Education = () => {
    return (
        <div className={styles.section}>
            <h3>EDUCATION</h3>
            <hr />
            <div className={styles.heading}>
                <p><b>TopCV University</b> </p>
                <p><b>2014 - 2018</b></p>
            </div>

            <p>Major: Corporate Administration</p>
            <p>GPA: 3.6/4</p>
        </div>
    )
}

export default Education