import React, { Component } from 'react';
// import './App.css';
import { Input, FormBtn, TextArea } from '../components/Form';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Card from '../components/Card';


class Books extends Component {
  state = {
    search: '',
    books: [],
    results: []
  }

  componentDidMount() {
    this.searchGoogleBooks("harry potter");
  }

  searchGoogleBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      console.log(this.state.results);

  }

  loadBooks = () => {
    API.getBooks()
    .then(res =>
      this.setState({ books: res.data, title: "", author: "", details: "", image: "" } )
    )
    .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };





  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Google Books Search App</h1>
          <form>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!(this.state.search)}
              onClick={this.handleFormSubmit}
            >Submit
            </FormBtn>
          </form>
          </div>
          {this.state.results.length ? (
          <div className="results">
          {this.state.results.map(book => (
            <div>
            <Card
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            />
            </div>
            ))
          }
          </div>
          ) : (
            <h3> No Results to Display </h3>
          )}

        
      </div>
    
      
    );
  }
}
export default Books;