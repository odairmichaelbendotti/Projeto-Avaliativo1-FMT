import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './style.module.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { FaHouseUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { ContainerLogo } from '../ContainerLogo/index';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export const Menu = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const user = localStorage.getItem('usuario');
            if (user) {
                const parsedUser = JSON.parse(user);
                setIsUserLoggedIn(true);
                setCurrentUser(parsedUser);
            } else {
                setIsUserLoggedIn(false);
                setCurrentUser(null);
            }
        };

        checkLoginStatus();

        const handleLoginSuccess = () => checkLoginStatus();
        window.addEventListener('loginSuccess', handleLoginSuccess);

        return () => {
            window.removeEventListener('loginSuccess', handleLoginSuccess);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem('usuario');
        setIsUserLoggedIn(false);
        setCurrentUser(null);
        navigate('/login');
    };

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
                        <div className={style.ordemItem}>
                            <LuLayoutDashboard />
                            <p>Dashboard</p>
                        </div>
                    </li></Link>
                    {currentUser && currentUser.tipoUsuario === "admin" && (
                        <Link to='beneficiarios'><li className={style.sideMenuItems}>
                            <div className={style.ordemItem}>
                                <FaHouseUser />
                                <p>Beneficiários</p>
                            </div>
                        </li></Link>
                    )}
                    {currentUser && currentUser.tipoUsuario === "admin" && (
                        <Link to='informacoes'><li className={style.sideMenuItems}>
                            <div className={style.ordemItem}>
                                <CiLocationOn />
                                <p>Pontos</p>
                            </div>
                        </li></Link>
                    )}
                </ul>

                <h2 className={style.titles}>Minha conta</h2>
                <ul>
                    {!isUserLoggedIn && (
                        <Link to='/login'><li className={style.sideMenuItems}>
                            <div className={style.ordemItem}>
                                <FaRegUserCircle />
                                <p>Login</p>
                            </div>
                        </li></Link>
                    )}
                    {isUserLoggedIn && currentUser && (
                        <>
                            <li className={style.sideMenuItems} onClick={logout}>
                                <div className={style.ordemItem}>
                                    <CiLogout />
                                    <p>Sair</p>
                                </div>
                            </li>
                            {isUserLoggedIn && currentUser && currentUser.endereco && (
                                <div className={style.divUserInfos}>
                                    <div className={style.itensCardUserMenu}>
                                        <p className={style.divUserInfosName}>{currentUser.nome}</p>
                                    </div>
                                    <div className={style.divUserInfosUsuResto}>
                                        <div className={style.itensCardUserMenu}>
                                            <FaLocationDot />
                                            <p className={style.divUserInfosResto}>{currentUser.endereco.logradouro}, nº {currentUser.endereco.numero}</p>
                                        </div>
                                        <div className={style.itensCardUserMenu}>
                                            <MdOutlineLocationCity />
                                            <p className={style.divUserInfosResto}>{currentUser.endereco.cidade}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};
