import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, Button} from 'substance-ui';

export default function(props) {
    return (
      <Grid>
        <h1>Buttons</h1>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Primary</h2>
              <Button size="small" color="primary">Small Button</Button><br/>
              <Button color="primary">Regular Button</Button><br/>
              <Button size="large" color="primary">Large Button</Button><br/>
              <Button outline color="primary">Outline Button</Button><br/>
              <Button outline alt color="primary">Outline Alt Button</Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Secondary</h2>
              <Button size="small" color="secondary">Small Button</Button><br/>
              <Button color="secondary">Regular Button</Button><br/>
              <Button size="large" color="secondary">Large Button</Button><br/>
              <Button outline color="secondary">Outline Button</Button><br/>
              <Button outline alt color="secondary">Outline Alt Button</Button>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Monochrome</h2>
              <Button size="small" color="monochrome">Small Button</Button><br/>
              <Button color="monochrome">Regular Button</Button><br/>
              <Button size="large" color="monochrome">Large Button</Button><br/>
              <Button outline color="monochrome">Outline Button</Button><br/>
              <Button outline alt color="monochrome">Outline Alt Button</Button>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Success</h2>
              <Button size="small" color="success">Small Button</Button><br/>
              <Button color="success">Regular Button</Button><br/>
              <Button size="large" color="success">Large Button</Button><br/>
              <Button outline color="success">Outline Button</Button><br/>
              <Button outline alt color="success">Outline Alt Button</Button>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Warning</h2>
              <Button size="small" color="warning">Small Button</Button><br/>
              <Button color="warning">Regular Button</Button><br/>
              <Button size="large" color="warning">Large Button</Button><br/>
              <Button outline color="warning">Outline Button</Button><br/>
              <Button outline alt color="warning">Outline Alt Button</Button>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card static>
              <h2>Error</h2>
              <Button size="small" color="error">Small Button</Button><br/>
              <Button color="error">Regular Button</Button><br/>
              <Button size="large" color="error">Large Button</Button><br/>
              <Button outline color="error">Outline Button</Button><br/>
              <Button outline alt color="error">Outline Alt Button</Button>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
