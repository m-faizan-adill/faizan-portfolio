import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Faizan Adil — Full Stack Engineer",
  author: "Muhammad Faizan Adil",
  description:
    "Full Stack Engineer based in Karachi, Pakistan. I specialize in React.js, Next.js, React Native, and building responsive web and mobile applications.",
  lang: "en",
  siteLogo: "/faizan-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/faizan-adil/" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://youtube.com/@faizanuniversitytutorials?si=FTHW6TYRYU2d5mxZ" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://faizan-portfoliio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Faizan Adil",
    specialty: "Full Stack Engineer",
    summary:
      "Full Stack Engineer based in Karachi, Pakistan. I specialize in React.js, Next.js, and React Native, building responsive web and mobile applications with a focus on performance and scalability.",
    email: "adilmuhammadfaizan@gmail.com",
  },
  experience: [
    {
      company: "TrueAi",
      position: "Frontend / Backend Engineer Intern",
      startDate: "Nov 2025",
      endDate: "Dec 2025",
      summary: [
        "Contributing to the TrueAi Command Centre project as a Frontend/Backend Engineer Intern, working on a real-world product in a high-performance engineering environment.",
        "Delivering consistent work with a minimum commitment of 16 hours per week, demonstrating accountability, professionalism, and a willingness to grow in a fast-paced startup setting.",
      ],
    },
    {
      company: "Improdata",
      position: "Frontend Developer Intern",
      startDate: "Sept 2024",
      endDate: "Jan 2025",
      summary: [
        "Developed dynamic and responsive user interfaces using React.js, contributing to production-level features and improving overall UI consistency across multiple projects.",
        "Built scalable web applications with Next.js, ensuring optimal performance, SEO, and server-side rendering for better user experience and discoverability.",
        "Designed and integrated React Native screens for mobile applications, collaborating closely with design and backend teams to deliver smooth, seamless user experiences.",
        "Wrote clean, maintainable code following best practices, and contributed to performance optimization and bug fixes throughout the development cycle.",
      ],
    },
  ],
  projects: [
    {
      name: "Kart – E-Commerce Mobile App",
      summary:
        "A full-featured Flipkart-inspired e-commerce mobile app built with React Native, Node.js, MongoDB, Redux, and Razorpay. Features product catalog, cart, AR viewer, wishlist, and an admin dashboard.",
      linkPreview: "/",
      linkSource: "/",
      image: "/kart.png",
    },
    {
      name: "YouTube Clone",
      summary:
        "A full-stack video sharing platform built with Next.js, TypeScript, Node.js, and Cloudinary. Supports video upload, streaming, JWT authentication, and Redux-based state management.",
      linkPreview: "/",
      linkSource: "/",
      image: "/youtube-clone.png",
    },
    {
      name: "AutoCare360",
      summary:
        "A vehicle service management system built with Next.js, Node.js, and MongoDB. Features role-based access, appointment management, PDF invoice generation, and a real-time admin dashboard.",
      linkPreview: "/",
      linkSource: "/",
      image: "/autocare360.png",
    },
    {
      name: "CliniTrack",
      summary:
        "A full-stack medical dashboard system for managing patients, appointments, and medical records. Built with Next.js, TypeScript, Node.js, and Chart.js with JWT authentication.",
      linkPreview: "/",
      linkSource: "/",
      image: "/clinitrack.png",
    },
    {
      name: "Wizard Portfolio",
      summary:
        "An immersive 3D portfolio website with an interactive wizard theme. Built with Next.js, Three.js, React Three Fiber, and Framer Motion for smooth animations and engaging visual effects.",
      linkPreview: "/",
      linkSource: "/",
      image: "/wizard-portfolio.png",
    },
    {
      name: "Music Pakistan",
      summary:
        "An elegant music streaming landing page showcasing Pakistan's music culture. Built with Next.js, TypeScript, Framer Motion, and Tailwind CSS with procedural visual effects.",
      linkPreview: "/",
      linkSource: "/",
      image: "/music-pakistan.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Muhammad Faizan Adil, a passionate Full Stack Engineer based in Karachi, Pakistan. I'm currently pursuing my Bachelor of Science in Computer Science at Iqra University, and I bring hands-on experience from my internship at Improdata where I worked on real-world React.js, Next.js, and React Native projects.

      I specialize in building responsive, scalable web and mobile applications with a strong focus on clean code, performance optimization, and great user experience. My stack includes React.js, Next.js, React Native, Node.js, Express.js, MongoDB, and TypeScript, and Python — and I'm always eager to learn more.

      Beyond coding, I'm a Gold Medalist in Taekwondo and have participated in national-level competitions in science and the arts. I believe in combining creativity with technical skill to build solutions that truly matter.
    `,
    image: "/faizan-big.jpg",
  },
};