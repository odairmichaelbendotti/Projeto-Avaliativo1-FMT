import style from './style.module.css'
import { ContainerLogo } from '../../components/ContainerLogo'
import { PontosColeta } from '../../components/PontosColeta'

export const Informacoes = () => {
  return (
    <div>
      <ContainerLogo pageName={'Principal / Pontos de coleta'}/>
        <PontosColeta />
    </div>
  )
}
