import { DefaultSession } from "next-auth";

export type ExtendedSession = DefaultSession["user"] & {
    isOAuth: boolean;
    dateOfBirth?: Date | null;
    emailVerified?: Date | null;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}

declare module "@auth/core/jwt" {
    interface JWT extends ExtendedUser { }
}