# Informações iniciais:
1. Itens realizados:
    1.1. O número de CPF sempre deverá ser único, não podendo cadastrar mais de uma pessoa com o mesmo CPF.
    1.2. Para endereços, deve ser utilizado a API do ViaCEP, disponível em https://viacep.com.br/
    1.3. Um usuário não poderá ser deletado, caso exista um ou mais locais de coleta vinculados a ele.
    1.4. Login solicitando informações apresentadas no item 3 do roteiro da aplicação
    1.5. Locais de coletas renderizados em mapa e lista (recicláveis, não recicláveis e ambos)
    1.6. Menu de navegação com botão de sair e cadastrar
    1.7. Dashboard seguindo as diretrizes (local de coleta individual, opção para adicionar solicitação de coleta)
    1.8. Usuário admin pode alterar informações de todos os usuários
    1.9. Listagem de todos os pontos de coleta podem ser vistos quando se faz login no usuário administrado (e-mail: odair.michael@hotmail.com | senha: 123)
    1.10. Documentação apresentada no readme

2. Acesso ao vídeo: https://drive.google.com/drive/folders/1vXSRovL0U9uxT-XgfsqAcqgBgTYyhxV6?usp=sharing
3. Repositório GitHub: https://github.com/odairmichaelbendotti/Projeto-Avaliativo1-FMT.git
 3.1. Conforme solicitado, compartilhado somente com Bruno-Costa-fig e lab365-operacao
4. Live do site pelo Vercel: 


# Recicla365

## Descrição
Recicla365 é uma plataforma desenvolvida para facilitar o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Usuários podem cadastrar e localizar acessar seus pontos de coleta, bem como escolher o dia em que desejam que a coleta seja realizada em sua residência.

## Funcionalidades

### Componentes
- **CadastroComponent**: Gerencia as informações gerais de cadastro dos usuários.
- **ContainerLogo**: Container para espaçamento uniforme na parte superior do site.
- **DashboardUser**: Página de Dashboard para usuários normais e admins. Mostra informações de cadastro e um mapa com o ponto de coleta especificado.
- **LoginComponent**: Gerencia as funcionalidades de login e cadastro no site.
- **Menu**: Menu lateral para navegação entre as diferentes páginas do site.
- **UserList**: Lista de usuários visível apenas para administradores na página Beneficiários.

### Páginas
- **Dashboard**: Exibe informações do usuário e mapa com pontos de coleta.
- **Login**: Contém as funcionalidades de login e registro de novos usuários.
- **Beneficiários**: Mostra uma lista de todos os usuários cadastrados (acesso restrito a administradores).
- **Informações**: Exibe pontos de coleta em um mapa (acesso restrito a administradores).

## Administração
O site possui um único usuário administrador (`odair.michael@hotmail.com`, senha `123`) que pode acessar as páginas de Pontos e Beneficiários, editar informações de usuários e visualizar todos os pontos de coleta cadastrados.

## Tecnologias Utilizadas
- Biblioteca React.js para a construção da interface.
- Leaflet para renderização de mapas.
- Material UI para estilização.
- localStorage para armazenamento dos dados de usuários e pontos de coleta.

## Instruções para Execução
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o projeto com `npm start`.
4. Acesse `http://localhost:3000` para visualizar o site.

## Melhorias Futuras
- Implementação de responsividade completa para adaptação em diferentes tamanhos de tela.
- Aumento das funcionalidades administrativas para gestão mais eficiente dos pontos de coleta.
- Inclusão de funcionalidades de relatórios sobre a coleta e reciclagem.
- Incluão de botão de voltar para usuário alterar suas informações durante o cadastro.

## Autor
Odair Michael Bendotti
(47) 9 9643-9372
odair.michael@hotmail.com