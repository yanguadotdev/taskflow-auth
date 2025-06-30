'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { toast } from "sonner"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { useSearchParams, useRouter } from "next/navigation"

const formSchema = z.object({
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: z.string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export function ResetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!token) {
            toast.error("Invalid reset token")
            return
        }

        setIsLoading(true)

        try {
            const { error } = await authClient.resetPassword({
                newPassword: values.password,
                token,
            })

            if (error) {
                toast.error(error.message || "Failed to reset password")
            } else {
                toast.success("Password reset successfully")
                router.push("/login")
            }
        } catch (error) {
            toast.error("An unexpected error occurred")
            console.error("Reset password error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    if (!token) {
        return null
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Reset Password</CardTitle>
                    <CardDescription>
                        Enter your new password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Enter your new password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm New Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Confirm your new password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    className="w-full"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="size-4 animate-spin mr-2" />
                                            Reset Password
                                        </>
                                    ) : (
                                        'Reset Password'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}