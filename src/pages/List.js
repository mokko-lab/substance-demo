import React, {Component} from 'react';
import ListBody from '../components/ListBody';
import ListPersonName from '../components/ListPersonName';


export default function(props) {
  return (
    <div>
      <ListBody cardtype="Basic List" >
        <ListPersonName name="Mitesh" image="http://www.gamersdecide.com/sites/default/files/styles/news_images/public/tumblr_ncmzvroFbt1rswum5o1_1280.png" />
          <ListPersonName name="Manan" image="http://cdn.pcgamesn.com/sites/default/files/sniper_0.jpg" />
            <ListPersonName name="Devang" image="https://esportsedition.com/wp-content/uploads/2016/09/Snowstorm-Huntress.jpg" />
              <ListPersonName name="Pritish" image="http://click-storm.com/i/articles/0/2712/juggernautbyvivienkad6ulep7.jpg" />

      </ListBody>


    </div>
  )
}
