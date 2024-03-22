## Resma Application
Bem-vindo à documentação do projeto Resma! Esta aplicação é um sistema de gerenciamento de solicitações de resmas, onde os usuários podem cadastrar, visualizar e excluir solicitações de resmas. A autenticação é feita utilizando JSON Web Tokens (JWT).

## Funcionalidades Principais
Registro de Solicitações de Resmas: Os usuários autenticados podem registrar novas solicitações de resmas, especificando informações como nome do solicitante, ID do solicitante, quantidade de resmas e base solicitante.

- Visualização de Solicitações de Resmas: Os usuários podem visualizar todas as solicitações de resmas cadastradas, incluindo detalhes como nome do solicitante, ID do solicitante, quantidade de resmas e base solicitante.

- Busca por ID de Resma: Os usuários podem buscar uma solicitação de resma específica pelo seu ID.

- Exclusão de Solicitações de Resmas: Os usuários podem excluir uma solicitação de resma específica pelo seu ID.

- Autenticação JWT: A autenticação é realizada utilizando JSON Web Tokens (JWT), fornecendo uma camada de segurança para as rotas protegidas.

## Tecnologias Utilizadas
- AdonisJS: Framework para construção de aplicativos web em Node.js.
- SQLite: Banco de dados utilizado para armazenar as informações das solicitações de resmas.
- Postman: Ferramenta utilizada para testar as APIs REST.
- GitHub: Plataforma de hospedagem de código-fonte e controle de versão.


## Pré-requisitos
- Node.js e npm instalados na máquina.
- AdonisJS CLI instalado globalmente.
- Conexão com a internet para instalação de dependências.

## Instalação
1. Clone o repositório do GitHub
2. Navegue até o diretório do projeto
3. Instale as dependências do projeto
4. Execute as migrações para criar o banco de dados SQLite
5. Inicie o servidor da aplicação
6. Acesse a aplicação em seu navegador:

## Uso
- Faça o registro de um novo usuário na aplicação.
- Faça login com as credenciais do usuário registrado para obter um token JWT.
- Utilize o token JWT para acessar as rotas protegidas da API, como registro, visualização e exclusão de solicitações de resmas.

## Contribuição
Contribuições são bem-vindas! Para sugestões, melhorias e correções de bugs, por favor, abra uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a MIT License.

