import React from 'react'
import { SwiperSlide } from 'swiper/react';

import Carousel from '../../components/carousel/Carousel';
import Card from '../../components/card/Card';
import ArrowButton from '../../components/buttons/Buttons';

import styles from './Section3.module.scss';

export default function Section3() {
    return (
        <section className={styles.section_3}>
            <div className={styles.section_3_title}>
                <h1>Best Houses</h1>
                <ArrowButton text="See More" path="buy" />
            </div>

            {/* carousel de cartas */}
            <div className={styles.cards}>
                <Carousel>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Carousel>
            </div>
        </section>
    )
}
