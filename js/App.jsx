import React from "react";
import { Button, Loader } from 'semantic-ui-react';
import { SeatingChart } from 'react-seat-charts';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      received: false 
    }

  }

  componentDidMount() {
    axios.get('/js/seats.json').then(response => this.setState({seats: response.data.seats, naming: response.data.naming, received: true})).catch(error => console.log(error));
  }

  render() {
    let seat = this.state.received ? <SeatingChart seats={this.state.seats} naming={this.state.naming}/> : <Loader active/>
    return (
      <div>
        <Button color='red'>Hello semantic-ui in React! </Button>
        {seat} 
      </div>
    )
  }
}
