import React, { Component } from 'react';


class Card extends Component {
  props: {
    ign: String,
    teamName: String,
    kda: String,
    kp: String,
    gpm: String,
    winloss: String,
    deaths: Array,
    kills: Array
  }
}
