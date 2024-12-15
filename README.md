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

```



