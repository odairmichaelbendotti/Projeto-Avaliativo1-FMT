import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import pessoas from '../../data/Usuarios';

export const CadastroComponent = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [pessoasState, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erroNoEmail, setErroNoEmail] = useState(false);
  const [erroNoCpf, setErroNoCpf] = useState(false)
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [residuo, setResiduo] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const loadedPessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    setPessoas(loadedPessoas);
  }, []);

  function verificarEmail() {
    const emailExiste = pessoasState.some(pessoa => pessoa.email.toLowerCase() === email.toLowerCase());
    setErroNoEmail(emailExiste);
  }

  function verificarCpf() {
    const cpfExiste = pessoasState.some(pessoa => pessoa.cpf.toLowerCase() === cpf.toLowerCase());
    setErroNoCpf(cpfExiste);
  }

  function cadastrar() {
    const novoUsuario = {
      nome, email, senha, cep, cidade, bairro, estado, cpf, sexo, residuo, dataNascimento, latitude, longitude
    };

    const atualizadoPessoas = [...pessoasState, novoUsuario];
    setPessoas(atualizadoPessoas);
    localStorage.setItem('pessoas', JSON.stringify(atualizadoPessoas));
    alert('Cadastro realizado com sucesso!');
    setActiveSection(1);
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
            setLogradouro(data.logradouro);
          } else {
            alert('CEP não encontrado!');
          }
        }).catch(() => {
          alert('Erro ao buscar o CEP!');
        });
    }
  }

  function cadastrar() {
    const novoUsuario = {
      nome,
      email,
      senha,
      sexo,
      residuo,
      cpf,
      dataNascimento,
      latitude,
      longitude,
      endereco: {
        cep,
        cidade,
        bairro,
        estado,
        logradouro,
        numero
      }
    };

    const atualizadoPessoas = [...pessoasState, novoUsuario];
    setPessoas(atualizadoPessoas);
    localStorage.setItem('pessoas', JSON.stringify(atualizadoPessoas));

    alert('Cadastro realizado com sucesso!');
    setActiveSection(1);
  }

  return (
    <section className={style.loginContainer}>
      <div className={style.loginArea}>
        <h3 className={style.loginAreaH3}>Criar conta</h3>

        {/* Seção 1 - Informações Pessoais */}
        <div className={activeSection === 1 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="name">Nome completo</label>
            <input type="text" id='name' placeholder='Digite seu nome completo' value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={verificarEmail} required />
            {erroNoEmail && <div className={style.emailErro}><p>E-mail já cadastrado.</p></div>}
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="password">Senha</label>
            <input type="password" id='password' placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="confirmpassword">Confirme a senha</label>
            <input type="password" id='confirmpassword' placeholder='Confirme sua senha' value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required />
          </div>
          {erroNoEmail == true ? (
            <button className={style.loginAreaButtonLoginVerifique}>Verifique seu cadastro</button>
          ) : (
            <button className={style.loginAreaButtonLogin} onClick={podeAvancar}>Próximo</button>
          )}

        </div>

        {/* Seção 2 - Endereço Completo (Preenchido automaticamente pelo CEP) */}
        <div className={activeSection === 2 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cep">CEP</label>
            <input type="text" id='cep' placeholder='Digite seu CEP' value={cep} onChange={(e) => setCep(e.target.value)} onBlur={handleCepBlur} required />
          </div>

          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id='bairro' value={bairro}
              readOnly />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id='cidade' value={cidade} readOnly />
          </div>

          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="estado">Estado</label>
            <input type="text" id='estado' value={estado} readOnly />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="logradouro">Logradouro</label>
            <input type="text" id='logradouro' value={logradouro} readOnly />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="numero">Número</label>
            <input type="number" id='numero' value={numero} onChange={(e) => setNumero(e.target.value)} />
          </div>
          <button className={style.loginAreaButtonLogin} onClick={podeAvancar}>Próximo</button>
        </div>

        {/* Seção 3 - CPF, Sexo e Botão de Cadastro */}
        <div className={activeSection === 3 ? style.sectionVisible : style.sectionHidden}>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="latitude">Latitude:</label>
            <input type="text" id='latitude' value={latitude} onChange={(e) => setLatitude(e.target.value)} />
          </div>

          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="longitude">Longitude:</label>
            <input type="text" id='longitude' value={longitude} onChange={(e) => setLongitude(e.target.value)} />
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} onBlur={verificarCpf} required />
            {erroNoCpf && <div className={style.emailErro}><p>CPF já cadastrado.</p></div>}
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="sexo">Sexo</label>
            <select id='sexo' value={sexo} onChange={(e) => setSexo(e.target.value)} required>
              <option value="">Selecione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="nascimento">Data de nascimento</label>
            <input type="text" id='nascimento' value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
          </div>

          <div className={style.loginComponentLabelInputArea}>
            <label htmlFor="residuo">Tipo de Resíduo</label>
            <select id='residuo' value={residuo} onChange={(e) => setResiduo(e.target.value)} required>
              <option value="">Selecione...</option>
              <option value="Reciclável">Reciclável</option>
              <option value="Não reciclável">Não reciclável</option>
              <option value="Ambos">Ambos</option>
            </select>
          </div>

          {erroNoCpf == true ? (
            <button className={style.loginAreaButtonLoginVerifique}>Verifique seu cadastro</button>
          ): (
            <button className={style.loginAreaButtonLogin} onClick={cadastrar}>Cadastrar</button>
          )}



        </div>
      </div>
    </section>
  );
};

export default CadastroComponent;