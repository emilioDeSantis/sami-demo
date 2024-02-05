import React, { useState, useCallback } from "react";
import Map, { Marker } from "react-map-gl"; // Import Marker
import AsyncSelect from "react-select/async";
import "mapbox-gl/dist/mapbox-gl.css";
import ScrollToContainer from "./ScrollToContainer";

export const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZW1pbGlvNTEzOSIsImEiOiJjbGU3azl0dTQwNmgwM3ZyMjMxcnJzN2dxIn0.G_NwReZ5-_2GvrkgwePlYQ";

function LocationSelector({ location, setLocation, step, setStep }) {
    const [viewport, setViewport] = useState({
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
    });

    const loadOptions = async (inputValue) => {
        const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                inputValue
            )}.json?` + `access_token=${MAPBOX_TOKEN}&country=us&types=address`
        );
        const data = await response.json();
        return data.features.map((feature) => ({
            label: feature.place_name,
            value: feature.center, // Longitude and latitude
        }));
    };

    const handleInputChange = useCallback((selectedOption) => {
        const [longitude, latitude] = selectedOption.value;
        setViewport({
            longitude,
            latitude,
            zoom: 12,
        });
        setLocation({ longitude, latitude });
        setStep(3); // Moves to the next step after selection
    }, [setLocation, setStep]);

    const handleFocus = useCallback(() => {
        setStep(2); // Sets step to 2 when the input is focused
    }, [setStep]);

    const handleClick = useCallback(() => {
        setStep(2); // Sets step to 2 when the map is clicked
    }, [setStep]);

    const mapKey = location
        ? `map-${location.longitude}-${location.latitude}`
        : "initial-map";

    return (
        <div
            style={{
                marginTop: "5rem",
                width: "100%",
                position: "relative",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    paddingInline: "1.6rem",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onChange={handleInputChange}
                    onFocus={handleFocus} // Handle focus here
                    placeholder="Enter event address"
                    styles={{
                        control: (base) => ({
                            ...base,
                            fontSize: "1rem",
                            zIndex: 10,
                            opacity: step === 2 ? 1 : 0.5,
                        }),
                    }}
                />
            </div>
            <div
                style={{
                    paddingInline: "1.6rem",
                    width: "100%",
                    aspectRatio: "2",
                    marginTop: "3rem",
                }}
            >
                {location && (
                    <Map
                        key={mapKey}
                        mapboxAccessToken={MAPBOX_TOKEN}
                        initialViewState={viewport}
                        style={{ width: "100%", height: "100%" }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        onClick={handleClick} // Handle click here
                    >
                        {location && (
                            <Marker
                            longitude={location.longitude}
                            latitude={location.latitude}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    transform: 'translate(-50%, -26px)', // Centers the top of the SVG over the location point
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '30px', }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                        </Marker>
                        )}
                    </Map>
                )}
            </div>
        </div>
    );
}

export default LocationSelector;
