import React from 'react'
import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper'

import './Carousel.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'

export default function Carousel({ children, slides }) {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={slides}
            pagination={{ clickable: true }}>
            {children}
            <div style={{ marginTop: "70px" }}></div>
        </Swiper>
    )
}

Carousel.defaultProps = {
    slides: "auto"
}
