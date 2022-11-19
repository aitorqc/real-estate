import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

import styles from './Buttons.module.scss';

export default function ArrowButton({ text, path }) {
    return (
        <div className={styles.btn}>
            <Link to={`${path}`}>{text}</Link>
            <BsArrowRight/>
        </div>
    )
}

ArrowButton.defaultProps = {
    text: "Test btn",
    path: "/",
}
