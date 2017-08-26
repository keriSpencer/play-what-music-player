import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/play-what/src/styles/App.css'
import PlayListItem from './PlayListItem'

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [],
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }
  }

  _name = e => {
    this.setState({
      userName: e.target.value
    })
  }

  _artist = e => {
    this.setState({
      songArtist: e.target.value
    })
  }

  _title = e => {
    this.setState({
      songTitle: e.target.value
    })
  }

  _notes = e => {
    this.setState({
      songNotes: e.target.value
    })
  }

  _addToList = e => {
    e.preventDefault()
    const { userName, songTitle, songArtist, songNotes } = this.state
    let listItem = JSON.stringify({ userName, songTitle, songArtist, songNotes })

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err, 'boo!')
      })
    this.setState({ userName: '', songArtist: '', songTitle: '', songNotes: '' })
  }

  render() {
    return (
      <div>
        <div className="formWrap">
          <form onSubmit={this._addToList} className="form">
            <div>
              <input
                className="formFields"
                onChange={this._name}
                name="name"
                placeholder="Name or Username"
                value={this.props.userName}
              />
            </div>
            <input
              className="formFields"
              onChange={this._artist}
              name="artist"
              placeholder="Artist or Band Name"
              value={this.props.songArtist}
            />
            <input
              className="formFields"
              onChange={this._title}
              name="songTitle"
              placeholder="Song Title"
              value={this.props.songTitle}
            />
            <textarea className="formFields" onChange={this._notes} name="songNotes" value={this.props.songNotes} />
            <div className="btn">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
    return <PlayListItem songs={this.state.songs} />
  }
}

export default PlayListForm
