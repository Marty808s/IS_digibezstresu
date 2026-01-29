This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech stack - zvolený
<ul>
    <li><strong>Framework:</strong> Next.js (App Router)</li>
    <li><strong>Language:</strong> TypeScript</li>
    <li><strong>Styling:</strong> Tailwind CSS 4</li>
    <li><strong>Database ORM:</strong> Prisma</li>
    <li><strong>Database:</strong> PostgreSQL (pro dev v Dockeru)</li>
    <li><strong>Deploy:</strong> Vercel + Vercel Postgres</li>
</ul>

## Docker Setup (PostgreSQL + pgAdmin)

Pro spuštění PostgreSQL databáze a pgAdmin pro vývoj:

```bash
# Spuštění databáze a pgAdmin
docker-compose up -d

# Zastavení
docker-compose down

# Zastavení a smazání dat (včetně databáze)
docker-compose down -v
```

**Připojení:**
- **PostgreSQL:** `localhost:5432`
  - Database: `digibezstresu_dev`
  - User: `postgres`
  - Password: `postgres`
- **pgAdmin:** http://localhost:5050
  - Email: `admin@admin.com`
  - Password: `admin`

**Nastavení pgAdmin:**
1. Otevři http://localhost:5050
2. Přihlas se s údaji výše
3. Klikni pravým tlačítkem na "Servers" → "Register" → "Server"
4. V záložce "General": Name = `Local PostgreSQL`
5. V záložce "Connection":
   - Host: `postgres` (název služby z docker-compose)
   - Port: `5432`
   - Database: `digibezstresu_dev`
   - Username: `postgres`
   - Password: `postgres`
6. Ulož

**Environment proměnné:**
Vytvoř soubor `.env` v root adresáři:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/digibezstresu_dev?schema=public"
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
