'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { useSearchParams } from "next/navigation"

export function VerifyEmailForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const searchParams = useSearchParams()
    const emailToVerify = searchParams.get("email") as string

    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit() {
        setIsLoading(true)
        const { error } = await authClient.sendVerificationEmail({
            email: emailToVerify,
            callbackURL: '/dashboard'
        })
        if (error) {
            toast.error(error.message)
        } else {
            toast.success("Verification email resend")
        }
        setIsLoading(false)
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Email Verification</CardTitle>
                    <CardDescription>
                        We have sent a verification link to <strong>{emailToVerify}</strong> it will expire shortly, so please verify right now
                    </CardDescription>
                    <CardDescription>
                        You didn't get the email?
                        <Button
                            type="button"
                            variant="link"
                            disabled={isLoading}
                            className="mt-6 px-2 cursor-pointer"
                            onClick={onSubmit}
                        >
                            Resend Email
                        </Button>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
