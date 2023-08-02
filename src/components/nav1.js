import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav1.css'

const Nav1 = (props) => {
  return (
    <nav className="nav1-nav">
      <Link to="/about1" className="nav1-about Navigation-Link">
        {props.about}
      </Link>
      <a
        href={props.link_school}
        target="_blank"
        rel="noreferrer noopener"
        className="nav1-school Navigation-Link"
      >
        {props.school}
      </a>
      <Link to="/" id="going" className="nav1-home Navigation-Link">
        {props.home}
      </Link>
    </nav>
  )
}

Nav1.defaultProps = {
  link_school: 'https://davnoida.org/',
  home: 'Agenda',
  school: 'Members',
  about: 'About',
}

Nav1.propTypes = {
  link_school: PropTypes.string,
  home: PropTypes.string,
  school: PropTypes.string,
  about: PropTypes.string,
}

export default Nav1
