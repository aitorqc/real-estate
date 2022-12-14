import React from 'react'

import ArrowButton from '../../components/buttons/Buttons'

import styles from './Section2.module.scss'
import building2 from '../../assets/building2.jpg'

export default function Section2() {
    return (
        <section className={styles.section_2}>
            {/* Imagen */}
            <div className={styles.section_2_image_container}>
                <img src={building2} alt="building2" />
            </div>

            {/* slogan */}
            <div className={styles.section_2_slogan}>
                <h1>
                    Whether You're Buying, Selling Or Renting, We Can Help You Move Forward
                </h1>
            </div>

            {/* seleccions */}
            <div className={styles.selection}>
                <div className={styles.buy}>
                    <h3>Buy a Home</h3>
                    <p>
                        Find your place with and immersive photo experience and the most listings, including things you wont't find anywhere else.
                    </p>
                    <ArrowButton text={"Search Houses"} path="buy" />
                </div>

                <div className={styles.rent}>
                    <h3>Rent a Home</h3>
                    <p>
                        We're creating a seasmless online expirience - from shopping on the largest rental network, to applying, to paying rent.
                    </p>
                    <ArrowButton text={"See Your Options"} path="rent" />
                </div>

                <div className={styles.sell}>
                    <h3>Sell a home</h3>
                    <p>
                        Wether you get a cash offer throught Real Offers or choose to sell traditionally, we can help you navigate a succesful sale.
                    </p>
                    <ArrowButton text={"Use Filters"} path="search" />
                </div>
            </div>
        </section>
    )
}
