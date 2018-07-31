import React, { Component } from 'react'
import BookList from './containers/book-list'
import BookDetail from './containers/book-detail'

export default class App extends Component {

  //What are reducers?
  //Reducers are functions that return a piece of the 
  //application state

  render() {
    return (
      <div className="container">
          <BookDetail />
          <BookList />
      </div>
    )
  }
}


