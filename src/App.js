import React, { Component } from 'react';
import './App.css';
import Head from './components/head';
import Instructions from './components/instructions';

class App extends Component {
  render() {
const {data} = this.props;
const numbersList = data.map(number=>{
  return(
    <li className={number.color}>{number.number}</li>
    )
})

 return (
      <div className="App">
        <Head/>
        <Instructions/>
       <div className="App-list-container">
        	<ul>
            {numbersList}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
