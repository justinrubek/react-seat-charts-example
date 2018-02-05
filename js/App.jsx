import React from "react";
import {
    Loader,
    Container, 
    Button,
    Card,
    Modal,
    Form,
    Header
    
  } from 'semantic-ui-react';
import axios from 'axios';

import { SeatingChart } from 'react-seat-charts'
import NavBar from './Nav'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() {
    axios.get('/js/seats.json').then(response => this.setState(
      {
        seats: response.data.seats, 
        naming: response.data.naming
      })).catch(error => console.log(error));
  }

  render() {
    let nav = <NavBar />
    let seat = this.state.seats ? <SeatingChart seats={this.state.seats} naming={this.state.naming}/> : <Loader active/>
    let card = (
      <Card>
        <Card.Content>
          <Card.Header>
            Ticket Cube 3
          </Card.Header>
          <Card.Meta>
            4.2 stars
          </Card.Meta>
          <Card.Description>
            Man finds one simple trick, now movie theater owners HATE him...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button.Group widths='2'>
              <Button color='purple'>See More</Button>
              <Modal trigger={<Button color='blue'>Order</Button>}>
                <Modal.Header>Buy Tickets</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Header>Contact Information</Header>
                      <Form>
                        <Form.Group>
                          <Form.Input label="Name" placeholder="Name" />
                          <Form.Input label="Email" placeholder="Email" />
                        </Form.Group>
                          <Header>Select seats</Header>
                          {seat}
                        <Form.Button>Submit</Form.Button>
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
            </Button.Group>
          </div>
        </Card.Content>
      </Card>
    
      )
    return (
      <div>
        {nav}
        <Container>
        <Header as='h1'>Shows playing in Weston #19</Header>
        {card}
        </Container>
        
      </div>
    )
  }
}
