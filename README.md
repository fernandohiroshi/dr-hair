# DR Hair Transplante Capilar

DR Hair Transplante Capilar is a cutting-edge website dedicated to hair transplant procedures and hair loss treatments. Our specialists offer advanced FUE hair transplants along with treatments such as PRP, low-level laser therapy, photobiomodulation, and MMP. The site is designed with a modern, responsive interface and internationalization support to cater to a diverse audience.

![DR Hair Preview](https://imgix.cosmicjs.com/302068e0-f4d0-11ef-b3e3-d17f92c625e7-readme-pic.png)

> **Notice**: This project is licensed under the MIT License. Unauthorized use or duplication of this code is prohibited.

To get started, clone the repository and run the following commands:

```bash
git clone https://github.com/yourusername/drhairtransplantecapilar.git
npm install
npm run dev
```

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Internationalization](#internationalization)
4. [Demo Components](#demo-components)
5. [Deployment](#deployment)
6. [License](#license)

## Technologies Used

The project is built with modern web technologies and libraries to ensure high performance and scalability.

### Front-end

- **Next.js**: React framework for building server-side rendered applications.
- **Next-intl**: Library for internationalization support.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework (with plugins like tailwind-merge and tailwindcss-animate) for rapid UI development.
- **Framer Motion**: For smooth animations and transitions.

### Additional Dependencies

- **@radix-ui/react-slot**: For managing component slots.
- **@tabler/icons-react**: Icon library for React.
- **class-variance-authority**: For conditional class handling.
- **clsx**: Utility for conditionally concatenating CSS classes.
- **embla-carousel, embla-carousel-autoplay, embla-carousel-react**: For creating interactive, responsive carousels.
- **lucide-react** and **react-icons**: For scalable and customizable icons.

## Project Structure

```bash
messages
public
src
├── app
│   ├── [locale]
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── pages/...
├── components
│   ├── ui
│   └── view
├── i18n
├── lib
└── middleware.ts
```

## Project Structure Details

- **messages**: Contains localization files for internationalization.
- **public**: Static assets and media files.
- **src/app**: Main application files including routing, layout, and global styles.
- **components**: Reusable UI and view components.
- **i18n**: Configuration and routing for internationalization.
- **lib**: Utility functions and helper libraries.
- **middleware.ts**: Middleware for handling requests and locale configuration.

## Internationalization

The project uses **Next-intl** for managing translations and locale settings. The localization files are stored in the `messages` folder, and the locale configuration is handled in the `middleware.ts` and `[locale]` directory within `src/app`. This ensures that the website can serve content in multiple languages, providing a better user experience for an international audience.

These components serve as examples of how the project leverages **Next.js**, **Tailwind CSS**, and various UI libraries to create a dynamic and engaging user interface.

## Deployment

The project is deployed live and can be accessed at:

[DR Hair Transplante Capilar](https://drhairtransplantecapilar.com.br)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
