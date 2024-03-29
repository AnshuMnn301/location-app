/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MapsView from '../src/screen/locationManagerApp/screen/MapsView';

it('renders correctly', () => {
  const tree = renderer.create(<MapsView />).toJSON();
  expect(tree).toMatchSnapshot()
});

