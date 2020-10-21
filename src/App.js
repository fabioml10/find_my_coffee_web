import React, { useState, useEffect} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function App() {
  const { REACT_APP_GOOGLE_API_KEY } = process.env;

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  async function setCurrentLocation () {
    await navigator.geolocation.getCurrentPosition( (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }, (error) => alert("Habilite a localização.")
    )
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
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default App;
