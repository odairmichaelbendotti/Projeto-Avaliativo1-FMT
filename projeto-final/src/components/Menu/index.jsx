import style from './style.module.css'
import { LuLayoutDashboard } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { FaHouseUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { ContainerLogo } from '../ContainerLogo/index'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div className={style.sideMenu}>
            <ContainerLogo>
                <div className={style.logo}>
                    <img src="../../../public/logo-center.png" alt="" />
                </div>
                <div className={style.linha}>
                    <hr className={style.hr} />
                </div>
            </ContainerLogo>
            <nav className={style.sideMenuNav}>
                <ul>
                    <Link to='dashboard'><li className={style.sideMenuItems}>
                        <i className={style.sideMenuIcon}><LuLayoutDashboard /></i>
                        <p className={style.sideMenuP}>Dashboard</p>
                    </li></Link>
                    <Link to='informacoes'><li className={style.sideMenuItems}>
                        <i className={style.sideMenuIcon}><GoGraph /></i>
                        <p className={style.sideMenuP}>Informações</p>
                    </li></Link>
                    <Link to='beneficiarios'><li className={style.sideMenuItems}>
                        <i className={style.sideMenuIcon}><FaHouseUser /></i>
                        <p className={style.sideMenuP}>Beneficiários</p>
                    </li></Link>
                </ul>
                <h2 className={style.titles}>Minha conta</h2>
                <ul>
                    <li className={style.sideMenuItems}>
                        <i className={style.sideMenuIcon}><FaRegUserCircle /></i>
                        <p className={style.sideMenuP}>Login</p>
                    </li>
                    <li className={style.sideMenuItems}>
                        <i className={style.sideMenuIcon}><CiLogout /></i>
                        <p className={style.sideMenuP}>Sair</p>
                    </li>
                </ul>
                <div className={style.cardUserContainer}>
                    <div className={style.cardUser}>
                        <i className={style.cardUserIcon}><FaUserCheck /></i>
                        <div className={style.cardUserLogado}>
                        <p>Odair Michael Bendotti</p>
                        <p>ID do usuário: #157</p>
                        <div className={style.cardUserBtnClass}>
                        <FaStar /><FaStar /><FaStar />
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
