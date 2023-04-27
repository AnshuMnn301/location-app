import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react-native'
import Location from '../src/screen/locationManagerApp/screen/Location';
import { Platform } from 'react-native';
import Item from '../src/components/Item';

it('render Item Correctly', () => {
    const tree = renderer.create(<Location/>).toJSON()
    expect(tree).toMatchSnapshot()
})

describe('Testing Functionality', () => {
    beforeEach(() => {
        render(<Location/>)
    })
    it('delete all Locations', () =>{
       fireEvent(screen.getByText('Remove All'), 'onPress',[])
    })
    it('Location list Data key', () =>{
       expect(screen.getByTestId('location-list').props.keyExtractor({id: 1})).toContain(undefined)
    })
    it('Location list render Item', () =>{
        const mockDeleteItem = jest.fn()
        render(<Item deleteItem={mockDeleteItem} section={{"data": [{"id": 3, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594913918}, {"id": 2, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "South Hillview Drive, Milpitas, Santa Clara County, California, 95035, United States", "time": 1682594867802}, {"id": 1, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}], "title": "Previous Location"}} item={{"id": 3, "latlng": {"latitude": 17.6234567, "longitude": 78.77434}, "location": "Turkapalle, Turkapalle (M) mandal, Yadadri Bhuvanagiri, Telangana, India", "time": 1682594793690}}/>)
        fireEvent(screen.getByText('remove'), 'onPress', [])
        expect(mockDeleteItem).toHaveBeenCalledWith(3)
    })
})