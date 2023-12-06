<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>SERVERLESS-NODEJS</h1>
<h3>Módulo de Usuários</h3>
<h3>Desenvolvido com as tecnologias abaixo</h3>

<p align="center">
<img src="https://img.shields.io/badge/Twilio-F22F46.svg?style=flat-square&logo=Twilio&logoColor=white" alt="Twilio" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat-square&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/Drack112/Serverless-NodeJS?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Drack112/Serverless-NodeJS?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Drack112/Serverless-NodeJS?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Drack112/Serverless-NodeJS?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Conteúdos
- [📍 Overview](#-overview)
- [📂 Estrutura](#-repository-structure)
- [🚀 Executando](#-getting-started)
    - [🔧 Instalação](#-installation)
    - [🤖 Rodando o módulo de usuários](#-running-Serverless-NodeJS)
---


## 📍 Overview

O módulo de usuário permite a comunicação entre o usuário com a função de lambda responsável por, criar, logar, verificar e editar o usuário dentro do container da AWS. É o primeiro módulo Lambda criado no projeto.



## 📂 Estrutura do Projeto

```sh
└── Serverless-NodeJS/
    └── user-services/
        ├── Makefile
        ├── UserTable.sql
        ├── app/
        │   ├── handler.ts
        │   ├── handlers/
        │   ├── models/
        │   ├── repository/
        │   ├── service/
        │   └── utils/
        ├── docker-compose.yml
        ├── package.json
        ├── serverless.yml
        ├── tsconfig.json
        └── yarn.lock

```

---


## 🚀 Rodando

***Dependências***

Tenha certeza de que você tenha localmente instalado:

`- ℹ️ NodeJS`

`- ℹ️ Docker`

`- ℹ️ Conta na AWS (Se quiser fazer deploy em uma instancia pessoal)`

`- ℹ️ Conta na Twilio (Serviço de email e notificação)`

### 🔧 Instalação

1. Clone o repositório:
```sh
git clone https://github.com/Drack112/Serverless-NodeJS
```

2. Entre no diretório de usuários:
```sh
cd Serverless-NodeJS/user-service
```

3. Instale as dependências:
```sh
npm install
```

### 🤖 Execute o ambiente em modo de desenvolvimento

```sh
npm run dev
```

---