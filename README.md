# 📋 Task Master - Mission Control

<div align="center">

A modern, full-stack task management application built with Next.js 15, React 19, and Supabase. Task Master empowers teams to streamline workflows, collaborate efficiently, and boost productivity with an intuitive interface and powerful features.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.50.2-3ecf8e?style=for-the-badge&logo=supabase)](https://supabase.com/)

[Live Demo](https://taskmaster-legend.vercel.app/) · [Report Bug](https://github.com/AbdallhElzorkany/TaskMaster/issues) · [Request Feature](https://github.com/AbdallhElzorkany/TaskMaster/issues)

</div>

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [User Roles](#-user-roles)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### 🔐 Authentication & Authorization

- Secure user registration and login with Supabase Auth
- Role-based access control (Admin & Employee roles)
- Password reset functionality
- Protected routes with middleware authentication

### 📊 Task Management

- **Create, read, update, and delete tasks**
- Assign tasks to team members
- Set due dates and track progress
- Real-time task status updates (Pending, In Progress, Completed)
- Filter and sort tasks by status

### 👥 User Management

- User profiles with editable information
- Admin dashboard to view all employees
- Employee list with task assignments
- Profile customization

### 🎨 Modern UI/UX

- Beautiful landing page with feature highlights
- Responsive design for mobile, tablet, and desktop
- Clean and intuitive interface
- Loading states and error handling
- Smooth transitions and hover effects

### 🚀 Performance

- Next.js 15 with Turbopack for blazing-fast development
- Server-side rendering (SSR) for optimal performance
- Optimized image loading
- Client and server component architecture

## 🛠️ Tech Stack

**Frontend:**

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [date-fns](https://date-fns.org/) - Date manipulation

**Backend:**

- [Supabase](https://supabase.com/) - Backend as a Service
  - Authentication
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Real-time subscriptions

**Dev Tools:**

- ESLint - Code linting
- PostCSS - CSS processing

## 📁 Project Structure

```
mission-control/
├── src/
│   ├── app/
│   │   ├── (app)/              # Protected app routes
│   │   │   ├── employees/      # Employee management
│   │   │   ├── profile/        # User profile
│   │   │   └── tasks/          # Task management
│   │   ├── (auth)/             # Authentication routes
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   └── reset-password/
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── AddNewTask.tsx      # Task creation form
│   │   ├── CompleteTask.tsx    # Task completion component
│   │   ├── EmployeeCard.tsx    # Employee display card
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Logout.tsx          # Logout button
│   │   ├── RoleButton.tsx      # Role selector
│   │   ├── Status.tsx          # Task status badge
│   │   └── UserProvider.tsx    # User context provider
│   ├── lib/
│   │   ├── actions.ts          # Server actions
│   │   ├── addTask.ts          # Task creation logic
│   │   └── editProfile.ts      # Profile update logic
│   └── utils/
│       └── supabase/           # Supabase client configuration
│           ├── client.ts
│           ├── server.ts
│           └── middleware.ts
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

---

## 🔑 User Roles

### Admin

- Create and assign tasks to employees
- View all tasks across the organization
- Access employee management dashboard
- Update task statuses
- Full CRUD operations on tasks

### Employee

- View assigned tasks
- Update task progress
- Mark tasks as complete
- Edit personal profile

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute this software.

---

## 👨‍💻 Author

**Abdallh El-Zorkany**

- GitHub: [@AbdallhElzorkany](https://github.com/AbdallhElzorkany)
- Website: [taskmaster-legend.vercel.app](https://taskmaster-legend.vercel.app/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icons
- [Vercel](https://vercel.com/) - Hosting platform
- [date-fns](https://date-fns.org/) - Date utilities
---

<div align="center">

Made with ❤️ by [Abdallh Elzorkany](https://github.com/AbdallhElzorkany)

⭐ Star this repo if you find it helpful!

</div>
