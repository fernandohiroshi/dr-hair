# DR Hair Transplante Capilar

A modern and responsive web project dedicated to hair transplant procedures and hair loss treatments. Developed with cutting-edge technologies like Next.js, React, and Tailwind CSS, offering an optimized user experience with support for multiple languages.

![DR Hair Preview](https://imgix.cosmicjs.com/302068e0-f4d0-11ef-b3e3-d17f92c625e7-readme-pic.png)

> **Notice**: This project is licensed under the MIT License. Unauthorized use or duplication of this code is prohibited.

## Getting Started

Clone the repository and run the following commands:

```bash
git clone https://github.com/yourusername/drhairtransplantecapilar.git
npm install
npm run dev
```

## Table of Contents

1. [Technologies](#technologies)
2. [Project Structure](#project-structure)
3. [Internationalization](#internationalization)
4. [Deployment](#deployment)
5. [License](#license)

## Technologies

### Core

- **[Next.js](https://nextjs.org)**: React framework for server-rendered applications, offering dynamic routing, pre-rendering, and performance optimization. [Documentation](https://nextjs.org/docs)
- **[React](https://reactjs.org)**: JavaScript library for building user interfaces with reusable components. [Documentation](https://reactjs.org/docs)
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework for rapid UI development with predefined classes. [Documentation](https://tailwindcss.com/docs)
- **[Next-intl](https://next-intl-docs.vercel.app/)**: Library for comprehensive internationalization support. [Documentation](https://next-intl-docs.vercel.app/docs)

### UI and Animations

- **[Framer Motion](https://www.framer.com/motion/)**: Library for smooth animations and elegant transitions with a declarative API. [Documentation](https://www.framer.com/motion/introduction/)
- **[Embla Carousel](https://www.embla-carousel.com)**: Interactive and responsive carousels with autoplay support. [Documentation](https://www.embla-carousel.com/get-started/)

### Email and Forms

- **[EmailJS](https://www.emailjs.com/)**: Solution for sending emails directly from client-side JavaScript, without the need for a backend server. Used for contact forms and appointment scheduling. [Documentation](https://www.emailjs.com/docs/)

### Component Libraries

- **[@radix-ui/react-slot](https://www.radix-ui.com)**: Primitive and accessible components for design systems. [Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- **[@tabler/icons-react](https://tabler-icons.io/)**: SVG icon set for React applications. [Documentation](https://github.com/tabler/tabler-icons)

### Utilities

- **[class-variance-authority](https://cva.style/docs)**: Management of component variants with strong typing. [Documentation](https://cva.style/docs)
- **[clsx](https://github.com/lukeed/clsx)**: Utility for conditional concatenation of CSS classes. [GitHub](https://github.com/lukeed/clsx)
- **[lucide-react](https://lucide.dev/)**: Consistent and customizable SVG icon set. [Documentation](https://lucide.dev/docs/lucide-react)
- **[react-icons](https://react-icons.github.io/react-icons/)**: Popular icon library for React. [Website](https://react-icons.github.io/react-icons/)

## Project Structure

```bash
project-root/
├── messages/         # Localization and translation files
├── public/           # Static assets
└── src/
    ├── app/
    │   ├── [locale]/ # Language-specific routes
    │   ├── pages/    # Application pages
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/       # Reusable UI components
    │   └── view/     # Page-specific components
    ├── i18n/         # Internationalization configuration
    ├── lib/          # Utility functions
    └── middleware.ts # Request handlers and language config
```

## Internationalization

The project uses **Next-intl** to provide a multilingual experience. Translation files are stored in the `messages` directory, with locale configuration managed through `middleware.ts` and the `[locale]` dynamic route structure. This allows content to be served in multiple languages, enhancing the user experience for our international audience.

## Deployment

The project is deployed and accessible at:

[drhairtransplantecapilar.com.br](https://drhairtransplantecapilar.com.br)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
