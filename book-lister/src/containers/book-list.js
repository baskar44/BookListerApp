import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    
    renderList(){
        if (this.props.books != null) {
            return this.props.books.map((book) => {
                return (
                    <li 
                        key={book.title} 
                        className="list-group-item"
                        onClick={() => this.props.selectBook(book)}>
                        {book.title}
                    </li>
                )
            })
        }
    }
    
    render() {
        return (
            <ul className="list-group container"> 
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props 
    //inside of book list
    return {
        books: state.books
    }
}

//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        //Whenever selectBook is called, the result should be passed
        //to all out reducers
        selectBook: selectBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)