import React, { Component } from 'react';
import {
  Button,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoButton extends Component {
  static navigationOptions = {
    title: 'Button',
  };

  renderHeader() {
    return (
      <Button text="Button" />
    );
  }

  renderContent() {
    return (
      <View>
        <Title>Types</Title>
        <View>
          <Subtitle>Flat</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button styleName="flat-primary" text="Button" />
            <Button styleName="flat-accent" text="Button" />
          </View>
          <Subtitle>Outline</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button styleName="outline-primary" text="Button" />
            <Button styleName="outline-accent" text="Button" />
          </View>
        </View>
        <Title>States</Title>
        <View>
          <Subtitle>Disabled</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button text="Button" disabled />
          </View>
          <Subtitle>Loading</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button text="Button" loading />
          </View>
        </View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Size</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button size="mini" text="MINI" />
            <Button size="small" text="SMALL" />
            <Button size="medium" text="MEDIUM" />
            <Button size="large" text="LARGE" />
            <Button size="big" text="BIG" />
          </View>
          <Subtitle>Rounded</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button text="Button" rounded={false} />
          </View>
          <Subtitle>Circular</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button text="OK" circular />
          </View>
          <Subtitle>Fluid</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button text="Button" fluid />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoButton;