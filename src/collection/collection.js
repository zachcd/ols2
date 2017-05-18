import React, { Component } from 'react';
import { Card } from './card.js';


class Collection extends Component {
  props: {
    collection: Object
  }
  render() {
    var cards = []
    for (var i = 0; i < this.props.collection.length; i++) {
      cards.push(this.props.collection[i])
    }
    return (
      {cards}
    )
  }
}
