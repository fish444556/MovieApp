import React, { Component } from 'react';
import axios from 'axios'
import "./Detail.scss"

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: null,
    }
  }

  componentWillMount() {
    axios.get(`/v4/api/film/${this.props.match.params.movieId}`).then(res => {
      if (res.data.data.film) {
        this.setState({
          info: res.data.data.film
        })
      }
    })

  }


  render() {
    return (
      <div >
      {
        this.state.info ?
        <div className="Detail">
          <img src={this.state.info.cover.origin} />
          <div className="film-intro">
            <h3 className="film-w1"> {this.state.info.name}</h3>
            <h4 className="film-w2"> {this.state.info.intro}</h4>
            <p className="film-w3"> {this.state.info.synopsis}</p>
          </div>
        </div>
        : null
      }
      </div>
    )
  }
}

export default Detail;
