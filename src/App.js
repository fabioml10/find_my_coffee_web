import React, { useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import GoogleListEstablishmentsService from './services/google_list_establishments'

function App() {
  const { REACT_APP_GOOGLE_API_KEY } = process.env

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [locations, setLocations] = useState([])

  async function setCurrentLocation () {
    await navigator.geolocation.getCurrentPosition( (position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      loadCoffeeShops()
    }, (error) => alert("Habilite a localização.")
    )
  }

  async function loadCoffeeShops() {
    const response = await GoogleListEstablishmentsService.index(latitude, longitude)
    setLocations(response.data.results)
  }

  //roda uma única vez
  useEffect( () => {
    setCurrentLocation()
  }, [])

  return (
    <>
      <p>Funcionando</p>
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={{height: "100vh", width: "100vw"}}
          zoom={15}
          center={{lat: latitude, lng: longitude}}>
            {
              locations.forEach((item, index) => {
                return (
                  <Marker key={index} icon="/images/coffee-pin.png" title={item.name} animation="4"
                    position={{lat: item.geometry.location.lat, lng: item.geometry.location.lng}}/>
                )
              })
            }
            <Marker key="myLocation" icon="/images/my-location-pin.png" title="Meu Local" animation="2"
              position={{lat: latitude, lng: longitude}}/>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default App;
