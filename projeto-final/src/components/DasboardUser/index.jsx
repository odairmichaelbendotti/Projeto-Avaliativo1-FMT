import style from './style.module.css'
import { CiAlignRight } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiSquareCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";

export const DashboardUser = ({ status }) => {
    return (
        <div className={style.dashboardUserContainer}>
            <div className={style.dashboardUserProfile}>
                <div className={style.dashboardUserProfileIntern}>
                    <div className={style.dashboardUserProfileInternText}>
                        <p className={style.dashboardUserProfileInternP}><span>Odair Michael Bendotti</span> ID #157</p>
                        <p>odair.michael@hotmail.com</p>
                    </div>
                    <div className={style.dashboardUserProfileInternBox}>

                        <div className={style.dashboardUserProfileCoordinates}>
                            <div className={style.divCoordinatesIcon}>
                            <BsGeoAlt />
                            <p className={style.textCoordinatesIcon}><i></i><span>Coordenadas</span></p>
                            </div>
                            <div className={style.dashboardUserProfileCoordinatesText}>
                                <p><span>SUL</span>:27°41'52.3"S</p>
                                <p><span>OESTE</span>:48°44'55.7"W</p>
                            </div>
                        </div>

                        <div className={status !== 'Ativo' ? style.dashboardUserProfileInternStatusInactive : style.dashboardUserProfileInternStatusActive}>
                            <p>{status}</p>
                        </div>
                        <div className={`${style.dashboardUserProfileInternBtnOne}`}>
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
                                <tr  className={style.dashboardUserTableBody}>
                                    <td className={style.dashboardUserInterData}>03/05/2024</td>
                                    <td className={style.dashboardUserInterData}>Maio</td>
                                    <td className={style.dashboardUserInterData}>09:22</td>
                                    <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange}`}>
                                        <i><FaRecycle /></i>
                                        <i><TbRecycleOff /></i>
                                    </td>
                                    <td className={`${style.dashboardUserInterData} ${style.dashboardUserInterDataChange} ${style.dashboardUserInterDataChangeIcon}`}>
                                        <i><CiSquareCheck /></i>
                                        <i><MdDeleteOutline /></i>
                                    </td>
                                </tr>
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
