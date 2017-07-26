import React, { Component } from 'react';


class Tournament extends Component {

  render () {
    let divisions = this.loadDivisions(this.props.divisions)
    return (
      <div className="Tournament">
        <h2>{this.props.title}</h2>
          {divisions}
      </div>
    )
  }

  loadDivisions(divisions) {
    let divisisionList = <div className="DivisionList">
    divisions.forEach((division) => {
      divisisionList
    })
  }
}
