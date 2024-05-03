import style from './style.module.css'

export const CadastroComponent = () => {
  return (
    <section className={style.loginContainer}>
      <div className={style.loginArea}>
        <h3 className={style.loginAreaH3}>Criar conta</h3>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="name" className={style.loginComponentLabel}>Nome completo</label>
          <input type="text" id='name' placeholder='Digite seu nome completo' />
        </div>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="email" className={style.loginComponentLabel}>E-mail</label>
          <input type="email" id='email' placeholder='Digite seu e-mail' />
        </div>
        <div className={`${style.loginComponentLabelInputAreaTwo}`}>
          <div className={style.internFlexBox}>
            <label htmlFor="password" className={style.loginComponentLabel}>Senha</label>
            <input type="password" id='password' placeholder='Digite sua senha' />
          </div>
          <div className={style.internFlexBox}>
            <label htmlFor="confirmpassword" className={style.loginComponentLabel}>Confirme a senha</label>
            <input type="password" id='confirmpassword' placeholder='Confirme sua senha' />
          </div>
        </div>

        <div className={`${style.loginComponentLabelInputAreaTwo}`}>
          <div className={style.internFlexBox}>
            <label htmlFor="cpf" className={style.loginComponentLabel}>CPF</label>
            <input type="number" id='cpf' placeholder='Digite seu CPF' />
          </div>
          <div className={style.internFlexBox}>
            <label htmlFor="confirmpassword" className={style.loginComponentLabel}>Informe seu sexo</label>
            <select id='sexo'>
            <option value="masc">Masculino</option>
            <option value="masc">Feminino</option>
            </select>
          </div>
        </div>

        <button className={style.loginAreaButtonLogin}>
          Criar cadastro
        </button>
      </div>
    </section>
  )
}
