import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";
  import { formatRelative, set } from "date-fns";
  import "@reach/combobox/styles.css";
  import mapStyle from '../mapStyle';
  import editProfile from './editProfile';
  
  const libraries = ["places"];
  const mapContainerStyle = {
    height: "50vh",
    width: "50vw",
  };
  const center = {
    lat: -37.813629,
    lng: 144.963058,
  };
  
  const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  }

const MapComponent = () => {
    const{isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      })
    
      const [markers, setMarkers] = React.useState([]);
    
      const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
          ...current,
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          },
        ]);
        
      }, []);
    
      
    
      if (loadError) return "Error";
      if (!isLoaded) return "Loading...";

    return(
        <div className="map">
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={11} 
            center={center}
            options={options}
            onClick={onMapClick}
            >
          {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
          
            </GoogleMap> 

            {markers.map((current) => <div key={current.id}>
          {SetLat(current.lat)}
          {SetLng(current.lng)}
          </div> )}   
        </div>
    )
}

function SetLat(parameter){
    const latitude = parameter;
      const json = JSON.stringify(latitude);
      localStorage.setItem("Latitude", json);
  };
  
  
  function SetLng(parameter){
    const longitude = parameter;
      const json = JSON.stringify(longitude);
      localStorage.setItem("Longitude", json);
  };

export default MapComponent;