import style from './style.module.css'
import { ContainerLogo } from '../../components/ContainerLogo'
import { UserList } from '../../components/UserList'

export const Beneficiarios = () => {
  return (
    <div>
      <ContainerLogo pageName={'Principal / Beneficiários'} />
        <UserList />
    </div>
  )
}
