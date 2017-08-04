import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {houses: []};
  }

  componentWillMount() {
    fetch('/api/houses')
      .then(promise => {
        return promise.json();
      })
      .then(houses => {
        this.setState({houses: houses});
      })
  }

  render() {
    return (
      <div className="container-fluid row">
        <nav id="nav_bar" className="navbar navbar-fixed-top">
          <div className="title">
            <h1>Choose your house to represent!</h1>
          </div>
        </nav>
        <center>
          <h1>Hogwarts Houses</h1>
          <ul>{this.state.houses.map((house, key) => {
            return (
              <div key={key} className="col-md-4">
                <li><h3>{house.name}</h3></li>
                <img className="emblem" src={house.emblem}/>
                <h4>{house.size}</h4>
              </div>
            );
          })}</ul>
        </center>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);