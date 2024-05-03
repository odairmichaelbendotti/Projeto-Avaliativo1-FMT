import style from './style.module.css'
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";



export const UserList = () => {
  return (
    <section>
      <div className={style.userListContainer}>
        <div className={style.tableContainer}>
          <table className={style.userTableSpace}>
            <thead className={style.userTableHeader}>
              <tr className={style.userTableTr}>
                <th className={`${style.userTableTh} ${style.userTableThName}`}>Nome</th>
                <th className={style.userTableTh}>Sexo</th>
                <th className={style.userTableTh}>CPF</th>
                <th className={style.userTableTh}>Nascimento</th>
                <th className={style.userTableTh}>Endereço</th>
                <th className={style.userTableTh}>Materiais de coleta</th>
                <th className={style.userTableTh}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className={style.userTableTrBody}>
                <td className={`${style.userTableTd} ${style.userTableTdName}`}>
                  <div className={style.userTableTdProfileImg}>
                    <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div>
                    <p><span>Odair Michael Bendotti</span></p>
                    <p>odair.michael@hotmail.com</p>
                  </div>

                </td>
                <td className={style.userTableTd}>Masculino</td>
                <td className={style.userTableTd}>053.881.149-88</td>
                <td className={style.userTableTd}>04/05/1995</td>
                <td className={style.userTableTd}>Nicolau Nagib Nahas</td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdMaterial}>
                    <FaRecycle />
                    <TbRecycleOff />
                  </div>
                  </td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdStatus}>
                    <div className={style.userTableTdStatusEdit}><CiEdit /></div>
                    <div className={style.userTableTdStatusDelete}><MdDeleteOutline /></div>
                  </div>
                </td>
              </tr>

              <tr className={style.userTableTrBody}>
                <td className={`${style.userTableTd} ${style.userTableTdName}`}>
                  <div className={style.userTableTdProfileImg}>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div>
                    <p><span>Odair Michael Bendotti</span></p>
                    <p>odair.michael@hotmail.com</p>
                  </div>

                </td>
                <td className={style.userTableTd}>Masculino</td>
                <td className={style.userTableTd}>053.881.149-88</td>
                <td className={style.userTableTd}>04/05/1995</td>
                <td className={style.userTableTd}>Nicolau Nagib Nahas</td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdMaterial}>
                    <FaRecycle />
                    <TbRecycleOff />
                  </div>
                  </td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdStatus}>
                    <div className={style.userTableTdStatusEdit}><CiEdit /></div>
                    <div className={style.userTableTdStatusDelete}><MdDeleteOutline /></div>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
