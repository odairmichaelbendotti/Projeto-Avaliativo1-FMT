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
- Inserir renderização de um componente indicando que e-mail e CPF já existem ao invés de informar por meio de um alert.

## Autor
Odair Michael Bendotti
(47) 9 9643-9372
odair.michael@hotmail.com