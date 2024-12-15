# Final Portfolio

PUT INFO LATER



## Installation Requirements




### Node JS Installation v18.20.5 LTS
Just navigate to the [NodeJS link](https://nodejs.org/en/download/package-manager) and select **V20.18.1 (LTS)**):

![image](https://github.com/user-attachments/assets/8eb49321-db80-4ae0-9cf7-2115877f69bf)




### Installing npm v10.8.2 (need v18.20.5 LTS node)
Open powershell and type in the following:
```powershell
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 18

# verifies the right Node.js version is in the environment
node -v # should print `v18.20.5`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```










## Creating NextJS template

### 1. Creating the website using Next.JS
Create a new project:
```bash
# Create a Next.js app with TypeScript
npx create-next-app@latest your-project-name --typescript
cd your-project-name
```

A prompt will then show up on the terminal:
```bash
Would you like to use ESLint? › Yes
Would you like to use Tailwind CSS? › Yes
Would you like to use `src/` directory? › Yes
Would you like to use the experimental `app/` directory? › Yes
Would you like to customize the default import alias? › Yes
Would you like to use TurboPack as the development server? > No
Would you like to customize the default import alias? > Yes   (USE DEFAULT, JUST PRESS "ENTER")
```

As the following figure shows:

![image](https://github.com/user-attachments/assets/fcd32271-f1c9-46f6-9428-4be9c50842ea)


### 2. Install Core Packages
Run the following commands to add the necessary dependacies:
```bash
# Install React and React DOM
npm install react@18.2.0 react-dom@18.2.0

# For UI (Tailwind CSS, Shadcn, Radix, Sonner)
npm install tailwindcss@latest postcss@latest autoprefixer@latest @shadcn/ui radix-ui sonner

# Authentication and authorization (NextAuth.js)
npm install next-auth @next-auth/prisma-adapter

# Database and ORM (Prisma, SQLite or PostgreSQL)
npm install prisma @prisma/client

# OpenAI integration
npm install openai

# Payment solutions (Stripe)
npm install stripe @stripe/stripe-js

# REST API and WebSocket
npm install axios ws

# Other utilities
npm install clsx class-variance-authority

# Three.js is a 3D library that Vanta.js depends on for rendering WebGL-based animations.
npm install three

# Vanta.js is a lightweight library for creating animated 3D backgrounds using WebGL.
npm install vanta
```

#### Any errors at this point? 
If you get any errors then its a version stability issue. Just keep in mind it depends what **Node**, **NPM**, and **React** versio you are using cause it will cause a lot of issues!!! Try one of the following:

Verify react version:
```bash
npm ls react
```

Verify node (Node.JS) version:
```bash
node -v
```

Verify npm version:
```bash
npm -v
```


### 3. Initalize Tailwind CSS
In this section, we are verifying that if the settings have been applied if not we need to make the adjustments!


#### a. Generate the Tailwind CSS Config
```bash
npx tailwindcss init -p
```




### b. Update **tailwind.config.js**:
Find the file *tailwind.config.js* and when opening the file, it should look something like (not excatly):

![image](https://github.com/user-attachments/assets/3bd020d4-8a12-40fa-b9e1-db8fc548e7e5)



### c. Add Tailwind directives in **styles/globals.css**  or **src\app\global.css**:
Find the file  *styles/globals.css*  or *src\app\global.css* and when opening the file, it should look something like (not excatly):

![image](https://github.com/user-attachments/assets/5750a9f4-1363-4c87-98fa-beb24a5c387c)



### 4. Configure Prisma

#### a. Initialize Prisma
Once you run the following command, a bunch more files will be generated. Run the following line:
```bash
npx prisma init
```

#### b.Update the **prisma/schema.prisma** file:
Just note that I will be using ***postgresql*** database, as the image shows:
![image](https://github.com/user-attachments/assets/a205883b-e0a5-4515-91ab-468be006bd45)


Also, here is my setup at the moment:
```sql
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ANYTHING UNDER IS NEW!!!!!!<--------------------------
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
  role  String @default("user")
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}
```


Here are some notes from **PRISMA**
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm


#### c. Run migration
```bash
npx prisma migrate dev --name init
```


































