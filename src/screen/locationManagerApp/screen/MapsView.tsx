import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {LocationType} from '../../../utils/apicalls';
import {LocationContext} from '../LocationManagerApp';

export default function MapsView() {
  const [locationView] = React.useContext(LocationContext) as [
    {title: string; data: LocationType[]}[],
  ];
  let arr: LocationType[] = [];
  locationView.forEach(ele => {
    arr.push(...ele.data);
  });
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
      }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...StyleSheet.absoluteFillObject, flex: 1}}>
        {!!arr.length &&
          arr.map(ele => (
            <Marker key={ele.id} coordinate={ele.latlng} title={ele.location} />
          ))}
      </MapView>
    </View>
  );
}
