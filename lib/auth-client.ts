import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})

export async function isUserAuthenticated() {
    const { data } = await authClient.getSession();
    return !!data?.user;
}