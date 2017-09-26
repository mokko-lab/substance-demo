import React, {Component} from 'react';
import { Card, Padded, Panel, Row, Column, Button, IconButton } from 'substance-ui';

import { FaTrash,  FaPlusCircle, FaCog } from 'react-icons/lib/fa';



class Cards extends Component {
  render() {
    return (
      <div style={{maxWidth: '1700px',margin: '0 auto'}}>

        <Padded padding="60px 0px 40px 0px">
          <h1>Cards</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co</p>
        </Padded>

        <Row gutter={30}>
          <Column matchHeight>
            <Card>
              <Padded padding="20px">
                <h3>Normal Card</h3>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card interactive>
              <Padded padding="20px">
                <h3>Interactive Card</h3>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card square>
              <Padded padding="20px">
                <h3>Square Card</h3>
              </Padded>
            </Card>
          </Column>
          <Column matchHeight>
            <Card>
              <Padded padding="20px">
                <h4>Profile Card</h4>
                <img alt="sample food" src="https://tiffinity-parse.s3.amazonaws.com/parse/92ce2f2bc9bff40890c5540bb6ec730d_mobile.jpeg" style={{maxWidth: '100%'}}>
                </img>
                <Padded style={{textAlign: 'center'}}>
                  <h3>Joe Gardner</h3>
                  <p style={{marginTop: '1px', color: '#ccc', fontSize: '14px'}}>Freelance Photographer</p>
                  <Button primary color="primary" size="small">Follow Me</Button>
                </Padded>
              </Padded>
            </Card>
          </Column>
        </Row>
      </div>

      );
    }
  }

  export default Cards;
