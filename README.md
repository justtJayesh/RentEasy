# 🏠 Onrent - Student Housing Essentials Rental Platform

![Onrent Banner]()

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

## 📋 Overview

Onrent is an e-commerce platform designed for students who relocate to different cities for studies and need to rent essential utilities for their living spaces. The platform allows students to browse, select, and request essential items like refrigerators, coolers, washing machines, beds, couches, and more.

### 🎯 Key Features

- Clean, responsive UI built with Tailwind CSS and Shadcn components
- Product listings with detailed information
- User-friendly request form
- Secure data storage with PostgreSQL and Prisma ORM
- Scalable architecture using Next.js

## 🚀 Live Demo

[Visit Onrent Platform]([https://onrent-platform.vercel.app](https://www.onrent.org.in/))

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel

## 🏗️ Project Structure

```
onrent/
├── app/
│   ├── api/
│   │   └── callback/
│   │       └── route.ts
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── callback/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── product-card.tsx
│   ├── product-grid.tsx
│   ├── callback-form.tsx
│   └── header.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
├── public/
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/onrent.git
   cd onrent
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your database connection string and other configuration

4. Set up the database
   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser


## 📱 Key Features Implementation

### 1. Product Listing


### 2. Callback Form


### 3. API Route Handler


## 🌐 Deployment

The application is deployed on Vercel, which offers seamless integration with Next.js projects. To deploy your own instance:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

## 🛣️ Roadmap

- [ ] User authentication
- [ ] Admin dashboard for managing products and callback requests
- [ ] Payment integration for booking items
- [ ] Delivery tracking
- [ ] Review and rating system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries, please reach out to:
- Email: contact@onrent-platform.com
- Twitter: [@OnrentPlatform](https://twitter.com/OnrentPlatform)

---

Built with ❤️ for students by students
