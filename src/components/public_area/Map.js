import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import axios from "axios";

export default function Map() {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const getMarkersAvalivable = async () => {
            const response = await axios.get("http://localhost:3000/list_institution/");
            const markersAvalivable = response.data.data.map(elem => (
                <Marker key={elem.id} position={[elem.latitude, elem.longitude]} ><Popup>{elem.name}</Popup></Marker>
            ));
            setMarkers(markersAvalivable);
        }
        getMarkersAvalivable();
    }, []);

    return (
        <MapContainer center={[-6.8928558299, -38.5587170484]} zoom={13} scrollWheelZoom={true} style={{height: "100%", width: "100%"}}>
            {markers}
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}