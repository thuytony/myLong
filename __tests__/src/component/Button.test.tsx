import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import { Button } from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const instance = renderer.create(<Button />);
  expect(instance.toJSON()).toMatchSnapshot();
});

it('renders with title', () => {
  const instance = renderer.create(<Button title="test"/>);
  const textView = instance.root.findByType(Text);
  expect(textView.props.children).toBe('test');
});

it('renders with title all call', () => {
  const instance = renderer.create(<Button title="test" textAllCap={true}/>);
  const textView = instance.root.findByType(Text);
  expect(textView.props.children).toBe('TEST');
});
