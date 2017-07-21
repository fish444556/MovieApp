import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Film.scss"

class Film extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <ul className="filmnav">
          <li>
            <NavLink
              to="/film/now-playing"
              activeClassName="filmselected"
            >Now playing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/film/coming-soon"
              activeClassName="filmselected"
            >Coming soon
            </NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Film;
