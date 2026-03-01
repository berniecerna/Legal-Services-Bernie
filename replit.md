# Attorney Bernie - Legal Services Website

## Overview
A professional website for Attorney Bernie's legal practice based in Monterey County, CA. Includes a homepage with services, holistic representation philosophy, contact form, and logo section, plus a dedicated "Meet Bernie" page and an admin dashboard for managing contact form submissions.

## Architecture
- **Frontend:** React with TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend:** Express.js with TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **Routing:** wouter (client-side)

## Pages
- `/` — Homepage (hero, holistic representation, services, practice areas, quote, contact form, logo, footer)
- `/meet-bernie` — About page with Bernie's background and philosophy
- `/admin` — Admin dashboard showing all contact form submissions

## Key Features
- **Contact Form:** Collects name, email, phone, and message. Includes California-compliant disclosure about attorney-client relationships.
- **Email Notifications:** SendGrid integration sends a copy of each form submission to email@yourattorneybernie.com
- **SMS Notifications:** Twilio integration sends a text to (831) 609-0022 when a new form is submitted (no PII in the text)
- **Admin Dashboard:** Located at `/admin`, displays all lead submissions with name, email, phone, message, status, and date

## Integrations
- **SendGrid** — Email notifications for contact form submissions
- **Twilio** — SMS notifications for contact form submissions

## Database Schema
- `leads` table: id, name, email, phone, message, status (default "new"), createdAt

## File Structure
- `client/src/pages/Home.tsx` — Main homepage
- `client/src/pages/MeetBernie.tsx` — About page
- `client/src/pages/Admin.tsx` — Admin dashboard
- `client/src/components/layout/Navbar.tsx` — Navigation bar
- `server/routes.ts` — API routes (POST/GET /api/leads)
- `server/storage.ts` — Database storage layer
- `server/sendgrid.ts` — SendGrid email integration
- `server/twilio.ts` — Twilio SMS integration
- `shared/schema.ts` — Database schema and types
