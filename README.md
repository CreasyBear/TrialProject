This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## RenOz SaaS Platform

This project is a generic startup website template for a SaaS platform. It's built using Next.js and Tailwind CSS, with design elements generated using v0 by Vercel.

### Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Component Overview

- `navbar.tsx`: Responsive navigation bar with logo and mobile menu
- `hero-section.tsx`: Main landing section with headline and call-to-action buttons
- `features-section.tsx`: Highlights key features of the SaaS platform
- `social-proof-section.tsx`: Displays logos of trusted companies
- `testimonials-section.tsx`: Shows customer testimonials
- `cta-section.tsx`: Call-to-action section to encourage sign-ups
- `footer.tsx`: Page footer with links and social media icons

### Design Elements

This project uses v0 by Vercel to generate various design elements. Look for TODO comments in the component files to see where v0-generated elements should be placed.

### Performance and SEO

- Lazy loading is implemented for images and components below the fold
- Appropriate meta tags are added in the `layout.tsx` file for improved SEO

### Accessibility

This project aims to comply with WCAG 2.1 AA standards. Please ensure all new additions maintain this level of accessibility.
