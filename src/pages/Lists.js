import React from 'react';
import ListDemo from '../components/ListDemo';
import {Grid} from 'react-styled-flexboxgrid';

export default function(props) {
  return (
    <Grid fluid>
      <h1>Lists</h1>
      <ListDemo />
    </Grid>
  )
}
