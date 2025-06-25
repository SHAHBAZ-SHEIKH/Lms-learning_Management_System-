import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../backend/lib/db';
import { authConfig } from './config';
import { createUserSessionInDB, getAccountByUserId, getStudentById, updateStudentById } from '@/services/user';
import { generateSequentialStudentId } from '../utils';

const { } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    events: {
        async linkAccount({ user }) {
            const stdID = await generateSequentialStudentId();
            await updateStudentById(user.id as string, { studentId: stdID, role: "STUDENT" ,emailVerified: new Date() })
        }
    },
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getStudentById(token.sub);
            if (!existingUser) return token;
            const existingAccount = await getAccountByUserId(existingUser.id);
            token.name = existingUser.name || null;
            token.email = existingUser.email || null;
            token.picture = existingUser.image || null;
            token.dateOfBirth = existingUser.dob || null;
            token.emailVerified = existingUser.emailVerified || null;
            token.isOAuth = !!existingAccount;
            return token;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                await createUserSessionInDB(session.user.id as string);
                session.user.id = token.sub;
            }
            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email as string;
                session.user.image = token.picture || null;
                session.user.emailVerified = token.emailVerified as Date || null;
                session.user.dateOfBirth = token.dateROfBirth as Date || null;
                session.user.isOAuth = token.isOAuth as boolean;
                console.log("first session:", session);
            }
            return session;
        },
        async signIn({ user, account }) {
            if (account?.provider === "credentials") {
                const existingUser = await getStudentById(user.id as string);
                if (!existingUser?.emailVerified) {
                    throw new Error("Please verify your email before logging in");
                }
            }
            return true;
        },
    },
    ...authConfig,
})