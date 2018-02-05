import React from 'react'

import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { activeItem } = this.state;

    return(
      <Menu stackable>
        <Menu.Item>
          React-Seat-Charts
        </Menu.Item>
        <Menu.Item name='home'>
          Home
        </Menu.Item>
        <Menu.Item name='shows'>
          Shows
        </Menu.Item>
      </Menu>
    )
  }

}
