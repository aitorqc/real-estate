import React from 'react'

import ArrowButton from '../../components/buttons/Buttons'

import building4 from '../../assets/building4.jpg';
import building5 from '../../assets/building5.jpg';

import styles from './Section5.module.scss'

export default function Section5() {
  return (
    <section className={styles.section_5}>
        <div className={styles.action}>
            <h1>Your Best Partner To find New House</h1>
            <ArrowButton text="Get Started" path="search"/>
        </div>
        <div className={styles.image_container_1}>
            <img src={building4} alt="/" />
        </div>
        <div className={styles.image_container_1}>
            <img src={building5} alt="/" />
        </div>
    </section>
  )
}
