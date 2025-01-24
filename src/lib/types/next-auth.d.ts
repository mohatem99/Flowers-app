/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    username: string;
    password: string;
    token: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Session extends Omit<User, "token"> {}
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends User {}
}
