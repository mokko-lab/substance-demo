import React, {Component} from 'react';
import { Card, Padded, Button, Split, SplitColumn, Heading, Paragraph, Panel, CoverImage } from 'substance-ui';
import Container from '../components/container';

class Cards extends Component {
  render() {
    return (
      <div>
        <Padded top={10} bottom={4}>
          <Heading type="h2" weight={800} margin={0}>Cards</Heading>
          <Paragraph size="medium" weight={300} margin="10px 0 0 0">Cards are a flexible and extensible content container.<br /> It includes a wide variety of content, contextual background colors, and powerful display options</Paragraph>
        </Padded>

        <Split gutter={50} ratio={[1,2]}>
          <SplitColumn matchHeight>
            <Card>
              <Padded all={2}>
                <Heading type="h5">Profile Card</Heading>
              </Padded>
              <img src={require('./../images/Profile-Card-Image.png')} style={{width: '100%'}} alt="" />
              <Panel all={2} alignment="center">
                  <Heading type="h3">Joe Gardner</Heading>
                  <Paragraph size="medium">Freelance Photographer</Paragraph>
                  <Button size="small" color="primary">Follow Me</Button>
              </Panel>
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
              <Split gutter={0} ratio={[1.4,1]}>
                <SplitColumn matchHeight>
                  <Padded padding="20px">
                    <img src={require('./../images/Split-Card-Image@2x.png')} style={{width: '100%', verticalAlign: 'top'}} alt="" />
                  </Padded>
                </SplitColumn>
                <SplitColumn matchHeight>
                  <Panel flex flexDirection="column" justifyContent="space-between" alignment="left">
                    <Padded all={2}>
                      <Heading type="h2">Pot <br/> Head </Heading>
                      <Paragraph size="medium" margin="20px 0 0 0">
                        The 12 steps to acquire mind-power is intended to build positive visuals, acquire mind power and help you achieve your dreams and desires that may be.
                      </Paragraph>
                    </Padded>
                    <Padded all={3}>
                      <Paragraph size="xx-large" weight={300}>$450</Paragraph>
                      <Button color="secondary" style={{marginTop: 20}}>Buy Now</Button>
                    </Padded>
                  </Panel>
                </SplitColumn>
              </Split>
            </Card>
          </SplitColumn>
        </Split>
        <Split gutter={50} ratio={[1,1,1]}>
          <SplitColumn matchHeight>
            <Card>
              <Padded all={2}>
                <Heading type="h5">News Card</Heading>
              </Padded>
              <Padded all={0}>
                <img src={require('./../images/News-Card-Image@2x.png')} style={{width: '100%'}} alt="" />
              </Padded>
              <Padded all={2}>
                <Heading type="h5">Wedding Rings A Gift For A Lifetime</Heading>
                <Paragraph margin="5px 0 0 0" weight={300}>You know you’re destined to be a fashion designer if you: a) spent most of your childhood making clothes for</Paragraph>
              </Padded>
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
              <CoverImage url={require('./../images/Full-Card-Image@2x.png')} />
            </Card>
          </SplitColumn>
          <SplitColumn matchHeight>
            <Card>
              <CoverImage url={require('./../images/Full-Image2@2x.png')} />
            </Card>
          </SplitColumn>
        </Split>
      </div>

      );
    }
  }

  export default Cards;
