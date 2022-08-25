import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/index.scss"


const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false)

  return (
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <Link class="navbar-link--custom" to="/">Home</Link>
        </div>
        <a onClick={() => setBurgerIsActive(!burgerIsActive)}
          role="button"
          class={`navbar-burger burger ${burgerIsActive ? 'is-active' : ''}`}
          data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" class={`navbar-menu ${burgerIsActive ? 'is-active' : ''}`}>
        <div class="navbar-start">
          <div class="navbar-item">
            <Link class="navbar-link--custom" to="bhajans">Bhajans</Link>
          </div>
          <div class="navbar-item">
            <Link class="navbar-link--custom" to="mantras">Mantras</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header