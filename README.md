# TaskFlow Auth

Authentication flow for **TaskFlow**: a modern and secure implementation built with BetterAuth, Resend, and modern Next.js best practices. 🛡️🔐

---

## 🚀 Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Auth**: [BetterAuth](https://betterauth.dev)
* **Mailing**: [Resend](https://resend.com) + custom React email templates
* **ORM**: Drizzle + Neon DB
* **UI**: ShadCN + Tailwind CSS
* **State Management**: React Server & Client Components

---

## 🔍 Features Implemented

### ✅ Email & Password Authentication

* Secure registration and login
* Server-side form validation with Zod
* Friendly UI feedback with toasts

### ✅ Email Verification Flow

* Sends verification email on sign up
* Prevents login until email is verified
* Auto-signs in users after verification
* Uses secure token-based link with redirect
* Includes resend email functionality

### ✅ Password Reset Flow

* Secure reset-password request flow
* Custom email with reset link
* Error feedback for unregistered emails

### ✅ Protected Routes

* Middleware checks for valid session
* Prevents access to protected pages without login
* Smart redirect: prevents access to `/verify-email` if already logged in

### ✅ Add OAuth (Google)

* Add OAuth (Google)
---

## 🧠 What I Learned

This project was a deep dive into real-world authentication workflows:

* ✉️ How to securely verify user emails using tokens and React-based templates
* ⚙️ How session handling works across server and client in Next.js with BetterAuth
* 🧱 How to use middleware to enforce route protection and smart redirects
* 🔁 How to structure auth flows that are user-friendly but secure
* 🎨 How to polish the UI/UX with animations (Lottie), layout tweaks, and clear messaging

---

## 🛡️ Auth Middleware Logic

* If user is **not authenticated**, redirect to `/`
* If user is **authenticated** and tries to access `/verify-email`, redirect to `/dashboard`
* Only allow access to `/verify-email` via proper flow (with token or email in URL)

---

## 💡 Future Improvements

* 2FA with email or authenticator app
* Magic link login option
* Rate limiting and abuse protection

---

## 📬 Contact

Made with ❤️ by [Samir](mailto:hey@yangua.dev)

---

> This project was a great exercise in designing secure, production-grade auth logic using modern tools. Proud of how far it's come! 🚀
