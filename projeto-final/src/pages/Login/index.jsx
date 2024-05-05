import style from './style.module.css';
import { LoginComponent } from '../../components/LoginComponent/index';
import { CadastroComponent } from '../../components/CadastroComponent';
import { ContainerLogo } from '../../components/ContainerLogo';
import { CiLogin } from "react-icons/ci";
import { GrUserNew } from "react-icons/gr";
import { useState } from 'react';

export const Login = () => {
  const [currentComponent, setCurrentComponent] = useState('login'); // Estado para rastrear o componente ativo

  // Função para mudar o componente e marcar como ativo
  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  }

  return (
    <section>
      <ContainerLogo pageName='Principal / Login' />
      <div className={style.chooseLoginCadastro}>
        <div 
          className={`${style.chooseLoginBox} ${currentComponent === 'login' ? style.active : ''}`} 
          onClick={() => handleComponentChange('login')}>
          <CiLogin />
          <p>Logar</p>
        </div>
        <div 
          className={`${style.chooseCadastroBox} ${currentComponent === 'cadastro' ? style.active : ''}`} 
          onClick={() => handleComponentChange('cadastro')}>
          <GrUserNew />
          <p>Criar conta</p>
        </div>
      </div>
      <div className={style.loginAreaContainer}>
        <div className={style.movArea}>
          {currentComponent === 'login' ? <LoginComponent /> : <CadastroComponent />}
        </div>
        <div className={style.bgArea}>
          <div className={style.bgAreaImg}>

          </div>
        </div>
      </div>
    </section>
  );
}
