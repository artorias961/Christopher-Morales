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

#### Useful commands for Docker

```bash
docker-compose up -d
```
- Starts all the services defined in the docker-compose.yml file
- The -d flag runs the services in detached mode, meaning the containers run in the background and you regain control of your terminal.
- Purpose: Re-creates and runs the environment defined in the docker-compose.yml


```bash
docker-compose down -v
```
- Stops and removes all the containers, networks, and volumes defined in the docker-compose.yml file.
- The -v flag ensures that volumes associated with the services are also removed. Without this flag, named volumes persist even after the containers are removed.
- Purpose: Completely resets the environment, including removing stored data in volumes.


```bash
docker logs postgres_container
```
- Fetches and displays the logs of the container named postgres_container.
- Useful for debugging or monitoring what is happening inside the postgres_container.
- Purpose: Check the output and status messages of the PostgreSQL service.


```bash
docker-compose ps
```
- Lists all running containers in the docker-compose project.
- Displays the container names, states (up/down), and port mappings.
- Purpose: To check the status of services managed by Docker Compose.

```bash
docker-compose logs -f [service_name]
```
- Streams logs for a specific service or all services if [service_name] is omitted.
- The -f flag keeps the logs open and updates them in real-time.
- Purpose: Real-time monitoring of service logs.

```bash
docker-compose exec [service_name] [command]
```
- Executes a command in a running container associated with a specific service.
- Example: docker-compose exec postgres_container psql -U postgres opens the PostgreSQL client inside the container.
- Purpose: Run shell commands or interact with the service.

```bash
docker-compose build
```
- Builds or rebuilds the Docker images defined in the docker-compose.yml file.
- Useful if Dockerfile or service dependencies have been updated.
- Purpose: Prepares fresh container images.

```bash
docker-compose restart [service_name]
```
- Restarts specific services or all services in the docker-compose project.
- Useful for applying configuration changes without a full teardown.
- Purpose: Refreshes services while preserving their volumes and networks.

```bash
docker-compose stop
```
- Stops running containers but retains volumes and network configurations.
- Unlike down, this does not remove containers.
- Purpose: Pause the environment without complete removal.

```bash
docker ps
```
- Lists all running containers, their IDs, names, images, and status.
- Purpose: View active containers and their configurations.

```bash
docker ps -a
```
- Lists all containers, including those that are stopped or exited.
- Purpose: Inspect the history of previously run containers.

```bash
docker images
```
- Lists all Docker images available locally.
- Displays image names, tags, sizes, and creation dates.
- Purpose: Manage available images.

```bash
docker rmi [image_id]
```
- Removes a Docker image by its ID or name.
- Useful for clearing unused or old images.
- Purpose: Free up disk space by removing unwanted images.

```bash
docker rm [container_id]
```
- Removes stopped containers by their ID or name.
- Active containers cannot be removed until they are stopped.
- Purpose: Clean up unused containers.

```bash
docker volume ls
```
- Lists all Docker volumes available on the system.
- Displays the volume name and scope (local/shared).
- Purpose: Manage persistent storage.

```bash
docker network ls
```
- Lists all Docker networks.
- Displays network names, drivers (bridge, overlay, etc.), and scope.
- Purpose: Identify and manage networks for container communication.

```bash
docker inspect [container_id|image_id|volume_name|network_name]
```
- Provides detailed JSON output about a container, image, volume, or network.
- Includes configuration, environment variables, and runtime details.
- Purpose: Debug or understand the configuration of Docker resources.

```bash
docker exec -it [container_name] /bin/bash
```
- Opens an interactive bash shell inside a running container.
- The -it flag ensures the terminal remains interactive.
- Purpose: Debug or manually interact with the container.

```bash
docker stats
```
- Displays real-time resource usage stats for running containers (CPU, memory, network, etc.).
- Purpose: Monitor container performance.

```bash
docker system prune
```
- Removes unused containers, images, networks, and volumes.
- Prompts confirmation before deletion.
- Purpose: Clean up disk space by removing unnecessary resources.

```bash
docker volume prune
```
- Removes all unused Docker volumes.
- Prompts confirmation before deletion.
- Purpose: Clean up orphaned volumes.

```bash
docker image prune
```
- Removes all dangling (unused) images.
- Prompts confirmation before deletion.
- Purpose: Clear disk space by removing images no longer needed.

