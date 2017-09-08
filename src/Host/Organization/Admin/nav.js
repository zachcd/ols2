import React from 'react'
import { Link } from 'react-router-dom'


export const adminNav = (props) => {
  return (<div>
    <h3>Admin Navigation</h3>
    <Link to={props.url + '/'}>Tournament List</Link>
    <Link to={props.url + ''}>Create Tournament</Link>
    <Link to={props.url + ''}>Edit Organization Profile</Link>
  </div> )
}
