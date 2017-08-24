import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/play-what/src/styles/App.css'

import NavBar from '/Users/kerispencer/Development/react/play-what/src/components/NavBar.js'
import PlayList from '/Users/kerispencer/Development/react/play-what/src/components/PlayList.js'
import PlayListForm from '/Users/kerispencer/Development/react/play-what/src/components/PlayListForm.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro" />
        <NavBar />
        <PlayList />
        <PlayListForm />
      </div>
    )
  }
}

export default App
