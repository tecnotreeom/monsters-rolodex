import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App  extends Component {
  constructor() {
    super();
    this.state = {
      monosters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monosters: users
    }))
      
  }
  handleChange = e => {
    this.setState({searchField: e.target.value })
  }
  render() {
    const { monosters, searchField } = this.state;
    const filteredMonsters = monosters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
       <SearchBox 
        placeholder="Search Value"
        handleChange = {this.handleChange}
       />
        <CardList monosters= {filteredMonsters}>
        
        </CardList> 
        
      </div>
    )
  }
}

export default App;
