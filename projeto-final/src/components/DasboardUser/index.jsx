import style from './style.module.css'
import { CiAlignRight } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiSquareCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

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
                        <table className={style.dashboardOrdersTable}>
                            <thead className={style.dashboardOrdersTable}>
                                <tr className={style.dashboardOrdersSHead}>
                                    <th className={style.dashboardOrdersHeader}>Data</th>
                                    <th className={style.dashboardOrdersHeader}>Mês</th>
                                    <th className={style.dashboardOrdersHeader}>Horário</th>
                                    <th className={style.dashboardOrdersHeader}>Tipo de resíduo</th>
                                    <th className={style.dashboardOrdersHeader}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={style.dashboardOrdersBody}>
                                    <td className={style.dashboardOrdersData}>03/05/2024</td>
                                    <td className={style.dashboardOrdersData}>maio</td>
                                    <td className={style.dashboardOrdersData}>23:28</td>
                                    <td className={style.dashboardOrdersDataType}>
                                        <i><FaRecycle /></i>
                                        <i><TbRecycleOff /></i>
                                    </td>
                                    <td className={style.dashboardOrdersDataStatus}>
                                        <i className={style.dashboardOrderCheck}><CiSquareCheck /></i>
                                        <i className={style.dashboardOrderRemove}><MdDeleteOutline /></i>
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
