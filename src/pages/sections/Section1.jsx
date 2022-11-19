import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'

import styles from './Section1.module.scss';
import building1 from '../../assets/building1.jpg';

export default function Section1() {
    const [price, setPrice] = useState("<100k");
    const [location, setLocation] = useState("");

    return (
        <section className={styles.section_1}>
            {/* cargar navbar */}
            <div className={styles.Navbar}>
                <Navbar BurguerColour={"whitesmoke"}/>
            </div>

            {/* imagen de fondo */}
            <div className={styles.img}></div>

            {/* contenido seccion */}
            <div className={styles.section_1_content}>
                <div className={styles.slogan}>
                    <h1>Ease Way to Find Your Dream House</h1>
                    <p>
                        Search and fin your dream house at affordable prices, but with the best quality. Only available in Real
                    </p>

                    {/* cuadro de busqueda */}
                    <div className={styles.search_container}>
                        {/* localizacion */}
                        <div className={styles.location_container}>
                            <span>Location</span>
                            <input type="text" 
                            placeholder='Enter a Location' onChange={(e)=>setLocation}/>
                        </div>
                        {/* precio */}
                        <div className={styles.price_container}>
                            <span>Price Range</span>
                            <select 
                            name="price" 
                            id="price">
                                <option value="<100k">{`<100K`}</option>
                                <option value="100k-200k">100k-200k</option>
                                <option value="200k-500k">200k-500k</option>
                                <option value=">500k">{`>500k`}</option>
                            </select>
                        </div>
                        {/* search button */}
                        <button className={styles.btn_search}>
                            <Link to="search">Search</Link>
                        </button>
                    </div>
                </div>

                <div className={styles.slogan_image}>
                    <img src={building1} alt="building1"/>
                </div>
            </div>
        </section>
    )
}
