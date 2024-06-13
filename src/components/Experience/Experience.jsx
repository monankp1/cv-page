import React from 'react';
import styles from './Experience.module.css'

const Experience = () => {
    return (
        <div className={styles.section}>
            <h3>Work Experience</h3>
            <hr />

            <div className={styles.heading}>
                <p><b>TopCV JSC</b> </p>
                <p><b>2014 - Present</b></p>
            </div>
            <p>Digital Marketing</p>


            <p>- Write and upload product advertising post via Facebook, Forum...</p>
            <p>- Introduce, consult products and answer customers' queries via phone and email.</p>

            <br />
            <div className={styles.heading}>
                <p><b>TopCV SHOP</b> </p>
                <p><b>2014 - 2017</b></p>
            </div>
            <p>Part-time Sales Staff</p>


            <p>- Sell goods for Foreigners and Vietnamese at the Shop</p>
            <p>- Advertise products on media publications such as: banner, posters, leaflets...</p>
            <p>- Make reports of sales every day.</p>
        </div>
    )
}

export default Experience