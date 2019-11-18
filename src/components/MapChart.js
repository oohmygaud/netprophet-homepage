import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 15, name: "San Diego", coordinates: [-117.1611, 32.7157] },
  { markerOffset: 15, name: "Greenville", coordinates: [-82.3940, 34.8526] },
  { markerOffset: 15, name: "Ho Chi Minh City", coordinates: [106.6297, 10.8231] },
];

const MapChart = (props) => {
  return (
    <ComposableMap style={{maxWidth: '40%'}}>
      <ZoomableGroup disableZooming disablePanning {...props}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter(d =>
                d.properties.NAME_LONG === 'China'
                || d.properties.NAME_LONG === 'Canada'
                || d.properties.NAME_LONG === 'United States'
                || d.properties.SUBREGION === "Central America"
                || d.properties.SUBREGION === "South-Eastern Asia")
              .map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(234,234,236,0.25)"
                  stroke="rgba(255,255,255,0.25)"
                />
              ))
          }
        </Geographies>

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#FFFFFF" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
