import style from './style.module.css'
import { ContainerLogo } from '../../components/ContainerLogo'
import { DashboardUser } from '../../components/DasboardUser'

export const Dashboard = () => {
  return (
    <div>
      <ContainerLogo pageName={'Principal / Dashboard'}/>
      <DashboardUser status='Ativo'/>
    </div>
  )
}
