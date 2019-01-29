import React, { Component } from 'react';
import './../App.css';

class Intructions extends Component {
  render() {
    return (
      <div className="App">



      <div className="App-instructions-container">

        <code>
        Intructions: 

            Display a list of the numbers 0 to 100,
            Each list item will have a background of a certain color.
      
        <ul>
          <li>For numbers divisible by 3, make the background red.</li> 

          <li>For numbers divisible by 5 make the background blue.</li>

          <li>For numbers divisible by both 5 and 3, make the background green.</li>

          <li>For numbers not divisible, leave the background white.</li>
        </ul>


        </code>

      
      </div>
      </div>
    );
  }
}

export default Intructions;
