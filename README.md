# Final Portfolio

I want to make a portfoliio where i can combine my embedded skills and web skills together. I want to combine websocket, REST API, generitve AI, copmuter vision, and my personal notes onto a website that i have full control over.



## Directory Structure
```css
Base Folder
│
├── Main Website
│   └── (Files and code for the main website)
│
├── Containers
│   ├── database_PostgreSQL
│   │   └── (Docker files and configuration for PostgreSQL)
│   ├── frontend_vercel
│   │   └── (Frontend code and deployment scripts for Vercel)
│   └── hosting_nodejs
│       └── (Node.js hosting environment and server files)
```

## Table of Content



## Nice to know website's
Depends on the framework/tech but a reddit user normally uses the following:
- [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com) for frontend hosting
- [Supabase](https://supabase.com) or [Firebase](https://firebase.google.com) for database, storage, and auth
- [Fly.io](https://fly.io) for Node.js or Elixir hosting

*NOTE: My [portfolio](https://christopher-morales.vercel.app) uses vercel;). Im going to try netlify*









## Installation Requirements

### GitHub Account
A [GitHub](https://github.com) is a neccessity cause you will need to upload the files to a repository and we will be using free **frontend** services to run the website. 

*Can we run a website through github?* Yes but there are a lot of limitation such as database, using frameworks, packages from react, etc. You will be stuck with simple HTML, CSS, and JS. I have done it and I want to more. The frontend service will let you do all of this for free (the websites that I am going to give you in a later section)

### Docker 
[Docker](https://www.docker.com) is highly recommend since its a small virtual container that you can make it do anything you want essentially. If you have windows go to the link and install it natively. 

If you are using are using [linux for docker](https://docs.docker.com/desktop/setup/install/linux/). Just go to the terminal and follow the platform guideline.


#### The strucutre I am planning for docker





### DATABASE: Prisma 
Just keep in mind, we are using [Prisma](https://www.prisma.io) which has the [following](https://www.prisma.io/docs/orm/reference/supported-databases):
- [PostgreSQL](https://www.postgresql.org)
- [SQLite](https://www.sqlite.org)
- [MySQL](https://www.mysql.com)
- [MariaDB](https://mariadb.org)
- [CockroachDB](https://www.cockroachlabs.com)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

I will be selecting **PostgreSQL** since its popular. I know not the best reason to decide on a database but this is my first time doing so.

#### 1a. Downloading the Database
If you are planning to download a database locally on your computer then. The procedure will be the same for the cloud base which I will be using and a docker container. I will use a docker container for now and setup the online service later on.

#### 2a. Online database service
From a quick google search, [Supabase](https://supabase.com) or [Firebase](https://firebase.google.com) will be used. From the forums I been reading **Firebase** is a very good one (a lot of features) but limited with bandwidth!!!

#### 3a. Docker Container
If you are planning to do a docker container then go to the website/database you are going to use find docker container. Since I will be using [PostgreSQL docker container](https://hub.docker.com/_/postgres) just follow along. If not just follow my instructions!!! I recommend creating a new folder that is outside of the website and call it **containers**. Will make you life easier!!!

##### 3a. Docker Container Step 1: Create the docker-compose File
Im assuming you already have docker installed. Looking at [Directory Structure](https://github.com/artorias961/Christopher-Morales/edit/main/README.md#directory-structure) and navigate to *PostgreSQL container folder*. Create a file called **docker-compose.yaml** and put in the following:
```yaml
version: "3.9"

services:
  postgres:
    image: postgres:latest
    container_name: postgres_container
    ports:
      - "5432:5432" # Expose PostgreSQL on port 5432
    environment:
      POSTGRES_USER: your_username
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: your_database
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: always # Automatically restart the container if it stops

volumes:
  postgres_data:
```
***JUST MAKE SURE TO CHANGE THE POSTGRES_USER, POSTGRES_PASSWORD, AND POSTGRES_DB (for POSTGRES_DB, replace it with the actuale database name you want, like myapp_dp or example_db)*** Here are some notes if this is your first time using docker or docker compose. Here is the explanation of the YAML File:
- **version**: Specifies the version of Docker Compose syntax.
- **services**:
  - **postgres**: Defines a service named postgres.
  - **image**: The Docker image to use (postgres:latest for the latest version of PostgreSQL).
  - **container_name**: The name of the container (postgres_container).
  - **ports**: Maps the container's PostgreSQL port (5432) to your local machine.
  - **environment**: Sets environment variables for PostgreSQL:
      - **POSTGRES_USER**: Your desired username.
      - **POSTGRES_PASSWORD**: Your desired password.
      - **POSTGRES_DB**: The database name to initialize.
  - **volumes**: Maps a volume to persist database data (postgres_data).
  - **restart**: Ensures the container restarts automatically if it stops.




##### 3b. Docker Container Step 2: Run the PostgreSQL Container
Save the file. Then run the following in the terminal:
```bash
docker-compose up -d
```
*NOTE: The "-d" flag runs the contianer in detached mode (background)*

When you run the command line, you should see the following happen:

![image](https://github.com/user-attachments/assets/843fae31-3240-4537-a0cd-bc4d9bdc8183)


Finally, to check if the conainer is running do the following:
```bash
docker ps
```


#### 4a. Connect to PostgreSQL or any database
Regardless if you locally running, online web service, or docker container. Its more or less the same. ***HOW TO USE IT!!!***, this database (your_database) is the one your Prisma application will connect to using the **DATABASE_URL** in the **.env** file:
```bash
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database"
```
In summary you should have (local app, web service or docker):
- **Host**: localhost
- **Port**: 5432
- **Database**: your_database (from *POSTGRES_DB*)
- **Username**: your_username (from *POSTGRES_USER*)
- **Password**: your_password (from *POSTGRES_PASSWORD*)

***YOU SHOULD SAVE THIS INFORMATION SINCE WE WILL USE THIS LATER ON. THIS IS JUST THE SETUP!!!***






### Frontend (Running the website)
To run the website for free we are going to need a github repository. So we can link the repository with the frontend servives. [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com) are free services.


#### 2a. Online service
I would recommend [heroku](https://www.heroku.com) but it aint free. I have used vercel before, all you need to do is link your github account and verify what framework and framework version you are using. Then you are done. 

So I am going to try out netlify to see any other benefits. 








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
```prisma
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
Go to the [4a. Connect to PostgreSQL or any database](https://github.com/artorias961/Christopher-Morales/edit/main/README.md#4a-connect-to-postgresql-or-any-database) and replace the URL link with the correct information for the URL *(if you change the username, password, and database name)*.

Here are some notes from **PRISMA**
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm


#### c. Run migration
If you have change the **DATABASE_URL** from the PRISMA file, then you should do the following:
```bash
npx prisma migrate dev --name init
```


































