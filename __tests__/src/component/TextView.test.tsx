import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import { TextView } from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const instance = renderer.create(<TextView />);
  expect(instance.toJSON()).toMatchSnapshot();
});

it('renders with text', () => {
  const instance = renderer.create(<TextView>test</TextView>);
  const textView = instance.root.findByType(Text);
  expect(textView.props.children).toBe('test');
});

it('test style h6', () => {
  const instance = renderer.create(<TextView h6>test</TextView>);
  const textView = instance.root.findByType(Text);
  expect(textView.props.style).toHaveProperty('fontFamily', 'Avenir-Medium');
  expect(textView.props.style).toHaveProperty('fontSize', 16);
  expect(textView.props.style).toHaveProperty('lineHeight', 20);
  expect(textView.props.style).toHaveProperty('fontWeight', '500');
  expect(textView.props.style).toHaveProperty('color', '#03606A');
});