import React, { Component } from 'react';


class CardCollection extends Component {
  constructor() {

  }

  render() {
    let cardsToDisplay = this.filterCards(this.props.filter)
    let filterSelected = this.filterDisplaySelected(this.props.filter)
    return(
      <div className="CardCollection">
        
      </div>
    )
  }
}
