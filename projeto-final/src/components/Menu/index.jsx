import React, { useState, useEffect } from 'react';  // Importa useState e useEffect de 'react'
import { useNavigate } from 'react-router-dom';  // Importa useNavigate de 'react-router-dom'
import style from './style.module.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { FaHouseUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { ContainerLogo } from '../ContainerLogo/index';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            const usuarioLogado = localStorage.getItem('usuario');
            if (usuarioLogado) {
                const parsedUser = JSON.parse(usuarioLogado);
                setIsUserLoggedIn(true);
                setCurrentUser(parsedUser);
            } else {
                setIsUserLoggedIn(false);
                setCurrentUser(null);
            }
        };

        checkLogin();  // Verifica o login na montagem do componente

        window.addEventListener('loginSuccess', checkLogin);  // Adiciona ouvinte para o evento de login bem-sucedido

        return () => {
            window.removeEventListener('loginSuccess', checkLogin);  // Limpeza: remove o ouvinte ao desmontar o componente
        };
    }, []);

    const logout = () => {
        localStorage.removeItem('usuario');
        setIsUserLoggedIn(false);
        setCurrentUser(null);
        navigate('/login');  // Navega para a página de login após logout
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
                        <i className={style.sideMenuIcon}><LuLayoutDashboard /></i>
                        <p className={style.sideMenuP}>Dashboard</p>
                    </li></Link>
                    {currentUser && currentUser.tipoUsuario === "admin" && (
                        <Link to='beneficiarios'><li className={style.sideMenuItems}>
                            <i className={style.sideMenuIcon}><FaHouseUser /></i>
                            <p className={style.sideMenuP}>Beneficiários</p>
                        </li></Link>
                    )}
                </ul>
                <h2 className={style.titles}>Minha conta</h2>
                <ul>
                    {!isUserLoggedIn && (
                        <Link to='login'><li className={style.sideMenuItems}>
                            <i className={style.sideMenuIcon}><FaRegUserCircle /></i>
                            <p className={style.sideMenuP}>Login</p>
                        </li></Link>
                    )}
                    {isUserLoggedIn && (
                        <li className={style.sideMenuItems} onClick={logout}>
                            <i className={style.sideMenuIcon}><CiLogout /></i>
                            <p className={style.sideMenuP}>Sair</p>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};
