import React, { Component } from 'react';
import axios from 'axios'
import "../../assets/Movies/common.scss"

class Coming extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
    }
  }

  componentWillMount() {
    axios.get('/v4/api/film/coming-soon').then(res => {
      this.setState({
        dataList: res.data.data.films
      })
    })
  }


  render() {
    return (
      <div className="Movies-display">
      {
        this.state.dataList.map((item, index) =>
          <li key={item.id} onClick={() =>
            this.props.history.push(`/detail/${item.id}`)
          } >
          <img src={item.cover.origin} />
          <h3> {item.name}</h3>
          <p> {"It will be showed by " + item.cinemaCount + " cinemas"}</p>
          <p> {"It was viewed by " + item.watchCount + " people"}</p>
          </li>
        )
      }
      </div>
    )
  }
}

export default Coming;
