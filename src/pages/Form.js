import React from 'react';
import FormItem from '../components/formItemDemo';
//import ListDemo from '../components/ListDemo';
import {Grid} from 'react-styled-flexboxgrid';

export default function(props) {
  return (
    <Grid fluid>
      <h1>Forms</h1>
      <FormItem />
    </Grid>
  )
}
