import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <nav className="nav-nav">
      <Link to="/about1" className="nav-about navigation-Link">
        {props.about}
      </Link>
      <a
        href={props.link_school}
        target="_blank"
        rel="noreferrer noopener"
        className="nav-school navigation-Link"
      >
        {props.school}
      </a>
      <Link to="/" id="going" className="nav-home navigation-Link">
        {props.home}
      </Link>
    </nav>
  )
}

Nav.defaultProps = {
  school: 'Members',
  about: 'About',
  link_school: 'https://davnoida.org/',
  home: 'Agenda',
}

Nav.propTypes = {
  school: PropTypes.string,
  about: PropTypes.string,
  link_school: PropTypes.string,
  home: PropTypes.string,
}

export default Nav
