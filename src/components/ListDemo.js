import React from 'react';
import {Row, Col} from 'react-styled-flexboxgrid';
import {Card, Padded, List, ListItem} from 'substance-ui';
import { IoChevronRight, IoPlus, IoMore, IoTrashB } from 'react-icons/lib/io'

export default class ListDemo extends React.Component {
  render(){
    return(
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card style={style.cardStyle}>
                <Padded>
                  <div style={style.iconStyle}>
                    <IoMore style={style.icon} />
                    <IoPlus style={style.icon} />
                    <IoTrashB style={style.icon} />
                  </div>
                  <h3>Styled Icon List</h3>
                </Padded>
                <hr />

                <List>
                  <ListItem label="Mitesh" avatar="http://www.gamersdecide.com/sites/default/files/styles/news_images/public/tumblr_ncmzvroFbt1rswum5o1_1280.png" rightIcon={<IoChevronRight />} />
                  <ListItem label="Manan" avatar="http://cdn.pcgamesn.com/sites/default/files/sniper_0.jpg" rightIcon={<IoChevronRight />}/>
                  <ListItem label="Devang" avatar="https://esportsedition.com/wp-content/uploads/2016/09/Snowstorm-Huntress.jpg" rightIcon={<IoChevronRight />}/>
                  <ListItem label="Pritish" avatar="http://click-storm.com/i/articles/0/2712/juggernautbyvivienkad6ulep7.jpg" rightIcon={<IoChevronRight />}/>
                </List>
            </Card>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Card style={style.cardStyle}>
                  <Padded>
                    <div style={style.iconStyle}>
                      <IoMore style={style.icon} />
                      <IoPlus style={style.icon} />
                      <IoTrashB style={style.icon} />
                    </div>
                    <h3>Simple List</h3>
                  </Padded>
                  <hr />

                  <List>
                  <ListItem label="Mitesh" />
                  <ListItem label="Mitesh" />
                  <ListItem label="Mitesh" />
                  <ListItem label="Mitesh" />
                  </List>
              </Card>
              </Col>
            </Row>
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
