import React, { PureComponent } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import ActivityIndicator from '../ActivityIndicator';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  textStyle: RNText.propTypes.style,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
  fluid: PropTypes.bool,
};
const defaultProps = {
  text: '',
  textStyle: undefined,
  disabled: false,
  loading: false,
  size: 'medium',
  rounded: true,
  circular: false,
  fluid: false,
};
const mapStyleToProps = [
  'activeOpacity',
];

class Button extends PureComponent {
  render() {
    let {
      text,
      textStyle,
      children,
    } = this.props;
    const {
      loading,
    } = this.props;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      if (textStyle && typeof textStyle === 'number') {
        textStyle = StyleSheet.flatten(textStyle);
      }
      children = (<Text style={textStyle} >{text}</Text>);
    }

    let activityIndicator;
    if (loading) {
      activityIndicator = (
        <ActivityIndicator
          animating
          color="#ffffff"
        />
      );
    }

    return (
      <RNTouchableOpacity
        {...this.props}
      >
        {activityIndicator}
        {children}
      </RNTouchableOpacity>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles('Button', mapStyleToProps)(Button);
