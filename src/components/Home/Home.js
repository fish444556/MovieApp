import React from 'react'
import ReactSwipe from 'react-swipe'
import axios from 'axios'
import '../../assets/Movies/common.scss'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      playingList: []
    }
  }

  componentWillMount() {
    axios.get('/v4/api/billboard/home').then(res => {
      if (res.data.data.billboards) {
        this.setState({
          dataList: res.data.data.billboards
        })
      }
    })
    axios.get('/v4/api/film/now-playing').then(res => {
      this.setState({
        playingList: res.data.data.films
      })
    })
  }


  render() {
    return (
      <div className="home">
        <ReactSwipe
          className="carousel"
          swipeOptions={{continuous: true, auto: 3000}}
          key={this.state.dataList.length}
        >
          {
            this.state.dataList.map(item =>
              <div key={item.id} >
                <img src={item.imageUrl} style={{width: '100%'}} />
              </div>
            )
          }
        </ReactSwipe>
        <div className="Movies-display">
        {
          this.state.playingList.map((item, index) =>
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
      </div>
    )
  }
}

export default Home