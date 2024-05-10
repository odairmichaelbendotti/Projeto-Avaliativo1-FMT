import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './style.module.css';
import { BsFillPinMapFill } from "react-icons/bs";

export const PontosColeta = () => {
    const navigate = useNavigate();
    const pessoas = JSON.parse(localStorage.getItem('pessoas') || '[]');

    if (!pessoas.length) {
        navigate('/login');
        return <div>Faça login para ver os pontos de coleta</div>;
    }

    const positions = pessoas.map(pessoa => ({
        lat: parseFloat(pessoa.latitude),
        lng: parseFloat(pessoa.longitude),
        label: `${pessoa.nome} - ${pessoa.residuo}`
    }));

    const validPosition = positions.find(pos => !isNaN(pos.lat) && !isNaN(pos.lng));

    if (!validPosition) {
        return <div>Nenhuma localização válida encontrada nos dados dos usuários.</div>;
    }

    return (
        <div className={style.dashboardUserContainer}>
            <div className={style.dashboardUserOrders}>
                <div className={style.dashboardUserOrdersTitleTwo}>
                    <BsFillPinMapFill />
                    <p>Pontos de coleta</p>
                </div>
                <div className={style.dashboardUserOrdersGroup}>
                    <MapContainer center={[validPosition.lat, validPosition.lng]} zoom={11} scrollWheelZoom={false} className={`${style.testandoLol} mapaGrande`}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {positions.map((position, index) => (
                            <Marker key={index} position={[position.lat, position.lng]}>
                                <Popup>{position.label}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};
