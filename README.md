## 📝 Descrição

Projeto desenvolvido para o desafio de vaga de Desenvolvedor Frontend da Edusynch.

O projeto pode ser visitado no endereço

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [React Query](https://tanstack.com/query/latest/)
- [Prisma](https://www.prisma.io/)
- [Jotai](https://jotai.org/)

Para a simulação das requisições via API, foi criada uma API real utilizando as [Api routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) do Next.js em conjunto com o Prisma para o gerenciamento do banco de dados.

## 🛠️ Instalação

### Variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`.
Por padrão o projeto irá utilizar SQLite como banco de dados, caso queira alterar e se conectar a um banco real, substitua o valor da variável `DATABASE_URL` com a URL no formato do seu banco e altere o valor de `provider` no arquivo `/prisma/schema.prisma` para o tipo de banco escolhido.

### Instalando as dependências

Rode o seguinte comando para instalar as dependências.

```bash
yarn install
```

Após executar o comando, o Prisma client irá atualizar o banco de acordo com a schema localizada em `/prisma/schema.prisma`. Caso não tenha alterado o valor da variável `DATABASE_URL`, um arquivo SQLite será criado automaticamente para ser utilizado como banco de dados.

### Testando a aplicação

Rode o seguinte comando para iniciar a aplicação.

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em ação.

### Observações importantes

A intenção deste projeto foi chegar o mais próximo possível de uma aplicação real, por isso foi feita a escolha de ter uma API e um banco de dados reais. Dado isso, para entrar na Dashboard (`/dashboard`), é necessário primeiro realizar o cadastro clicando em qualquer botão de `Sign up`.
