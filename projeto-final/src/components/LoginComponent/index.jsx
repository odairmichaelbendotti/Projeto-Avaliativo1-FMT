import style from './style.module.css'

export const LoginComponent = () => {
  return (
    <section className={style.loginContainer}>
      <div className={style.loginArea}>
        <h3 className={style.loginAreaH3}>Fazer login</h3>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="email" className={style.loginComponentLabel}>Email</label>
          <input type="email" id='email' placeholder='Digite seu e-mail' />
        </div>
        <div className={style.loginComponentLabelInputArea}>
          <label htmlFor="senha" className={style.loginComponentLabel}>Senha</label>
          <input type="password" id='senha' placeholder='Digite sua senha' />
        </div>

        <button className={style.loginAreaButtonLogin}>
          Logar
        </button>
      </div>
    </section>
  )
}
