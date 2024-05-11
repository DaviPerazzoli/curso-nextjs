import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
            }
            return token;
        },
        async session({session, token}) {
            if (session.user && 'id' in session.user){
                session.user.id = token.id;
            }
           
            return session;
        }
    }
}

export default NextAuth(authOptions);