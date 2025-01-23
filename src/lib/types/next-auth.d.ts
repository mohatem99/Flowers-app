import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {

    
    interface Session {
        username : string;
        password : string;
        token : string;
    }

    interface User  {
        username : string;
        password : string;
        token : string
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        username : string;
    }
  }