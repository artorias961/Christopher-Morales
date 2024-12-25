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