```bash
docker-compose down --remove-orphans
```
- Stops and removes containers, networks, and orphaned containers (those not defined in the docker-compose.yml file).
- Purpose: Ensure a clean environment by removing outdated or leftover containers.










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
***IF YOU ARE GOING TO USE DOCKER, YOU HAVE TO MAKE SURE NOT TO INSTALL THE DATABASE. FOR EXAMPLE, IF YOU DOWNLOAD POSTGRESQL, DOCKER WILL NOT LIKE IT. IT WILL CAUSE AUTHETICATION ISSUES AND IS NOT WORTH DEALING. PICK ONE OR THE OTHER. I RECOMMEND DOCKER OR AN ONLINE SERVICE. AGAIN, IF YOU HAVE INSTALLED A DATABASE, JUST INSTALL IT OR AVOID DOCKER LIKE THE PLAGUE***

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
  env_file:
      - ../../my_app/.env # Path to the .env file

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
***DO NOT DO ANYTHIGN YET, JUST COPY THE CODE AND PASTE***
Here are some notes from **PRISMA**
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm


#### c. Modify .env file
Go to the [4a. Connect to PostgreSQL or any database](https://github.com/artorias961/Christopher-Morales/edit/main/README.md#4a-connect-to-postgresql-or-any-database) and COPY the URL *(if you change the username, password, and database name)*. Once you copy the URL, find *my-app/.env* (in my case *artorias961/.env*). Update the URL, as the following shows:

![image](https://github.com/user-attachments/assets/5211ed75-734a-467a-baf5-645113978a2c)
*NOTE: The image is the default example, I will change to my unique URL i created from docker. Remember if you are using the online web service, there is a unique URL and same with the local app database you installed. I choose docker cause its faster and a booming tech atm!!!* 

If you need an example then here:)
![image](https://github.com/user-attachments/assets/b3e4f224-5309-4814-816c-458ef8970689)
![image](https://github.com/user-attachments/assets/7ee6e5bf-ec0b-4426-9f75-5855cb4bebdd)
![image](https://github.com/user-attachments/assets/8fe78932-2568-4cc1-a161-4240b8fa0dc3)
![image](https://github.com/user-attachments/assets/a390b188-6d24-4c73-a8bb-5ca4878e97a2)


The only thing i did, was copying *docker-compose* file information to *.env* file.


#### d. Verify docker container made changes
Run the following line of code and you should see the three variables (username, password, database name):
```bash
docker exec -it postgres_container env
```
*NOTE: Just make sure to Change Directory to the docker file. Once you confirm go back to the main app*

#### e. Run migration
If you have change the **DATABASE_URL** from the PRISMA file, then you should do the following:
```bash
npx prisma migrate dev --name init
```
Once you do the command line, you should get the following:
![image](https://github.com/user-attachments/assets/753089d7-cc55-4284-8b9b-cf95676aeb9b)

*NOTE: If you have an error with Docker specifically, read the choices for database. The answer is in there!!!*


#### d. Integrate Prisma into the project (src/app/api/auth/[...nextauth]/route.ts)
Create a bunch of folders within the *src* fold. In the *route.ts* add in the following:
```ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma"; // Adjust path if necessary

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
// ADD YOUR AUTHENTICATION PROVIDERS HERE <----------
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for sessions
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
```
Now we have Prisma setup, we are going to integrate prisma with Next.JS Authentication called NextAuth. We can use other plugins but for now we will use the built in and we can always add more plugins but we want reliability first.

If you have noticed, we are going to use *google auth* since mostly everyone has a google account and we can add more providers if we wanted too!!! If you where confused about the file location then here:
![image](https://github.com/user-attachments/assets/8df8d889-6bcb-467b-a897-c375a2faf4c3)



### 5. Add Authentication (NextAuth)

#### a. Create a .env.locl
Where you **.env** file is located, we are going to create a new file called ***.env.local*** where we are going to put the following:
```env
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./dev.db
```

#### b. Add Sign-In and Sign-Out in your application (/pages/auth/signin.tsx)
We are going to create another file called **signin.tsx** where we can sign in and out!!! In the file put in the following:
```ts
// pages/auth/signin.tsx
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
```
You can make it as fancy as you want it later on but for now, reliability.


#### c. Protect Admin Dashboard (src/app/admin/page.tsx)
I want to create a hidden wall where admin user can have more control like websockts, api, etc. While the general users just see my simple portfolio!!! Anyways, what the file should contain (again you can modify this later):
```ts
import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (!session || session.user.role !== "ADMIN") {
    return <div>Access Denied</div>;
  }

  return <div>Welcome to the Admin Dashboard</div>;
}
```

### 6. Add API Rest
For this section, by default, I want the blogs, projects, or lessons data to be visible to everyone, but I want the API that allows adding/updating data (like an "admin-only control panel") to be restricted to admin users only.

Plan:
1. GET Route:
    - Accessible by everyone (fetches public data like blogs, projects, etc.).
2. POST/PUT/DELETE Routes:
    - Restricted to admin users for adding, updating, or deleting data.



















