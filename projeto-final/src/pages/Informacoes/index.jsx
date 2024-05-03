import style from './style.module.css'
import { ContainerLogo } from '../../components/ContainerLogo'
import { UserList } from '../../components/UserList'

export const Informacoes = () => {
  return (
    <div>
      <ContainerLogo pageName={'Principal / Informações'}/>
        <UserList />
    </div>
  )
}
