import React from 'react'
import Footer from './sections/Footer'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'

export default function Home() {
    return (
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </main>
    )
}
