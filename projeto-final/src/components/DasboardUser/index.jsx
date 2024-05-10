import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { CiAlignRight, CiSquareCheck, CiViewList } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillPinMapFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const DashboardUser = () => {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    const [coletar, setColetar] = useState(() => {
        const savedColetas = localStorage.getItem(`coletas-${usuario.cpf}`);
        return savedColetas ? JSON.parse(savedColetas) : [];
    });
    const [diaColeta, setDiaColeta] = useState('Terça-feira');
    const [tipoResiduo, setTipoResiduo] = useState('Ambos');

    useEffect(() => {
        localStorage.setItem(`coletas-${usuario.cpf}`, JSON.stringify(coletar));
    }, [coletar]);

    if (!usuario.cpf) {
        navigate('/login');
        return <div>Faça login</div>;
    }

    function dataInfos() {
        const dataAtual = new Date();
        const novaDiaSolicitacao = `${dataAtual.getDate()} de ${dataAtual.toLocaleString('pt-BR', { month: 'long' })}`;
        setColetar([...coletar, {
            cpf: usuario.cpf,
            solicitacao: novaDiaSolicitacao,
            dia: diaColeta,
            tipoResiduo: tipoResiduo
        }]);
    }

    function deletar(index) {
        setColetar(coletar.filter((_, ordem) => ordem !== index));
    }

    function tipoLixo(tipoResiduo) {
        if (tipoResiduo === 'Reciclável') {
            return <i><FaRecycle /></i>
        } else if (tipoResiduo === 'Não reciclável') {
            return <i><TbRecycleOff /></i>
        } else {
            return <><i><FaRecycle /></i><i><TbRecycleOff /></i></>;
        }
    }

    function limiteAtingido() {
        return (
            <div className={style.limiteAtingido}>
                <p>Aprove alguma coleta solicitada para continuar solicitando.</p>
            </div>
        );
    }

    const position1 = [parseFloat(usuario.latitude), parseFloat(usuario.longitude)]

    return (
        <div className={style.dashboardUserContainer}>
            <div className={style.dashboardUserProfile}>
                <div className={style.dashboardUserProfileIntern}>
                    <div className={style.dashboardUserProfileInternText}>
                        <p className={style.dashboardUserProfileInternP}><span>{usuario.nome}</span></p>
                        <p>{usuario.email}</p>
                    </div>
                    <div className={style.dashboardUserProfileInternBox}>
                        <div className={style.dashboardUserProfileCoordinates}>
                            <div className={style.dashboardUserProfileTipoLixo}>
                                <label htmlFor="diaColeta">Dia de coleta</label>
                                <select id="diaColeta" value={diaColeta} onChange={(e) => setDiaColeta(e.target.value)}>
                                    <option value="Terça-feira">Terças-feiras</option>
                                    <option value="Quinta-feira">Quintas-feiras</option>
                                    <option value="Domingo">Domingos</option>
                                </select>
                            </div>
                            <div className={style.dashboardUserProfileTipoLixo}>
                                <label htmlFor="residuo">Tipo de resíduo</label>
                                <select id="residuo" value={tipoResiduo} onChange={(e) => setTipoResiduo(e.target.value)}>
                                    <option value="Reciclável">Reciclável</option>
                                    <option value="Não reciclável">Não reciclável</option>
                                    <option value="Ambos">Ambos</option>
                                </select>
                            </div>
                        </div>
                        {coletar.length < 6 ? (
                            <div className={`${style.dashboardUserProfileInternBtnOne}`} onClick={dataInfos}>
                                <i><CiAlignRight /></i>
                                <p>Solicitar coleta</p>
                            </div>
                        ) : (
                            <div className={`${style.dashboardUserProfileInternBtnOneColor} ${style.lockColor}`}>
                            <i><GiPadlock /></i>
                            <p>Solicitar coleta</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.dashboardUserDetailsContainer}>
                <div className={style.dashboardUserOrders}>
                    <div className={style.dashboardUserOrdersTitleTwo}>
                        <i><CiViewList /></i>
                        <p>Coletas solicitadas</p>
                    </div>
                    <div className={style.dashboardUserOrdersGroup}>
                        <table className={style.dashboardUserTable}>
                            <thead>
                                <tr>
                                    <th className={style.dashboardUserInterHeader}>Solicitante</th>
                                    <th className={style.dashboardUserInterHeader}>Dia</th>
                                    <th className={style.dashboardUserInterHeader}>Dia coleta</th>
                                    <th className={style.dashboardUserInterHeader}>Tipo de lixo</th>
                                    <th className={style.dashboardUserInterHeader}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coletar.map((item, index) => (
                                    <tr key={index}>
                                        <td className={style.dashboardUserInterData}>{item.cpf}</td>
                                        <td className={style.dashboardUserInterData}>{item.solicitacao}</td>
                                        <td className={style.dashboardUserInterData}>{item.dia}</td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange}`}>
                                            {tipoLixo(item.tipoResiduo)}
                                        </td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange} ${style.dashboardUserInterDataChangeIcon}`}>
                                            <i><CiSquareCheck onClick={() => deletar(index)} /></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {coletar.length == 6 && limiteAtingido()}
                    </div>
                </div>
                <div className={style.dashboardUserOrders}>
                    <div className={style.dashboardUserOrdersTitleTwo}>
                        <BsFillPinMapFill />
                        <p>Local de coleta</p>
                    </div>
                    <div className={style.dashboardUserOrdersGroup}>
                    <MapContainer center={position1} zoom={13} scrollWheelZoom={false} className={`${style.testandoLol} mapaPequeno`}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position1}>
                                <Popup>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

