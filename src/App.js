import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      presenters: [],
      searchField: ''
    };
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ presenters: users}));

}

  render() {
    const { presenters, searchField } = this.state;
    const filteredPresenters = presenters.filter(presenter =>
      presenter.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1> Presenters </h1>
        <SearchBox
        placeholder='Search for Presenters'
        handleChange={e => this.setState({ searchField: e.target.value })}
        />
       <CardList presenters={filteredPresenters} />       
     </div>
    );
  }
}


export default App;
