import { ListChecks } from "lucide-react"

import { VerifyEmailForm } from "@/components/forms/verify-email-form"
import { redirect } from "next/navigation"
import { isUserAuthenticated } from "@/lib/auth-client"

export default async function VerifyEmailPage({ searchParams }: { searchParams: { email: string } }) {

    const isAuthenticated = await isUserAuthenticated()
    if (isAuthenticated) {
        redirect('/dashboard')
    }

    const params = await searchParams
    if (!params.email) {
        redirect('/')
    }
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <ListChecks className="size-4" />
                    </div>
                    TaskFlow.
                </a>
                <VerifyEmailForm />
            </div>
        </div>
    )
}
