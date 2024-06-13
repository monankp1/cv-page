import React from 'react';
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.info}>
                <div className={styles.details}>
                    <FaUser className={styles.icon} />
                    <span>Male</span>
                </div>
                <div className={styles.details}>
                    <FaPhone className={styles.icon} />
                    <span>098-344-1234</span>
                </div>
                <div className={styles.details}>
                    <FaGlobe className={styles.icon} />
                    <span>http://jeremyinfo.me</span>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.details}>
                    <FaCalendarAlt className={styles.icon} />
                    <span>May 19, 1992</span>
                </div>
                <div className={styles.details}>
                    <FaEnvelope className={styles.icon} />
                    <span>Jeremy@123.com</span>
                </div>
                <div className={styles.details}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <span>New York, America</span>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
