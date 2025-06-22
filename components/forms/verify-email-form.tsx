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
import Lottie from "lottie-react";
import emailVerificationAnimation from "@/public/lotties/verify-email.json"

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
                    <CardTitle className="text-xl">Just One More Step</CardTitle>
                    <Lottie
                        loop={false}
                        animationData={emailVerificationAnimation}
                        className="mx-auto size-56"
                    />
                    <CardDescription>
                        We sent a confirmation email to: <strong>{emailToVerify}</strong> Check your email and click on the confirmation link to continue
                    </CardDescription>
                    <CardDescription className="leading-none mt-6">
                        If you still don&apos;t see it, you can
                        <Button
                            type="button"
                            variant="link"
                            disabled={isLoading}
                            className="p-2 h-auto py-1 cursor-pointer"
                            onClick={onSubmit}
                        >
                            Resend the confirmation email
                        </Button>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
