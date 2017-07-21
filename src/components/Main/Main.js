import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/iconfont/iconfont.css'
import './Main.scss'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
    }
  }

  render() {
    return (
      <div>
        <header>
          <div className="left">
            <i className="icon-category iconfont" onClick={() => {
                this.setState({
                  isShow: !this.state.isShow,
                })
              }}>
            </i>
            <span>Movies</span>
          </div>
          <div className="right">
            <span>Position</span>
            <i className="icon-account iconfont"></i>
          </div>
        </header>

        <nav className={this.state.isShow ? 'show' : 'hide' } >
          <ul onClick={()=>{
              this.setState({
                isShow: !this.state.isShow
              })
            }}>
            <li>
              <NavLink to="/home" activeClassName="selected">Home</NavLink>
              <NavLink to="/film" activeClassName="selected">Movies</NavLink>
            </li>
          </ul>
        </nav>

        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default Main