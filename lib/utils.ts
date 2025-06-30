import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Gets the base URL for the application
 * Works in both client and server environments
 */
export function getBaseURL(): string {
  // Browser environment
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  // Vercel deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Custom environment variable
  if (process.env.BETTER_AUTH_URL) {
    return process.env.BETTER_AUTH_URL
  }

  // Development fallback
  return "http://localhost:3000"
}