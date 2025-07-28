import { createAuthClient } from "better-auth/react"
import { getBaseURL } from "@/features/shared/utils"

export const authClient = createAuthClient({
    baseURL: getBaseURL()
})