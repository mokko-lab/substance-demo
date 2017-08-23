import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {Card, Button, Padded, List, ListItem} from 'substance-ui';
import { FaChevronRight, FaEllipsisV, FaPlus, FaTrash } from 'react-icons/lib/fa';

export default class ListDemo extends React.Component {
  render(){
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card style={style.cardStyle}>
                <Padded>
                  <div style={style.iconStyle}>
                    <FaEllipsisV style={style.icon} />
                    <FaPlus style={style.icon} />
                    <FaTrash style={style.icon} />
                  </div>
                  <h3>Basic List</h3>
                </Padded>
                <hr />

                <List>
                  <ListItem leftIcon={<FaPlus />} label="Mitesh" avatar="http://www.gamersdecide.com/sites/default/files/styles/news_images/public/tumblr_ncmzvroFbt1rswum5o1_1280.png" rightIcon={<FaEllipsisV />} />
                  <ListItem leftIcon={<FaPlus />} label="Manan" avatar="http://cdn.pcgamesn.com/sites/default/files/sniper_0.jpg" rightIcon={<FaEllipsisV />}/>
                  <ListItem leftIcon={<FaPlus />} label="Devang" avatar="https://esportsedition.com/wp-content/uploads/2016/09/Snowstorm-Huntress.jpg" rightIcon={<FaEllipsisV />}/>
                  <ListItem leftIcon={<FaPlus />} label="Pritish" avatar="http://click-storm.com/i/articles/0/2712/juggernautbyvivienkad6ulep7.jpg" rightIcon={<FaEllipsisV />}/>
                </List>
            </Card>
            </Col>
            </Row>
      </Grid>
    );
  }
}

const style = {
  cardStyle: {
    overflow: 'hidden'
  },

  iconStyle: {
    float: 'right',
  },

  icon: {
    marginLeft: 10,
    color: '#b5b8bc'
  }

}
