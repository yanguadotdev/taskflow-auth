import { db } from "@/db/drizzle";
import { betterAuth } from "better-auth";
import { schema } from '@/db/schema'
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/emails/reset-password";
import EmailVerificationTemplate from "@/components/emails/email-verification";
import { getBaseURL } from "./utils";

const resend = new Resend(process.env.RESEND_API_KEY as string)

export const auth = betterAuth({
    baseURL: getBaseURL(),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            resend.emails.send({
                from: "RESEND <onboarding@resend.dev>",
                to: user.email,
                subject: "Reset your password",
                react: ForgotPasswordEmail({ resetUrl: url, userEmail: user.email }),
            })
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        onEmailVerification: async () => {
            console.log('onVerificationSuccess')
        },
        sendVerificationEmail: async ({ user, url }) => {
            const verificationUrl = new URL(url)
            verificationUrl.searchParams.set('callbackURL', '/dashboard')

            resend.emails.send({
                to: user.email,
                from: "RESEND <onboarding@resend.dev>",
                subject: "Verify your email",
                react: EmailVerificationTemplate({
                    userName: user.name,
                    userEmail: user.email,
                    verificationUrl: verificationUrl.toString()
                }),
            })
        }
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    plugins: [nextCookies()]
});