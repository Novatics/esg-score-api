# esg-score-api
Financial ESG Score API

## 💻 Pré-requisitos

- Você deve ter **[Node.js](https://nodejs.org/)** instalado em uma versão igual ou superior **`v16.16.0`**
- Se preferir executar a aplicação como um container você também terá que instalar o **[Docker](https://www.docker.com/)**

## ✨ Instalação e execução

Na raiz do projeto são fornecidos alguns comandos integrados:

1. Copiar o conteúdo do `.env.template` para o arquivo padrão `.env`

```sh
cp .env.template .env
```

2. Instalar as dependências

```sh
yarn install
```

3. Executar o projeto

```sh
yarn start
```

O projeto deve executar em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

## 📂 Estrutura do projeto

Nossa estrutura de pastas se organiza dessa forma:

```
├─ src/
│  ├─ clients/
│  │  └─ openfinance.client.js      # Client para as APIs do Open Finance
│  ├─ configs/                      # Configurações (servidor, BD, etc.)
│  ├─ helpers/                      # Códigos reutilizáveis
│  ├─ mock-data/                    # Dados de mock do Open Finance
│  ├─ modules/                      # Módulos da aplicação
│  │  └─ classifier/                # Classificadores para cada aspecto que impacta no ESG: transporte, energia, etc.
│  │  └─ core/                      # Módulo orquestrador, recebe requisições e coordena os demais módulos
│  │  └─ scorer/                    # Quantificadores para os aspectos do score ESG: transporte, energia, etc.
├─ .env.template                    # Template de váriaveis de ambiente
├─ .eslintrc.js                     # Preferências do ESlint
├─ .gitignore                       # Lista de arquivos para serem ignorados pelo git
├─ package.json                     # Metadados do projeto, fornecido para o node.js
