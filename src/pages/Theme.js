
import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {theme, Card} from 'substance-ui';
import Dot from '../components/Dot';
import { withTheme } from 'styled-components'

const ThemeRenderer = function(props) {
  return (
    <Grid fluid>
      <h1>Theme</h1>
      <Row>
      <Col md sm={12} xs={12}>
        <Card padded>
          <h2>Colors</h2>

          <Dot color={props.theme.colors.primary}>Primary</Dot>
          <Dot color={props.theme.colors.secondary}>Secondary</Dot>
          <br />
          <Dot color={props.theme.colors.success} size={76}>Success</Dot>
          <Dot color={props.theme.colors.warning} size={76}>Warning</Dot>
          <Dot color={props.theme.colors.error} size={76}>Error</Dot>
        </Card>
      </Col>
      </Row>
    </Grid>
  )
};


export default withTheme(ThemeRenderer);
