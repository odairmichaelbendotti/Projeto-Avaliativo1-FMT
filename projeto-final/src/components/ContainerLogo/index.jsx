import style from './style.module.css'

export const ContainerLogo = ({children, pageName}) => {
  return (
    <div className={style.containerLogo}>
      <p className={style.pageLocalizacao}>{pageName}</p>
      {children}
    </div>
  )
}
