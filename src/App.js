import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';

const Item = props => <li onClick={() => this.props.deleteItem(props.item.id)}>{props.item.name}</li>

const Items = props => <ul>{ props.items.map(item => <Item key={item.id} item={item}/>) }</ul>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            Items
        </p>
        <Items items={this.props.items} deleteItem={this.props.deleteItem}/>
      </div>
    );
  }
}

function deleteItem(id) {
    return {
        type: "DELETE_ITEM",
        id
    }
}
export default connect((state) => ({
    items: state.items
}), {
    deleteItem
})(App);
