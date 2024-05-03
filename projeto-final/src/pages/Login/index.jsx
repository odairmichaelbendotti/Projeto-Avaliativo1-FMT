import style from './style.module.css'
import { LoginComponent } from '../../components/LoginComponent/index'
import { CadastroComponent } from '../../components/CadastroComponent';
import { ContainerLogo } from '../../components/ContainerLogo'
import { CiLogin } from "react-icons/ci";
import { GrUserNew } from "react-icons/gr";
import { useState } from 'react';

export const Login = () => {

  const [login, setLogin] = useState(<LoginComponent />)

  return (
    <section>
      <ContainerLogo pageName='Principal / Login' />
      <div className={style.chooseLoginCadastro}>
        <div className={`${style.chooseLoginBox} ${style.active}`} onClick={() => setLogin(<LoginComponent />)}>
          <CiLogin />
          <p>Logar</p>
        </div>
        <div className={style.chooseCadastroBox} onClick={() => setLogin(<CadastroComponent />)}>
          <GrUserNew />
          <p>Criar conta</p>
        </div>
      </div>
      <div className={style.loginAreaContainer}>
        <div className={style.movArea}>
        {login}
        </div>
        <div className={style.bgArea}>
          <div className={style.bgAreaImg}>

          </div>
        </div>
      </div>
    </section>
  )
}