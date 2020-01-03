import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from 'components/Suggestions'


const API_KEY  = '2a863c81'
const API_URL = 'http://www.omdbapi.com/'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }


  getInfo = () => {
   axios.get(`${API_URL}?s=${this.state.query}&apikey=${API_KEY}&page=1`)
      .then(({ data }) => {
        console.log('data = ', data.Search)
        this.setState({
          results: data.Search
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 2) {
  //       this.showDropdown()

  //      if (this.state.query.length % 2 === 0) {
          this.getInfo()
  //        this.showDropdown()
  //      }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        <input type="select"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
       
        <Suggestions results={this.state.results} />
        
      </form>
    )
  }
}

export default Search
