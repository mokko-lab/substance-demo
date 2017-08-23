import React from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import { FaChevronRight } from 'react-icons/lib/fa';


export default class ListPersonName extends React.Component {
  render(){
    return(
      <div>
      <div style={{float: 'right', position: 'absoulte', }}>
        <FaChevronRight />
     </div>
     <img src={this.props.image} style={style.imageStyle}/>
     <p>{this.props.name}</p>
     <hr style={{color: '#efefef'}} />
     </div>

    );
  }
}

const style = {
  imageStyle:{
    width: 30,
    height: 30,
    borderRadius: 25,
    float: 'left',
    marginRight: 10
  }
}
