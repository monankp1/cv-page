import React from 'react';
import styles from './Summary.module.css';
import ContactInfo from '../ContactInfo/ContactInfo';

const Summary = () => {
    return (
        <div className={styles.summaryContainer}>
            <div className={styles.summaryContent}>
                <h3>Objective</h3>
                <p className={styles.summary}>Take advantages of sales skills & experience and understanding of market to become a professional Sales Staff and bring a lot of value to Customers. From that, I will contribute to development of TOPCV Company</p>

            </div>
            <div>
                <img
                    src='https://images.deccanherald.com/deccanherald%2F2024-03%2Fb90c47e5-cec9-4f7b-b7c4-14ac433ef089%2FMS_Dhoni_s_new_look_ahead_of_IPL__11_.jpg?rect=0%2C0%2C540%2C720'
                />

            </div>
        </div>
    )
}

export default Summary