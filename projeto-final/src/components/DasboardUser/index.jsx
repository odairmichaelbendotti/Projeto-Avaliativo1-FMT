import style from './style.module.css'
import { CiAlignRight } from "react-icons/ci";

export const DashboardUser = ({status}) => {
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
                    <div className={style.dashboardUserOrdersGroup}></div>
                </div>
                <div className={style.dashboardUserMap}>

                </div>
            </div>
        </div>
    )
}
