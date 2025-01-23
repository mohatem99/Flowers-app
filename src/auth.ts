import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'


export const authOptions: NextAuthOptions = {
    pages : {
        signIn : '/signin',
        error : '/signin'
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        Credentials({
            name : 'Credentials',
            credentials: {
                email : {},
                password : {},
            },
            async authorize(credentials, req) {
                return {
                    id: '1',
                    username: 'user',
                    email: '2',
                    password: '2',
                    token: '2'
                }
            }
        })
    ],
    callbacks : {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.token;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            session.username = token.username;
            return session;
        }
    }
}