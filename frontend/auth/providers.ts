import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { loginFormSchema } from "../lib/schemas";
import { getStudentByEmail } from "@/services/user";

export const CredentialsProvider = Credentials({
    credentials: {
        email: { label: "Email", type: "text" }
    },

    async authorize(credentials) {
        const validLogin = await loginFormSchema.safeParseAsync(credentials);

        if (!validLogin.success) {
            throw new Error("Invalid input data");
        }

        const { email } = validLogin.data;
        const user = await getStudentByEmail(email);

        if (!user) {
            throw new Error("User Not Found");
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image || null,
            dateOfBirth: user.dob || null,
            emailVerified: user.emailVerified || null,
            isOAuth: false,
        };
    }
});

export const GithubProvider = Github({
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
});

export const GoogleProvider = Google({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    authorization: {
        params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
        },
    },
});