import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize() {
        return {
          id: "1",
          username: "user",
          email: "2",
          password: "2",
          token: "2",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.token;
        token.username = user.username;
      }

      return token;
    },
    async session({ session }) {
      return session;
    },
  },
};
