import React, { Component } from 'react';
// import './App.css';
import { Input, FormBtn, TextArea } from '../components/Form';
import API from '../utils/API';
import { Link } from 'react-router-dom';


class Books extends Component {
  state = {
    search: '',
    books: [],
    results: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  searchGoogleBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data }))

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
      </div>

      
    );
  }
}
export default Books;