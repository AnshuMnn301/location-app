/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Item from '../src/components/Item';
import { fireEvent, render, screen } from '@testing-library/react-native';

it('renders correctly', () => {
    const mockDeleteItem =  jest.fn()
  const tree = renderer.create(<Item deleteItem={mockDeleteItem} section={{"data": [{"id": 3, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594913918}, {"id": 2, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594867802}, {"id": 1, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}], "title": "Previous Location"}} item={{"id": 1, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}}/>).toJSON();
  expect(tree).toMatchSnapshot()
});

describe('Test Item component', () => {
    beforeEach(() => {
        const mockDeleteItem =  jest.fn()
        render(<Item deleteItem={mockDeleteItem} section={{"data": [{"id": 3, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594913918}, {"id": 2, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594867802}, {"id": 1, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}], "title": "Previous Location"}} item={{"id": 1, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}}/>)
    })
    it('Delete selected location item', () => {
        fireEvent(screen.getByText('remove'), 'onPress', [])
    })
})