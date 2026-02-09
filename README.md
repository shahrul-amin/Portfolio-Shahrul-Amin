# Portfolio - Shahrul Amin

Modern portfolio website with dynamic content management, featuring serverless architecture and database integration.

## Technology Stack

### Frontend

- React 19.0.0
- Vite 6.4.1
- TailwindCSS 4.0.9
- GSAP 3.12.7
- Lenis (smooth scroll)

### Backend

- Vercel Serverless Functions
- Supabase PostgreSQL
- RESTful API architecture

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone https://github.com/shahrul-amin/Portfolio-Shahrul-Amin.git
cd Portfolio-Shahrul-Amin
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run development server

```bash
npm run dev
```

For full-stack development with API routes:

```bash
npm run dev:api
```

## Deployment

### Vercel

1. Push changes to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables in Vercel project settings
4. Deploy automatically on push to main branch

### Build locally

```bash
npm run build
```

## Environment Variables

Required for production deployment:

- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key

## License

Apache License 2.0 - See [LICENSE](LICENSE) file for details.

## Contact

Shahrul Amin  
Email: shahrulamin8776@gmail.com
GitHub: [@shahrul-amin](https://github.com/shahrul-amin)
