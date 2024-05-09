import style from './style.module.css';
import { useState } from 'react';
import { pessoas } from '../../data/Usuarios/index';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState(false);

  function verificar() {
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    console.log("Verificando com pessoas carregadas:", pessoas); 

    const encontrar = pessoas.find(pessoa => pessoa.email === email && pessoa.senha.toString() === senha);
    if (encontrar) {
        console.log("Usuário encontrado:", encontrar);
        navigate('/dashboard', { state: { usuario: encontrar } });
        localStorage.setItem('usuario', JSON.stringify(encontrar));
        window.dispatchEvent(new Event('loginSuccess'));
    } else {
        console.log("Erro de login: Usuário não encontrado ou senha incorreta");
        setErroLogin(true);
    }
}


  return (
    <section className={style.loginContainer}>
      <div className={style.loginArea}>
        <h3 className={style.loginAreaH3}>Fazer login</h3>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="email" className={style.loginComponentLabel}>Email</label>
          <input type="email" id='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="senha" className={style.loginComponentLabel}>Senha</label>
          <input type="password" id='senha' placeholder='Digite sua senha' onChange={(e) => setSenha(e.target.value)}/>
        </div>

        <button className={style.loginAreaButtonLogin} onClick={verificar}>
          Logar
        </button>

        {erroLogin && (
          <p className={style.userInfos}>Informações não encontradas no banco de dados.</p>
        )}
      </div>
    </section>
  );
}
