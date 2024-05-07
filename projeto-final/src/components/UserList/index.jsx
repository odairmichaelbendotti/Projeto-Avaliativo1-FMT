import React from 'react';
import style from './style.module.css';
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import pessoas from '../../data/Usuarios';  // Caminho ajustado conforme necessário
import { CiUser } from "react-icons/ci";

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
              {pessoas.map((pessoa, index) => (
                <tr key={index} className={style.userTableTrBody}>
                  <td className={`${style.userTableTd} ${style.userTableTdName}`}>
                    <div className={style.userTableTdProfileImg}>
                      <i><CiUser /></i>
                    </div>
                    <div>
                      <p><span>{pessoa.nome}</span></p>
                      <p>{pessoa.email}</p>
                    </div>
                  </td>
                  <td className={style.userTableTd}>{pessoa.sexo}</td>
                  <td className={style.userTableTd}>{pessoa.cpf}</td>
                  <td className={style.userTableTd}>{pessoa.dataNascimento}</td>
                  <td className={style.userTableTd}>{pessoa.endereco.logradouro}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
