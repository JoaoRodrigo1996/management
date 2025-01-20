## Management - Next.js 15 | React.js 19 

Esse projeto tem como objetivo estudar conceitos novos de Next.js 15 e React 19 como conceitos de server action, server components, além de novos hooks como `use()`, `useTransition()`, `searchParams` melhoria interatividade e experiência do usuário ao navegar e buscar dados de uma API.
Os dados da API é buscado por server actions onde o banco de dados é acessado diretamente buscando 500 registros e renderizado através de server components ao front end, possui um sistema de paginação também feito através de server components atraves de search params e um mecanismo de busca por um usuário específico.

## Tecnologias

- Next.js 15
- React.js 19
- Typescript
- Prisma ORM
- Tailwind CSS
- nuqs
- Faker.js
- Lucide React

## Primeiros passos

Primeiro, clone o projeto do github:

```bash
pnpm install
pnpm dlx prisma generate
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
