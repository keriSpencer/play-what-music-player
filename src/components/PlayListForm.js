import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/play-what/src/styles/App.css'
import PlayListItem from './PlayListItem'

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }
  }

  handleNameChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  addToList = e => {
    e.preventDefault()
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    })
    let listItem = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(this.state)

        console.log(response, 'yay')
      })
      .catch(err => {
        console.log(err, 'boo!')
      })
    this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' })
  }

  render() {
    return (
      <div>
        <div className="formWrap">
          <form onSubmit={this.addToList} className="form">
            <div>
              {/* Add onChange={} and value={this.state.userName} back */}
              <input name="name" placeholder="Name or User Name" />
            </div>
            <input name="artist" placeholder="Artist or Band Name" />
            <input name="songTitle" placeholder="Song Title" />
            <textarea name="songNotes" />
            <div className="btn">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
    // return <PlayListItem songs={this.state.songs} />
  }
}

export default PlayListForm
