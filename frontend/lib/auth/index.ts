import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../backend/lib/db';
import { authConfig } from './config';

const { } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    events: {
        async linkAccount({ user }) {
            // Handle account linking logic here
            console.log('Account linked:', user);
        }
    },
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;
            console.log("Token:", token);
            return token;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                // session.user.id = token.sub;
            }
            if (session.user) {
                // session.user.name = token.name;
                // session.user.email = token.email as string;
                // session.user.image = token.picture || null;
                // session.user.emailVerified = token.emailVerified as Date || null;
                // session.user.dateOfBirth = token.dateOfBirth as Date || null;
                // session.user.number = token.number as string || null;
                // session.user.isOAuth = token.isOAuth as boolean;
                console.log("first session:", session);
            }
            return session;
        },
        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                // const existingUser = await getUserById(user.id as string);
                // if (!existingUser?.emailVerified) {
                //     throw new Error("Please verify your email before logging in");
                // }
                console.log("first signIn:", user, account);
            }
            return true;
        },
    },
    ...authConfig,
})