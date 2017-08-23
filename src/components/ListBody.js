import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {Card, Button, Padded} from 'substance-ui';
import { FaChevronRight, FaEllipsisV, FaPlus, FaTrash } from 'react-icons/lib/fa';
import ListPersonName from './ListPersonName';


export default class ListBody extends React.Component {
  render(){
    return(
      <Grid fluid>
        <Card style={style.cardStyle}>
          <Padded>
            <div>
              <div style={style.iconStyle}>
                <FaEllipsisV style={style.icon} />
                <FaPlus style={style.icon} />
                <FaTrash style={style.icon} />
              </div>
              <h3>{this.props.cardtype}</h3>

              <hr />
            </div>
            {this.props.children}
         </Padded>
        </Card>
      </Grid>
    );
  }
}

const style = {
  cardStyle: {
    width: 250
  },

  iconStyle: {
    float: 'right',
  },

  icon: {
    marginLeft: 10,
    color: '#b5b8bc'
  }

}
