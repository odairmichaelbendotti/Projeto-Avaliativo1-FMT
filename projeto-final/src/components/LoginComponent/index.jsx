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
    const encontrar = pessoas.find((pessoa) => pessoa.email === email && pessoa.senha === senha);
    if (encontrar) {
      navigate('/dashboard', { state: { usuario: encontrar } });
      localStorage.setItem('usuario', JSON.stringify(encontrar));
      window.dispatchEvent(new Event('loginSuccess'));  // Dispara um evento quando o login é bem-sucedido
    } else {
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
