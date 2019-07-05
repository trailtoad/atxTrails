import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    //Marker,
    BicyclingLayer,
    TrafficLayer
    /* InfoWindow */
  } from "react-google-maps";

  //Google Maps
const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12.8}
            defaultCenter={{ lat: 30.2591, lng: -97.801777 }}
            defaultOptions={{
                scrollwheel: false,
                zoomControl: true,
                mapTypeId: 'terrain',
                styles: [
                    {
                        featureType: "water",
                        stylers: [
                            { saturation: 43 },
                            { lightness: -11 },
                            { hue: "#0088ff" }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.fill",
                        stylers: [
                            { hue: "#ff0000" },
                            { saturation: -100 },
                            { lightness: 99 }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#808080" }, { lightness: 54 }]
                    },
                    {
                        featureType: "landscape.man_made",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ece2d9" }]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#ccdca1" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#767676" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#ffffff" }]
                    },
                    { 
                        featureType: "poi", 
                        stylers: [{ visibility: "on" }] 
                    },
                    {
                        featureType: "landscape.natural",
                        elementType: "geometry.fill",
                        stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
                    },
                    { 
                        featureType: "poi.park", 
                        stylers: [{ visibility: "on" }] 
                    },
                    {
                        featureType: "poi.sports_complex",
                        stylers: [{ visibility: "on" }]
                    },
                    { 
                        featureType: "poi.medical", 
                        stylers: [{ visibility: "on" }] 
                    },
                    {
                        featureType: "poi.business",
                        stylers: [{ visibility: "simplified" }]
                    }
                ]
            }}
        >
            <BicyclingLayer autoUpdate />
            <TrafficLayer autoUpdate />
        </GoogleMap>
    )),
    function handleClick(e) {
        e.preventDefault();
    }
);

class MapLayout extends Component {
    render() {
        return (
            <Paper elevation={24}>
                <div className="Map">
                    <Map
                        /* handleMarkerClick={this.handleMarkerClick} */
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh_URgHgmsx6M6uNR7BQ0J9udoszW9zIg"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={
                        <div
                            style={{
                                height: `100%`,
                                borderRadius: "6px",
                                overflow: "hidden"
                            }}
                        />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </Paper>
        );
    }
};

export default MapLayout;
    