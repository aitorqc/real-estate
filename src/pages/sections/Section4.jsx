import React from 'react'

import building4 from '../../assets/building4.jpg'

import styles from './Section4.module.scss'

export default function Section4() {
    return (
        <section className={styles.section_4}>
            {/* titulo */}
            <div className={styles.section_4_title}>
                <h1>Help People To Gettin Their Dream House For More Than 17 Years</h1>
            </div>

            {/* contenido */}
            <div className={styles.section_4_content}>
                <div className={styles.image_container}>
                    <img src={building4} alt="/" />
                </div>
                <div className={styles.info}>
                    <p>
                        Search and find your dream house at affordable prices, but with the bet quality. Only available in Real.
                    </p>
                    <div className={styles.rows}>
                        <div className={styles.row_1}>
                            <div className={styles.fact}>
                                <h2>10.234</h2>
                                <h3>Completed Houses</h3>
                            </div>
                            <div className={styles.fact}>
                                <h2>11.234</h2>
                                <h3>Rented House</h3>
                            </div>
                        </div>
                        <div className={styles.row_2}>
                            <div className={styles.fact}>
                                <h2>10.234</h2>
                                <h3>Completed Houses</h3>
                            </div>
                            <div className={styles.fact}>
                                <h2>11.234</h2>
                                <h3>Rented House</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
