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
  const [editarUsuario, setEditarUsuario] = useState(null);
  const [editEmail, setEditEmail] = useState('');
  const [editLogradouro, setEditLogradouro] = useState('');

  useEffect(() => {
    const loadedPessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    setPessoas(loadedPessoas);
  }, []);

  function checkResiduoUser(pessoa) {
    if (pessoa.residuo === "Ambos") {
      return (<><FaRecycle /><TbRecycleOff /></>);
    } else if (pessoa.residuo === "Reciclável") {
      return <FaRecycle />;
    } else {
      return <TbRecycleOff />;
    }
  }

  function deleteUser(index) {
    const newPessoas = pessoas.filter((_, ordem) => ordem !== index);
    setPessoas(newPessoas);
    localStorage.setItem('pessoas', JSON.stringify(newPessoas));
  }

  function editUser(index) {
    setEditarUsuario(index);
    setEditEmail(pessoas[index].email);
    setEditLogradouro(pessoas[index].endereco.logradouro);
  }

  function saveEdit(index) {
    const updatedPessoas = pessoas.map((pessoa, idx) => {
      if (idx === index) {
        return { ...pessoa, email: editEmail, endereco: { ...pessoa.endereco, logradouro: editLogradouro } };
      }
      return pessoa;
    });
    setPessoas(updatedPessoas);
    localStorage.setItem('pessoas', JSON.stringify(updatedPessoas));
    setEditarUsuario(null);
  }

  return (
    <section className={style.userListContainer}>
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
                <td className={style.userTableTd}>
                  <div className={style.userTableTdProfileImg}>
                    <i><CiUser /></i>
                    <div>
                      <p><span>{pessoa.nome}</span></p>
                      {editarUsuario === index ? (
                        <input
                          type="email"
                          value={editEmail}
                          onChange={(e) => setEditEmail(e.target.value)}
                          onBlur={() => saveEdit(index)}
                          className={style.userEmailEditInput}
                        />
                      ) : (
                        <p>{pessoa.email}</p>
                      )}
                  </div>
                </div>
                </td>
                <td className={style.userTableTd}>{pessoa.sexo}</td>
                <td className={style.userTableTd}>{pessoa.cpf}</td>
                <td className={style.userTableTd}>{pessoa.dataNascimento}</td>
                <td className={style.userTableTd}>
                  {editarUsuario === index ? (
                    <input
                      type="text"
                      value={editLogradouro}
                      onChange={(e) => setEditLogradouro(e.target.value)}
                      onBlur={() => saveEdit(index)}
                      className={style.userEmailEditInput}
                    />
                  ) : (
                    <p>{pessoa.endereco.logradouro}</p>
                  )}
                </td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdMaterial}>
                    {checkResiduoUser(pessoa)}
                  </div>
                </td>
                <td className={style.userTableTd}>
                  <div className={style.userTableTdStatus}>
                    <CiEdit onClick={() => editUser(index)} className={style.editIcon} />
                    <MdDeleteOutline onClick={() => deleteUser(index)} className={style.deleteIcon} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
