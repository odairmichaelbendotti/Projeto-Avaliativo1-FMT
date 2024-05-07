import style from './style.module.css'
import { CiAlignRight } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiSquareCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'

export const DashboardUser = ({ status }) => {

    const [coletar, setColetar] = useState([])
    const [diaSolicitacao, setDiaSolicitacao] = useState()
    const [mesColeta, setMesColeta] = useState()
    const [horarioColeta, setHorarioColeta] = useState()

    function dataInfos() {
        const dataAtual = new Date()
        setDiaSolicitacao(dataAtual.getDate())
        setMesColeta(dataAtual.toLocaleString('pt-BR', { month: 'long' }))
        setHorarioColeta(dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }))  
        setColetar([...coletar, { 
            data: {diaSolicitacao}, 
            mes: {mesColeta}, 
            horario: {horarioColeta} 
        }]) 
    }

    
    function deletar(index){
        console.log(`Deletando o item ${index}`)
        const deletarColetas = coletar.filter((item, ordem) => ordem !== index)
        setColetar(deletarColetas)
    }

    const navigate = useNavigate()
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        navigate('/login');
        return <div>Faça login</div>;
    }



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
                            <div className={style.divCoordinatesIcon}>
                                <p className={style.textCoordinatesIcon}><i></i><span>{usuario.endereco.localidade}</span></p>
                            </div>
                            <div className={style.dashboardUserProfileCoordinatesText}>
                                <p>{usuario.endereco.logradouro}, </p>
                                <p><span>nº </span>{usuario.endereco.numero}</p>
                            </div>
                        </div>

                        <div className={status !== 'Ativo' ? style.dashboardUserProfileInternStatusInactive : style.dashboardUserProfileInternStatusActive}>
                            <p>{status}</p>
                        </div>
                        <div className={`${style.dashboardUserProfileInternBtnOne}`} onClick={dataInfos}>
                            <i><CiAlignRight /></i>
                            <p>Solicitar coleta</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.dashboardUserDetailsContainer}>
                <div className={style.dashboardUserOrders}>
                    <p className={style.dashboardUserOrdersTitle}>Coletas solicitadas</p>
                    <div className={style.dashboardUserOrdersGroup}>
                        <table className={style.dashboardUserTable}>
                            <thead className={style.dashboardUserTableHeader}>
                                <tr>
                                    <th className={style.dashboardUserInterHeader}>Data</th>
                                    <th className={style.dashboardUserInterHeader}>Mês</th>
                                    <th className={style.dashboardUserInterHeader}>Horário</th>
                                    <th className={style.dashboardUserInterHeader}>Tipo de lixo</th>
                                    <th className={style.dashboardUserInterHeader}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coletar.map((item, index) => (
                                    <tr className={style.dashboardUserTableBody} key={index}>
                                        <td className={style.dashboardUserInterData}>{diaSolicitacao}</td>
                                        <td className={style.dashboardUserInterData}>{mesColeta}</td>
                                        <td className={style.dashboardUserInterData}>{horarioColeta}</td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange}`}>
                                            <i><FaRecycle /></i>
                                            <i><TbRecycleOff /></i>
                                        </td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange} ${style.dashboardUserInterDataChangeIcon}`}>
                                            <i><CiSquareCheck /></i>
                                            <i><MdDeleteOutline onClick={() => deletar(index)}/></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.dashboardUserMap}>

                </div>
            </div>
        </div>
    )
}
