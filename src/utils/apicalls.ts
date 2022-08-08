import {PermissionsAndroid} from 'react-native';
import {LatLng} from 'react-native-maps';
export async function requestGeolocationPermission() {
  try {
    const resp = await PermissionsAndroid.requestMultiple([
      'android.permission.ACCESS_COARSE_LOCATION',
      'android.permission.ACCESS_FINE_LOCATION',
    ]);
    return resp;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export interface LocationType {
  id: number;
  location: string;
  latlng: LatLng;
  time: number;
}

export async function reverseGeoCoding(lat: number, lng: number) {
  console.log(lat, lng);
  try {
    const resp = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`,
    );
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
