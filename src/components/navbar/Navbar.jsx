import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'

import useClickOutside from '../../customHooks/ClickOutside'

import styles from './Navbar.module.scss';

export default function Navbar({ BurguerColour }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let domNode = useClickOutside(()=>{
    setIsNavOpen(false);
  })

  // funcion que retorna los enlaces
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink to={`${url}`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {`${path}`}
        </NavLink>
      </li>
    )
  }

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* logo */}
        <div className={styles.brand_logo}>
          <Link to="/">Real</Link>
        </div>

        {/* icono hamburguesa */}
        <div className={styles.mobile_menu}
          style={{ color: BurguerColour }}
          onClick={() => setIsNavOpen(!isNavOpen)}>
          <FaBars />
        </div>

        <ul className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul}`} ref={domNode}>
          {/* icono cierre */}
          <div className={styles.mobile_close}
            onClick={() => setIsNavOpen(!isNavOpen)}>
            <FaTimes />
          </div>

          {/* llamada enlaces */}
          <MenuLink url="/" path="Home" />
          <MenuLink url="buy" path="Buy" />
          <MenuLink url="rent" path="Rent" />
          <MenuLink url="search" path="Search" />
          <MenuLink url="about" path="About" />
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* enlace al registro de usuario */}
        <Link to="/auth" className={styles.login_container}>
          <span style={{ color: BurguerColour }}>Login</span>
          <BsArrowRight style={{ color: BurguerColour }} />
        </Link>
      </nav>
    </div>
  )
}

Navbar.defaultProps = {
  BurguerColour: "rgb(26, 55, 58)",
}