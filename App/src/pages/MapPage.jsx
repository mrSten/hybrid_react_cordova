import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

var position = [57.63777,18.31350];
var lat,long;

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess);
}
function onSuccess(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    position = [lat, long];
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: position[0], lng: position[1] }}>
        {props.isMarkerShown && <Marker position={{ lat: position[0], lng: position[1] }} />}
    </GoogleMap>
))

class MapPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };

    }


    render() {
        return (

            < Page >
                {getLocation()}

                <div className='map-container'>
                    <MyMapComponent
                        isMarkerShown={false}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `98%` }} />}
                        containerElement={<div style={{ height: `98vh` }} />}
                        mapElement={<div style={{ height: `98%` }} />}
                    />
                    




                </div>
            </Page >
        )
    }
}
export const MAP_ROUTE = {
    key: 'MAP_PAGE',
    component: MapPage
}
export default MapPage;