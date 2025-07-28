.
├── app/
│   ├── (protected)/
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── actions/
│   │   └── tasks.ts
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts
│   ├── forgot-password/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── reset-password/
│   │   └── page.tsx
│   ├── verify-email/
│   │   └── page.tsx
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── emails/
│   │   ├── email-verification.tsx
│   │   └── reset-password.tsx
│   ├── forms/
│   │   ├── forgot-password-form.tsx
│   │   ├── index.tsx
│   │   ├── login-form.tsx
│   │   ├── reset-password-form.tsx
│   │   ├── signup-form.tsx
│   │   └── verify-email-form-tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── avatarDropdown.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       └── ...
├── db/
│   ├── drizzle.ts
│   └── schema.ts
├── lib/
│   ├── auth-client.ts
│   ├── auth.ts
│   └── utils.ts
├── server/
│   └── users.ts
├── drizzle.config.ts
├── middleware.ts
└── components.json