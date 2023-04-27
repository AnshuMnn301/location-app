import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Location from './screen/Location';
import MapsView from './screen/MapsView';
const Tab = createBottomTabNavigator();
export const LocationContext = React.createContext([[], () => {}] as any[]);
export default function LocationManagerApp() {
  const [locationView, setLocationView] = React.useState([]);
  return (
    <LocationContext.Provider value={[locationView, setLocationView]}>
      <Tab.Navigator>
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="MapView" component={MapsView} />
      </Tab.Navigator>
    </LocationContext.Provider>
  );
}
