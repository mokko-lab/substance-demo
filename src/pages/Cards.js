import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card} from 'substance-ui';

export default function(props) {
      return (
        <Grid fluid>
          <h1>Cards</h1>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card>
                <h3>Normal Card</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card static>
                <h3>Static Card</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card square>
                <h3>Square Card</h3>
              </Card>
            </Col>
          </Row>
        </Grid>
      )
}
