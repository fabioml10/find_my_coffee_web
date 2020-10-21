import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function App() {
  const { REACT_APP_GOOGLE_API_KEY } = process.env;

  return (
    <>
      <p>Funcionando</p>
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={{height: "100vh", width: "100vw"}}
          zoom={15}
          center={{lat: -21.7768, lng: -41.3109}}>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default App;
