import { NextAuthOptions, Session } from "next-auth";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import prisma from "@/lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { type: "text", placeholder: "Email" },
        password: { type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing credentials");
        }

        try {
          console.log(
            "Email",
            credentials.email,
            "Password",
            credentials.password
          );
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            throw new Error("User with email does not exist");
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!passwordMatch) {
            throw new Error("Password is incorrect");
          }

          return user;
        } catch (error) {
          if (error instanceof PrismaClientInitializationError) {
            throw new Error("Database connection error");
          }
          if (error instanceof Error) {
            throw error;
          }
          throw new Error("Internal server error");
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXT_AUTH_SECRET ?? "secret",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email as string;
        token.id = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      try {
        const user = await prisma.user.findUnique({
          where: { email: token.email ?? undefined },
        });

        if (user && session && session.user) {
          session.user.id = user.id as string;
        }
      } catch (error) {
        if (error instanceof PrismaClientInitializationError) {
          throw new Error("Database connection error");
        }
        console.error("Session error:", error);
        throw new Error("Failed to fetch user session");
      }
      return session;
    },
  },
};
