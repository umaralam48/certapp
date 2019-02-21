import React, { Component } from 'react';
import './App.css';
import data from './data';
import Form from './form';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: data,
      type: 'Literary',
      order: 'dec'
    };
    this.handletype = this.handletype.bind(this);
    this.handleorder = this.handleorder.bind(this)
  }
  handletype(type) {
    console.log('Selected type', type);
    this.setState({
      type: type
    });
  }
  handleorder(order) {
    this.setState({
      order: order
    });
  }
  render() {
    var selectedcert = this.state.certificates.filter(certificate => certificate.type === this.state.type);
    console.log('Selected element', selectedcert);
    //var url = '/img/' + selectedcert.name;
    return (
      <div className="App">
        <Dashboard handletype={this.handletype} handleorder={this.handleorder} url='/img/2.jpg'/>
        
        <header className="App-header">
          {selectedcert.map((element) => {
            var url = '/img/' + element.name;
            return (<img src={url} />)
          })}
        </header>
      </div>
    );
  }
}

export default App;
