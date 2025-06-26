'use server'

import { auth } from '@/lib/auth'

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        })
        return {
            success: true,
            message: 'User signed in successfully'
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || 'Unknown error occurred'
        }
    }
}

export const signUp = async (email: string, password: string, name: string) => {
    try {
        const urlAvatar = `https://api.dicebear.com/8.x/initials/svg?seed=${name}`
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                image: urlAvatar
            }
        })

        return {
            success: true,
            message: 'User signed up successfully'
        }
    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || 'Unknown error occurred'
        }
    }
}