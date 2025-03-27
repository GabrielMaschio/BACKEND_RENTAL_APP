# 🚗 Sistema de Aluguel de Veículos

Projeto **fullstack** para gerenciamento de aluguel de veículos (carros e motos), desenvolvido com **Angular no frontend** e **Node.js + Express + Prisma + Supabase no backend**.

A aplicação permite cadastro de usuários, veículos, clientes e controle de aluguéis, com autenticação segura via JWT. O projeto foi desenvolvido com foco em boas práticas de organização de código e uso de tecnologias modernas.

---

## 🖥️ Frontend

Repositório: [FRONTEND_RENTAL_APP](https://github.com/GabrielMaschio/FRONTEND_RENTAL_APP)

### 🔧 Tecnologias Utilizadas

- Angular
- SCSS
- Angular Router
- Angular Services
- HttpClient

### 📌 Funcionalidades

- Tela de login com autenticação JWT
- Cadastro e listagem de veículos
- Cadastro e listagem de clientes
- Controle de aluguéis
- Layout responsivo e usabilidade intuitiva

### 🚀 Como Executar o Frontend

```bash
git clone https://github.com/GabrielMaschio/FRONTEND_RENTAL_APP
cd FRONTEND_RENTAL_APP
npm install
ng serve
```

Acesse o app em: `http://localhost:4200`

---

## 🔙 Backend

Repositório: [BACKEND_RENTAL_APP](https://github.com/GabrielMaschio/BACKEND_RENTAL_APP)

### 🔧 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- Supabase (PostgreSQL)
- JWT (JSON Web Tokens)
- Dotenv

### 📁 Estrutura de Pastas

```
src/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── prisma/
└── utils/
```

### ⚙️ Configuração do .env

Crie um arquivo `.env` na raiz do backend com:

```env
DATABASE_URL=postgresql://seu_usuario:senha@host:porta/banco
JWT_SECRET=sua_chave_secreta
PORT=3000
```

### 📌 Funcionalidades

- Login e autenticação com JWT
- CRUD de veículos
- CRUD de clientes
- Gerenciamento de aluguéis
- Integração total com o frontend via API REST

### 🚀 Como Executar o Backend

```bash
git clone https://github.com/GabrielMaschio/BACKEND_RENTAL_APP
cd BACKEND_RENTAL_APP
npm install
npx prisma migrate dev
npm run dev
```

Servidor rodando em: `http://localhost:3000`

---

## 🔗 Integração

- O frontend consome as rotas protegidas da API Node.js.
- A autenticação JWT é compartilhada entre as duas aplicações.
- O banco de dados é hospedado no Supabase com gerenciamento via Prisma ORM.

---

## 📄 Licença

Este projeto foi desenvolvido como parte de estudos pessoais e acadêmicos.  
Desenvolvido por **Gabriel Maschio** 🚀
