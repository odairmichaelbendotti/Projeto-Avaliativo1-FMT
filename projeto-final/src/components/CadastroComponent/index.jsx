import React, { useState, useEffect } from 'react';
import style from './style.module.css';

export const CadastroComponent = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erroNoEmail, setErroNoEmail] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [residuo, setResiduo] = useState('');

  useEffect(() => {
    const loadedPessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    setPessoas(loadedPessoas);
  }, []);

  function verificarEmail() {
    const emailExiste = pessoas.some(pessoa => pessoa.email.toLowerCase() === email.toLowerCase());
    setErroNoEmail(emailExiste);
  }

  function podeAvancar() {
    let valida = false;
    if (activeSection === 1) {
      valida = nome && email && senha && confirmaSenha && senha === confirmaSenha && !erroNoEmail;
    } else if (activeSection === 2) {
      valida = cep && cidade && bairro && estado;
    } else if (activeSection === 3) {
      valida = cpf && sexo;
    }

    if (valida) {
      setActiveSection(activeSection + 1);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  function handleCepBlur() {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            setCidade(data.localidade);
            setBairro(data.bairro);
            setEstado(data.uf);
          } else {
            alert('CEP não encontrado!');
          }
        }).catch(() => {
          alert('Erro ao buscar o CEP!');
        });
    }
  }

  function cadastrar() {
    const novoUsuario = { nome, email, senha, cep, cidade, bairro, estado, cpf, sexo, residuo };
    const atualizadoPessoas = [...pessoas, novoUsuario];
    setPessoas(atualizadoPessoas);
    localStorage.setItem('pessoas', JSON.stringify(atualizadoPessoas));
    alert('Cadastro realizado com sucesso!');
    setActiveSection(1); // Resetar a seção após cadastro
  }

  return (
    <section className={style.loginContainer}>
      <div className={style.loginArea}>
        <h3 className={style.loginAreaH3}>Criar conta</h3>

        {/* Seção 1 - Informações Pessoais */}
        <div className={activeSection === 1 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="name">Nome completo</label>
            <input type="text" id='name' placeholder='Digite seu nome completo' value={nome} onChange={(e) => setNome(e.target.value)} required/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={verificarEmail} required/>
            {erroNoEmail && <div className={style.emailErro}><p>E-mail já cadastrado.</p></div>}
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="password">Senha</label>
            <input type="password" id='password' placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} required/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="confirmpassword">Confirme a senha</label>
            <input type="password" id='confirmpassword' placeholder='Confirme sua senha' value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required/>
          </div>
          <button className={style.loginAreaButtonLogin} onClick={podeAvancar}>Próximo</button>
        </div>

        {/* Seção 2 - Endereço Completo (Preenchido automaticamente pelo CEP) */}
        <div className={activeSection === 2 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cep">CEP</label>
            <input type="text" id='cep' placeholder='Digite seu CEP' value={cep} onChange={(e) => setCep(e.target.value)} onBlur={handleCepBlur} required/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id='bairro' value={bairro} readOnly/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id='cidade' value={cidade} readOnly/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="estado">Estado</label>
            <input type="text" id='estado' value={estado} readOnly/>
          </div>
          <button className={style.loginAreaButtonLogin} onClick={podeAvancar}>Próximo</button>
        </div>

        {/* Seção 3 - CPF, Sexo e Botão de Cadastro */}
        <div className={activeSection === 3 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="sexo">Sexo</label>
            <select id='sexo' value={sexo} onChange={(e) => setSexo(e.target.value)} required>
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <button className={style.loginAreaButtonLogin} onClick={cadastrar}>Cadastrar</button>
        </div>
      </div>
    </section>
  );
};

export default CadastroComponent;
