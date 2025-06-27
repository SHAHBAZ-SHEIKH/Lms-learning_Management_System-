
import type { NextAuthOptions } from "next-auth";
import { CredentialsProvider, GithubProvider, GoogleProvider } from "./providers";

export const authConfig = {
    providers: [CredentialsProvider, GithubProvider, GoogleProvider],
} satisfies NextAuthOptions;