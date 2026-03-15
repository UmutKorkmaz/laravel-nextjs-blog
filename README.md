# Laravel + Next.js Blog

> Full-stack blog platform with a Laravel REST API backend and a Next.js frontend.

## Overview

This project combines the robust backend capabilities of Laravel with the dynamic and SEO-friendly frontend of Next.js to create a powerful, user-friendly blogging platform. Users can register, authenticate, create posts, and manage their blog content.

## Tech Stack

### Backend (`/laravel`)
- **Framework:** Laravel (PHP)
- **API:** RESTful API with Sanctum authentication
- **Database:** MySQL
- **Language:** PHP

### Frontend (`/next`)
- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** CSS / Tailwind

## Features

- User registration and authentication (Laravel Sanctum)
- Create, read, update, and delete blog posts
- SEO-friendly server-side rendering with Next.js
- REST API-driven architecture

## Getting Started

### Backend

```bash
cd laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## My Role

Solo developer — designed and built both the Laravel API and the Next.js frontend, including authentication flows, post management, and API integration.

## License

MIT License — see [LICENSE](LICENSE) for details.
