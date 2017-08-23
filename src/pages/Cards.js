import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {Card, Padded, Button, IconButton} from 'substance-ui';
import { FaTrash,  FaPlusCircle, FaCog } from 'react-icons/lib/fa';


export default function(props) {
      return (
        <Grid fluid>
          <h1>Cards</h1>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card padded>
                <h3>Normal Card</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card interactive padded>
                <h3>Interactive Card</h3>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card square padded>
                <h3>Square Card</h3>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card>
              <IconButton><FaCog /></IconButton>
              <IconButton><FaTrash /></IconButton>
              <IconButton><FaPlusCircle /></IconButton>
                <Padded>
                  <h4>Profile Card</h4>
                </Padded>

                <img alt="sample food" src="https://tiffinity-parse.s3.amazonaws.com/parse/92ce2f2bc9bff40890c5540bb6ec730d_mobile.jpeg" style={{maxWidth: '100%'}}>
                </img>
                <Padded style={{textAlign: 'center'}}>
                  <h3>Joe Gardner</h3>
                  <p style={{marginTop: '1px', color: '#ccc', fontSize: '14px'}}>Freelance Photographer</p>
                  <Button primary color="primary" size="small">Follow Me</Button>
                </Padded>
              </Card>
            </Col>
            </Row>
        </Grid>
      )
}
