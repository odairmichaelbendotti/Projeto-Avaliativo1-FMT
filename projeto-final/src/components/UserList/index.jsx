import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { FaRecycle } from "react-icons/fa";
import { TbRecycleOff } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import pessoas from '../../data/Usuarios/index';
import { CiUser } from "react-icons/ci";

export const UserList = () => {
  const [pessoas, setPessoas] = useState([]);
  const [editarUsuario, setEditarUsuario] = useState(false)

  useEffect(() => {
    const loadedPessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    setPessoas(loadedPessoas);
  }, []);


  function checkResiduoUser(pessoa) {
    if (pessoa.residuo == "Ambos") {
      return (<>
        <FaRecycle />
        <TbRecycleOff />
      </>)
    } else if (pessoa.residuo == "Reciclável") {
      return <FaRecycle />
    } else {
      return <TbRecycleOff />
    }
  }


  function deleteUser(pessoa, index) {
    const newPessoas = pessoas.filter((element, ordem) => {
      return ordem !== index
    })
    setPessoas(newPessoas)
    localStorage.setItem('pessoas', JSON.stringify(newPessoas))
  }

  function editUser(index) {
    setEditarUsuario(prevIndex => prevIndex == index ? null : index)
  }

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
                <>
                  <tr key={index} className={style.userTableTrBody}>
                    <td className={`${style.userTableTd} ${style.userTableTdName}`}>
                      <div className={style.userTableTdProfileImg}>
                        <i><CiUser /></i>
                      </div>
                      <div>
                        <p><span>{pessoa.nome}</span></p>
                        <p>{pessoa.email}</p>
                        <div>
                          {editarUsuario === index && (
                            <input type="email" placeholder='Informe seu novo e-mail'/>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className={`${style.userTableTd} ${style.testandoUser}`}>{pessoa.sexo}</td>
                    <td className={style.userTableTd}>{pessoa.cpf}</td>
                    <td className={style.userTableTd}>{pessoa.dataNascimento}</td>
                    <td className={style.userTableTd}>{pessoa.endereco.logradouro}</td>
                    <td className={style.userTableTd}>
                      <div className={style.userTableTdMaterial}>
                        {checkResiduoUser(pessoa)}
                      </div>
                    </td>
                    <td className={style.userTableTd}>
                      <div className={style.userTableTdStatus}>
                        <div className={style.userTableTdStatusEdit} onClick={() => editUser(index, pessoa)}><CiEdit /></div>
                        <div className={style.userTableTdStatusDelete} onClick={() => deleteUser(pessoa, index)}><MdDeleteOutline /></div>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}