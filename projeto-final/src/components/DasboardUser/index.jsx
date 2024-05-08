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

export const DashboardUser = () => {

    const [coletar, setColetar] = useState([])
    const [diaSolicitacao, setDiaSolicitacao] = useState()
    const [mesColeta, setMesColeta] = useState()
    const [diaColeta, setDiaColeta] = useState('Terça-feira')
    const [tipoResiduo, setTipoResiduo] = useState('Ambos')

    function dataInfos() {
        const dataAtual = new Date();
        const novaDiaSolicitacao = `${dataAtual.getDate()} de ${dataAtual.toLocaleString('pt-BR', { month: 'long' })}`;
        setDiaSolicitacao(novaDiaSolicitacao);

        setColetar([...coletar, {
            solicitacao: novaDiaSolicitacao,
            dia: diaColeta,
            tipoResiduo: tipoResiduo 
        }]);
    }

    function deletar(index) {
        console.log(`Deletando o item ${index}`)
        const deletarColetas = coletar.filter((item, ordem) => ordem !== index)
        setColetar(deletarColetas)
    }


    function tipoLixo(tipoResiduo){
        if (tipoResiduo === 'Reciclável'){
            return <i><FaRecycle /></i>
        } else if (tipoResiduo === 'Não reciclável'){
           return <i><TbRecycleOff /></i>
        } else {
            return (
            <>
                <i><FaRecycle /></i>
                <i><TbRecycleOff /></i>
            </>
            )
        }
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

                        {/* <div className={style.dashboardUserProfileCoordinates}>
                            <div className={style.divCoordinatesIcon}>
                                <p className={style.textCoordinatesIcon}><i></i><span>{usuario.endereco.localidade}</span></p>
                            </div>
                            <div className={style.dashboardUserProfileCoordinatesText}>
                                <p>{usuario.endereco.logradouro}, </p>
                                <p><span>nº </span>{usuario.endereco.numero}</p>
                            </div>
                        </div> */}

                        {/* <div className={status !== 'Ativo' ? style.dashboardUserProfileInternStatusInactive : style.dashboardUserProfileInternStatusActive}>
                            <p>{status}</p>
                        </div> */}

                        <div className={style.dashboardUserProfileCoordinates}>
                            <div className={style.dashboardUserProfileTipoLixo}>
                                <label htmlFor="diaColeta">Dia de coleta</label>
                                <select id="diaColeta" value={diaColeta} onChange={(e) => setDiaColeta(e.target.value)} onClick={() => console.log(diaColeta)}>
                                    <option value="Terça-feira">Terças-feiras</option>
                                    <option value="Quinta-feira">Quintas-feira</option>
                                    <option value="Domingo">Domingos</option>
                                </select>
                            </div>
                        </div>

                        <div className={style.dashboardUserProfileCoordinates}>
                            <div className={style.dashboardUserProfileTipoLixo}>
                                <label htmlFor="residuo">Tipo de resíduo</label>
                                <select id="residuo" value={tipoResiduo} onChange={(e) => setTipoResiduo(e.target.value)} onClick={() => console.log(tipoResiduo)}>
                                    <option value="Reciclável">Reciclável</option>
                                    <option value="Não reciclável">Não reciclável</option>
                                    <option value="Ambos">Ambos</option>
                                </select>
                            </div>
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
                                    <th className={style.dashboardUserInterHeader}>Solicitação</th>
                                    <th className={style.dashboardUserInterHeader}>Dia coleta</th>
                                    <th className={style.dashboardUserInterHeader}>Tipo de lixo</th>
                                    <th className={style.dashboardUserInterHeader}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coletar.map((item, index) => (
                                    <tr className={style.dashboardUserTableBody} key={index}>
                                        <td className={style.dashboardUserInterData}>{item.solicitacao}</td>
                                        <td className={style.dashboardUserInterData}>{item.dia}</td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange}`}>
                                            {tipoLixo(item.tipoResiduo)}
                                        </td>
                                        <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange} ${style.dashboardUserInterDataChangeIcon}`}>
                                            <i><CiSquareCheck /></i>
                                            <i><MdDeleteOutline onClick={() => deletar(index)} /></i>
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
