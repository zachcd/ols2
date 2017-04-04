import React, { Component } from 'react';
import accountAccessButton from './accountAccessButton';

class mainHeader extends Component {
  render() {
    return (
      <div>
      <accountAccessButton username="" isLoggedIn={false}>
      </accountAccessButton>
      </div>
    )
  }

}

export default mainHeader
