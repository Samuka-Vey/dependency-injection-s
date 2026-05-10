<h1> Dependency Injection (DI) em TypeScript</h1>

<p>Este projeto é um exemplo simples de como implementar o padrão de Injeção de Dependência (DI) em TypeScript. O objetivo é demonstrar como criar uma estrutura básica para gerenciar dependências entre classes, facilitando a manutenção e testabilidade do código.</p>

<p> Backlog do projeto:</p>

- [x] Criar a estrutura do projeto.
- [x] Implementar a classe de cliente.
- [x] Definições básicas de crud
- [x] Interface de repositório para abstrair a camada de dados.
- [x] Interface de service para abstrair a camada de negócio.
- [x] DTOs para validação dos dados de entrada.
- [x] Tratamento de erros centralizado.
<p>Para executar o projeto, siga as instruções abaixo:</p>

1. Clone o repositório:
   ```bash
   git clone
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd dependency-injection
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   <p>O projeto está estruturado da seguinte forma:</p>

- `src/`: Contém o código-fonte do projeto.
  - `modules/`: Contém os módulos do projeto, como cliente e autenticação.
    - `client/`: Contém a entidade de cliente e o serviço de autenticação.
      - `entities/`: Contém a definição da classe de cliente.
      - `services/`: Contém a implementação do serviço de autenticação.
- `tsconfig.json`: Configuração do TypeScript.
- `package.json`: Configuração do npm e scripts de execução.
