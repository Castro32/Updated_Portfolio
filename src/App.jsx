// import React, { useState, useEffect, useCallback } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { User, FileText, Code, TerminalSquare, Download, X, Menu, Home } from 'lucide-react';

// import HomePage from './pages/home.jsx';
// import BlogsPage from '@/components/ui/blogs';
// import TerminalPage from './pages/terminal.jsx';
// import TerminalWS from './components/terminal/TerminalWS';
// import InterestsPage from '@/components/ui/interests';
// import BlogDetailPage from "./pages/BlogPageDetail.jsx";
// import WhatsAppButton from "./pages/WhatsappButton.jsx";
// import TerminalPaymentCallback from './pages/terminal-payment-callback.jsx';
// import { Button } from '@/components/ui/button';
// import resumePDF from "./assets/Fidel_Castro_CV_Updated (1).pdf";

// const LOGO_URL = "https://res.cloudinary.com/dnacduwvj/image/upload/v1775397186/Generated_Image_April_05__2026_-_4_48PM-removebg-preview_dhnnj0.png";

// const generateUniqueId = () => Math.random().toString(36).substring(2, 9);

// const handleResumeClick = () => {
//   window.open(resumePDF, "_blank");
//   const link = document.createElement("a");
//   link.href = resumePDF;
//   link.download = "Resume.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// const mockPortfolioData = {
//   "name": "Fidel Castro",
//   "title": "Full Stack Developer | Logistics & Tracking Systems | Email Marketing Specialist",
//   "profile_picture_url": "",
//   "bio": "Passionate full-stack developer with hands-on experience building real-world systems including cargo and logistics tracking platforms. I specialize in React, Node.js, and API integrations, with practical exposure to GPS tracking systems, WebSocket-based real-time updates, and IoT device data handling. I also provide website maintenance and marketing newsletter services, leveraging my strong background in WordPress and WooCommerce. I focus on delivering scalable solutions that improve user experience, drive engagement, and support business growth.",
//   "about_me": "Passionate full-stack developer with hands-on experience building real-world systems including cargo and logistics tracking platforms. I specialize in React, Node.js, and API integrations, with practical exposure to GPS tracking systems, WebSocket-based real-time updates, and IoT device data handling. I also provide website maintenance and marketing newsletter services, leveraging my strong background in WordPress and WooCommerce. I focus on delivering scalable solutions that improve user experience, drive engagement, and support business growth.",
//   "contact": {
//     "email": "okanga.fidel@gmail.com",
//     "github": "https://github.com/Castro32",
//     "linkedin": "https://www.linkedin.com/in/fidel-castro-0ab8bb239/",
//     "location": "Nairobi County, Kenya",
//     "website": "https://castro.mabcaslabs.com"
//   },
//   "blogs": [
//     {
//       "id": generateUniqueId(),
//       "title": "WordPress vs. Framer: Choosing the Right Platform for Your Website",
//       "description": "A comparative analysis of WordPress and Framer, exploring their strengths, weaknesses, and ideal use cases for different types of websites, from blogs to complex interactive experiences.",
//       "url": "https://castro.mabcaslabs.com/blog/wordpress-vs-framer",
//       "published_date": "Mar 10, 2026",
//       "read_time": 10,
//       "platform": "",
//       "tags": ["WordPress", "Framer", "Website Builder", "CMS", "Web Design"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "WooCommerce vs. Shopify: A Head-to-Head for E-commerce Success",
//       "description": "Deep dive into WooCommerce and Shopify, comparing features, scalability, pricing, and customization options to help businesses decide which e-commerce platform best suits their needs.",
//       "url": "https://castro.mabcaslabs.com/blog/woocommerce-vs-shopify",
//       "published_date": "Feb 18, 2026",
//       "read_time": 12,
//       "platform": "",
//       "tags": ["WooCommerce", "Shopify", "E-commerce", "Online Store", "Business"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Building Scalable React Applications with TypeScript",
//       "description": "Learn how to structure large-scale React applications using TypeScript, exploring advanced patterns, best practices, and performance optimization techniques that I've learned from building production applications.",
//       "url": "https://castro.mabcaslabs.com/blog/react-typescript-scalable",
//       "published_date": "Dec 15, 2025",
//       "read_time": 8,
//       "platform": "",
//       "tags": ["React", "TypeScript", "Architecture", "Performance"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "AWS Lambda Functions: From Zero to Production",
//       "description": "A comprehensive guide to building, deploying, and monitoring AWS Lambda functions. Covers everything from basic setup to advanced patterns like event-driven architecture and cold start optimization.",
//       "url": "https://castro.mabcaslabs.com/blog/aws-lambda-guide",
//       "published_date": "Nov 28, 2025",
//       "read_time": 12,
//       "platform": "",
//       "tags": ["AWS", "Lambda", "Serverless", "Node.js"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "How to Seamlessly Roll Auth into Your React App using Firebase Authentication",
//       "description": "Learn how to implement production-ready authentication in minutes with Firebase, eliminating the need to build auth servers from scratch.",
//       "url": "https://castro.mabcaslabs.com/blog/how-to-seamlessly-roll-auth-into-your-react-app-using-firebase-authentication",
//       "published_date": "Oct 22, 2025",
//       "read_time": 8,
//       "platform": "",
//       "tags": ["React", "Firebase", "Authentication", "BaaS"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "What is Inversion of Control?",
//       "description": "Exploring how IoC flips traditional program structure to create more testable and maintainable code in Node.js applications.",
//       "url": "https://castro.mabcaslabs.com/blog/inversion-of-control",
//       "published_date": "Oct 1, 2025",
//       "read_time": 10,
//       "platform": "",
//       "tags": ["Node.js", "Dependency Injection", "Testing", "Architecture"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Master Any Framework: The Mindset Shift That Actually Works",
//       "description": "The secret sauce big teams use to adopt NestJS, Spring, or GraphQL quickly and wield new languages confidently.",
//       "url": "https://castro.mabcaslabs.com/blog/master-any-framework-the-mindset-shift-that-actually-works",
//       "published_date": "Sep 8, 2025",
//       "read_time": 12,
//       "platform": "",
//       "tags": ["Learning", "Frameworks", "NestJS", "Spring"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "MPesa Daraja 2.0 + tRPC",
//       "description": "A type-safe alternative to integrate with Daraja 2.0 that simplifies STK push, reduces bugs, and improves developer experience.",
//       "url": "https://castro.mabcaslabs.com/blog/intergration-mpesa-daraja-and-daraja-2.0",
//       "published_date": "Dec 27, 2025",
//       "read_time": 15,
//       "platform": "",
//       "tags": ["MPesa", "tRPC", "Payments", "TypeScript"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "The Future of IoT: Building Smart Systems with React and Firebase",
//       "description": "Exploring how modern web technologies can be used to create intuitive dashboards for IoT devices. Real-world examples from my experience building smart fragrance systems.",
//       "url": "https://castro.mabcaslabs.com/blog/iot-react-firebase",
//       "published_date": "Oct 22, 2025",
//       "read_time": 10,
//       "platform": "",
//       "tags": ["IoT", "React", "Firebase", "Smart Systems"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Understanding GraphQL: A Practical Approach",
//       "description": "Deep dive into GraphQL fundamentals, from basic queries to advanced schema design. Includes practical examples and performance considerations for production applications.",
//       "url": "https://castro.mabcaslabs.com/blog/graphql-practical-guide",
//       "published_date": "Oct 5, 2025",
//       "read_time": 15,
//       "platform": "",
//       "tags": ["GraphQL", "API Design", "Apollo", "Backend"]
//     }
//   ],
//   "experience": [
//     {
//       "id": generateUniqueId(),
//       "title": "Full Stack Developer & Digital Marketing Specialist",
//       "company": "CB Consulting & Media Group",
//       "dates": "Sep 2025 - Present",
//       "location": "OnSite",
//       "description_points": [
//         "Design, develop, and maintain responsive, user-friendly websites and web applications.",
//         "Create visually appealing layouts, graphics, and interfaces aligned with brand guidelines.",
//         "Develop and manage both front-end and back-end functionalities (UI/UX, databases, APIs, server-side logic).",
//         "Optimize websites for speed, performance, SEO, and mobile responsiveness.",
//         "Ensure cross-browser, cross-platform, and device compatibility.",
//         "Maintain and update existing websites, troubleshooting and resolving technical issues, with ongoing work on WordPress and WooCommerce platforms.",
//         "Collaborate with internal teams to deliver digital solutions that meet client requirements.",
//         "Stay updated with industry trends, best practices, and emerging technologies in web development and design.",
//         "Ensure website security, regular updates, and proper backup procedures."
//       ],
//       "tags": ["Web Development", "UI/UX Design", "SEO", "Performance Optimization", "Cross-Platform Compatibility", "Security", "Maintenance", "WordPress", "Shopify", "Framer", "WooCommerce", "Digital Marketing", "Newsletter Management"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Senior Frontend Developer",
//       "company": "Organic Bloom (Contract)",
//       "dates": "Oct 2025 - Dec 2025 · 3 mos",
//       "location": "Nairobi County, Kenya · Remote",
//       "description_points": [
//         "Led the design and development of the Next.js storefront UI for an organic products online store, delivering a fast, responsive, and conversion-focused user experience.",
//         "Collaborated with backend engineers to integrate the frontend with NestJS services powering product discovery, checkout, and fulfillment.",
//         "Built key customer-facing flows including product browsing, cart, checkout, and order tracking.",
//         "Worked closely with backend logic to support inventory visibility, stock status display, and restock indicators on the frontend.",
//         "Developed admin-facing interfaces for order management, analytics views, and merchandising workflows.",
//         "Improved Core Web Vitals through image optimization, code splitting, lazy loading, and performance-focused UI patterns.",
//         "Contributed to authentication and role-based access flows across shopper, support, and admin interfaces.",
//         "Supported CI/CD testing and deployment processes by validating frontend builds and production releases."
//       ],
//       "tags": ["Next.js", "NestJS", "PostgreSQL", "Redis", "Payment Integration", "PCI DSS", "CI/CD", "AWS"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Innovation Engineer",
//       "company": "STEMROBO Technologies",
//       "dates": "April 2025 - September 2025 · 5 mos",
//       "location": "Nairobi County, Kenya · On-site",
//       "description_points": [
//         "Led the design and delivery of engaging STEM learning programs covering robotics, AI, IoT, and coding for K–12 students.",
//         "Conducted interactive workshops and innovation lab sessions across multiple schools, building strong problem-solving, critical thinking, and design-thinking skills.",
//         "Mentored students in creating functional prototypes using Arduino, sensors, and 3D printing technologies.",
//         "Designed and customized lesson plans and teaching materials to suit different age groups and learning abilities.",
//         "Worked closely with teachers to embed STEM concepts into existing curricula, improving classroom engagement and outcomes.",
//         "Planned and facilitated STEM competitions and hackathons to encourage creativity, collaboration, and innovation.",
//         "Continuously researched emerging STEM education trends to enhance and update program content."
//       ],
//       "tags": ["STEM Education", "Robotics", "IoT", "Curriculum Development", "Student Mentorship", "Workshop Facilitation"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Frontend Developer — Cargo Tracking System",
//       "company": "Logistics & Transport Sector (Contract)",
//       "dates": "Oct 2024 - March 2025 · 6 mos",
//       "location": "Nairobi County, Kenya · Remote",
//       "description_points": [
//         "Developed a national cargo tracking system frontend using React and Material UI, covering the full logistics lifecycle from dispatch to delivery.",
//         "Built comprehensive modules for driver management, cargo carrier management, real-time cargo tracking, and journey management.",
//         "Implemented real-time GPS location updates via WebSockets for live container and cargo monitoring across routes.",
//         "Integrated RESTful APIs and ensured seamless data flow between frontend and backend services.",
//         "Built dynamic data mapping and full CRUD functionality across all system modules.",
//         "Implemented PDF journey report generation, allowing admins and operators to download detailed journey logs for record-keeping and audit purposes.",
//         "Optimized application performance and responsiveness across devices for field and office use.",
//         "Conducted thorough testing and debugging to ensure high-quality, reliable deliverables.",
//         "Provided technical documentation and user training for system adoption."
//       ],
//       "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "Logistics", "Performance Optimization"]
//     },
//     {
//       "id": generateUniqueId(),
//       "title": "Software Engineering Trainee",
//       "company": "Power Learn Project",
//       "dates": "August 2024 - December 2024 · 5 mos",
//       "location": "Nairobi County, Kenya · On-site",
//       "description_points": [
//         "Participated in an intensive software development training program focusing on web technologies (HTML, CSS), Python, and JavaScript.",
//         "Advanced to specialized mobile development with Dart and Flutter modules.",
//         "Covered web development fundamentals including HTML, CSS, and responsive design.",
//         "Studied Python programming and the Django framework.",
//         "Worked through JavaScript fundamentals and practical applications.",
//         "Focused on Dart programming language and Flutter for cross-platform mobile development.",
//         "Studied data structures and algorithms."
//       ],
//       "tags": ["HTML", "CSS", "Python", "JavaScript", "Dart", "Flutter", "Django"]
//     },
//   ],
//   "projects": [
//     {
//       "id": generateUniqueId(),
//       "name": "National Cargo Tracking System",
//       "description": "A comprehensive end-to-end cargo tracking platform built with React and Material UI. The system includes modules for driver management, cargo carrier management, real-time cargo tracking, and journey management. Implemented real-time GPS location updates via WebSockets for live container monitoring across national routes. Integrated RESTful APIs for seamless data flow, built dynamic data mapping, and full CRUD functionality across all modules. Features include downloadable journey reports as PDF for record-keeping and audit purposes. Optimized for performance and responsiveness across both field and office devices.",
//       // "website_link": "https://ects.keshiholdings.com/",
//       "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "PDF Reports", "Logistics", "Performance Optimization"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Jay-B Fitness & Performance",
//       "description": "A full-stack fitness and performance platform designed to deliver personalized training programs, nutrition guidance, and wellness resources. The platform provides an intuitive user experience for exploring workouts, booking sessions, and tracking fitness progress. It features a subscription-based system with seamless M-Pesa integration for secure payments, alongside an e-commerce module that allows users to purchase gym wear and fitness merchandise. Built with a focus on performance, scalability, and user engagement.",
//       "website_link": "https://jay-b-fitness.vercel.app",
//       "tags": ["Web Development", "Fitness Platform", "UI/UX", "E-commerce", "M-Pesa Integration", "Full-Stack"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Milliden Gardens Resort",
//       "description": "A modern resort website designed to showcase hospitality services while enabling seamless online booking. The platform allows guests to explore amenities, view available services, and make reservations with ease. It features an integrated booking system that automatically sends email notifications to both the admin and customers, ensuring efficient reservation management and communication. Built with a focus on user experience, accessibility, and reliability.",
//       "website_link": "https://milliden-gardens-makeover.vercel.app",
//       "tags": ["Web Development", "Booking System", "UI/UX", "Email Integration", "Hospitality"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Avya Beauty Salon",
//       "description": "A modern beauty and wellness platform that connects clients with salon services through easy online booking, service browsing, and appointment management. It offers a seamless user experience for discovering treatments, scheduling visits, and staying updated with salon offers and trends.",
//       "website_link": "https://avyabeauty.com",
//       "tags": ["Web Development", "Booking System", "UI/UX"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Organic Bloom",
//       "description": "A full-featured eCommerce platform for selling organic and health products, offering smooth online shopping with M-Pesa STK Push payments. It includes order tracking, inventory management, and an easy-to-use interface for customers to browse, purchase, and monitor their orders in real time.",
//       "website_link": "https://organicbloom.co.ke/",
//       "tags": ["E-commerce", "M-Pesa", "Payment Integration", "Inventory Management", "React", "Next.js"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "EMS Market Mall",
//       "description": "A website for an upcoming shopping mall located in Lavington, Nairobi, Kenya. The platform showcases the mall, its shops, and services, providing visitors with information about available spaces, stores, and updates as the mall prepares for launch.",
//       "website_link": "https://www.emsmarket.co.ke/",
//       "tags": ["Web Development", "Real Estate", "Marketing Site"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Quiet Empire Podcast",
//       "description": "A podcast website dedicated to sharing inspiring stories and insights from various guests. The platform features episodes, show notes, and subscription options, allowing listeners to easily access and engage with the content.",
//       "website_link": "https://quietempirepodcast.com/",
//       "tags": ["Web Development", "Podcast Platform", "Content Management"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Portfolio Terminal",
//       "description": "Interactive terminal-style portfolio with GUI/CLI modes, showcasing projects, skills, and experience through a developer-first interface.",
//       "website_link": "https://better-portfolio-pi.vercel.app",
//       "tags": ["React", "Terminal", "Animation", "Portfolio", "CLI", "UI/UX"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Grounded.co.ke — Maintenance & Marketing",
//       "description": "Ongoing website maintenance, content updates, and marketing newsletter management for an e-commerce store built on WordPress and WooCommerce, ensuring optimal performance and consistent customer engagement.",
//       "website_link": "https://grounded.co.ke/",
//       "tags": ["WordPress", "WooCommerce", "Website Maintenance", "Digital Marketing", "Newsletter Management", "E-commerce"]
//     },
//     {
//       "id": generateUniqueId(),
//       "name": "Canvas Cosmetic — Maintenance & Marketing",
//       "description": "Comprehensive website maintenance and targeted marketing newsletters for a cosmetics e-commerce brand, leveraging WordPress and WooCommerce to enhance user experience and drive sales.",
//       "website_link": "https://www.canvascosmetic.com/",
//       "tags": ["WordPress", "WooCommerce", "Website Maintenance", "Digital Marketing", "Newsletter Management", "E-commerce"]
//     }
//   ],
//   "skills": [
//     {
//       "category": "Frontend",
//       "values": ["React", "TypeScript", "Dart", "Flutter", "Next.js", "Framer", "Material UI"]
//     },
//     {
//       "category": "Backend",
//       "values": ["NestJS", "Node.js", "Java", "Firebase", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Message Queues (BULLMQ)"]
//     },
//     {
//       "category": "Tracking & IoT",
//       "values": ["GPS Tracking Systems", "WebSockets (Real-time)", "Teltonika Devices", "Reverse Geocoding", "IoT Device Integration", "Real-time Data Mapping"]
//     },
//     {
//       "category": "E-commerce & CMS",
//       "values": ["Shopify", "WordPress", "WooCommerce", "Framer CMS", "E-commerce Development"]
//     },
//     {
//       "category": "Cloud & DevOps",
//       "values": ["AWS", "Cloudflare", "CI/CD", "Linux", "Docker", "Git"]
//     },
//     {
//       "category": "Other",
//       "values": ["Technical Documentation", "API Development", "SEO Optimization", "Digital Marketing", "UI/UX Design", "Newsletter Campaigns", "Client Management"]
//     }
//   ],
//   "education": {
//     "degree": "Bachelor's degree, Information Communication Technology",
//     "university": "KCA University",
//     "dates": "2021 - 2025 (Expected)",
//     "description": "Focused on foundational concepts in Information Communication Technology, including web technologies, programming, and database management.",
//     "tags": ["Information Technology", "Web Development", "Programming"]
//   },
//   "certifications": [
//     {
//       "name": "AWS Database Migration Service",
//       "issuer": "Amazon Web Services (AWS)",
//       "date": "May 2025",
//       "skills": ["Amazon Relational Database Service (RDS)", "Amazon Database Migration Service", "AWS Migrations"]
//     },
//     {
//       "name": "Configuring and Deploying VPCs with Multiple Subnets",
//       "issuer": "Amazon Web Services (AWS)",
//       "date": "May 2025",
//       "skills": ["AWS Networking", "VPC", "Cloud Infrastructure"]
//     },
//     {
//       "name": "Graph Developer - Associate",
//       "issuer": "Apollo GraphQL",
//       "date": "Feb 2025",
//       "skills": ["Apollo GraphQL", "GraphQL", "Node.js", "API Development"]
//     },
//     {
//       "name": "Google Cloud Skills Badges",
//       "issuer": "Google Cloud Skills Boost",
//       "date": "2024",
//       "skills": ["PostgreSQL", "Databases", "Load Balancing", "Cloud Infrastructure", "Cloud Storage", "Google Cloud Platform"]
//     },
//     {
//       "name": "AWS re/Start Graduate",
//       "issuer": "Amazon Web Services (AWS)",
//       "date": "Aug 2024",
//       "skills": ["Amazon Web Services (AWS)", "Cloud Computing", "Linux Fundamentals"]
//     }
//   ],
//   "honors": [
//     {
//       "name": "GDSC-Core Team Member-(Android) - KU",
//       "issuer": "GDSC - Kenyatta University",
//       "date": "Jul 2024",
//       "description": "As a GDSC Core Member and Android Lead at Kenyatta University, played a crucial role in fostering a vibrant community of student developers by organizing workshops, leading coding sessions, and mentoring peers in Android development. Contributed to building and maintaining open-source projects.",
//       "tags": ["Community Leadership", "Android Development", "Mentorship", "Google Developer Student Clubs"]
//     }
//   ],
//   "recommendations": [
//     {
//       "name": "Mr. Kibet",
//       "position": "CEO at REDOLENCE LIVING LIMITED (BEE MULTISCENTS)",
//       "date": "March 4, 2025",
//       "content": "Highly recommend Barrack Ouma for his exceptional contributions at Bee Multiscent. As a key member of our development team, Barrack played a crucial role in designing and managing the full-stack architecture of our IoT-integrated fragrance system. His expertise in React.js, Firebase, Node.js, and Cloudflare security ensured a seamless and secure user experience."
//     }
//   ],
//   "interests": [
//     "Dependency Injection", "CQRS", "Pub/Sub", "CDNs", "TDD",
//     "Cloud Computing",
//     "Technical Writing",
//     "Mobile Development",
//     "E-commerce Platforms",
//     "Digital Marketing",
//     "IoT",
//     "AI/ML",
//     "GPS & Logistics Systems",
//     "Real-time Data Streaming"
//   ]
// };

// // ─── Loading Screen ───────────────────────────────────────────────────────────

// const LoadingScreen = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="min-h-screen bg-background flex items-center justify-center"
//   >
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//       className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
//     />
//     <span className="ml-3 text-primary font-mono">FIDEL CASTRO...</span>
//   </motion.div>
// );

// // ─── Nav Links ────────────────────────────────────────────────────────────────

// const NavLink = React.memo(({ to, children, isActive }) => (
//   <Link
//     to={to}
//     className={`hover:text-primary transition-colors duration-200 ${
//       isActive ? 'text-primary' : 'text-foreground'
//     }`}
//   >
//     {children}
//   </Link>
// ));

// const MobileNavLink = React.memo(({ to, children, isActive }) => (
//   <Link
//     to={to}
//     className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
//       isActive
//         ? 'text-primary bg-primary/20'
//         : 'text-foreground hover:bg-card-foreground'
//     }`}
//   >
//     {children}
//   </Link>
// ));

// // ─── Animated Header ──────────────────────────────────────────────────────────

// const AnimatedHeader = React.memo(({ mode, onModeToggle }) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [location.pathname]);

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="bg-card text-foreground p-4 sticky top-0 z-50 shadow-md border-b border-border"
//     >
//       <div className="mx-auto max-w-5xl flex justify-between items-center">

//         {/* Logo */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <Link to="/" className="block hover:opacity-80 transition-opacity duration-200">
//             <img
//               src={LOGO_URL}
//               alt="Fidel Castro"
//               style={{ height: '100px', width: 'auto', objectFit: 'contain', display: 'block' }}
//             />
//           </Link>
//         </motion.div>

//         {/* Desktop Nav */}
//         <motion.nav
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="hidden md:flex items-center gap-6 text-sm"
//         >
//           <NavLink to="/" isActive={isHomePage}>Home</NavLink>
//           <NavLink to="/blogs" isActive={location.pathname === '/blogs'}>Blogs</NavLink>
//           <NavLink to="/interests" isActive={location.pathname === '/interests'}>Interests</NavLink>
//         </motion.nav>

//         {/* Right Actions */}
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="flex items-center gap-3"
//         >
//           <a
//             onClick={handleResumeClick}
//             className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary hover:text-foreground transition-colors duration-200 cursor-pointer"
//           >
//             <Download className="w-4 h-4" />
//             <span>Resume</span>
//           </a>

//           <Button
//             variant="outline"
//             className="hidden lg:flex bg-transparent border-border hover:bg-card-foreground hover:text-card transition-all duration-300"
//             onClick={onModeToggle}
//           >
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-foreground"
//             >
//               {mode === 'gui' ? (
//                 <>
//                   <TerminalSquare className="w-4 h-4 mr-2 text-primary" />
//                   Terminal Mode
//                 </>
//               ) : (
//                 <>
//                   <User className="w-4 h-4 mr-2 text-primary" />
//                   GUI Mode
//                 </>
//               )}
//             </motion.div>
//           </Button>

//           {/* Hamburger */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen
//               ? <X className="w-6 h-6 text-foreground" />
//               : <Menu className="w-6 h-6 text-foreground" />
//             }
//           </button>
//         </motion.div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden absolute left-0 right-0 bg-card shadow-lg border-t border-border z-40"
//           >
//             <div className="px-4 py-3 space-y-3">
//               <MobileNavLink to="/" isActive={isHomePage}>
//                 <Home className="w-5 h-5 mr-3" /> Home
//               </MobileNavLink>
//               <MobileNavLink to="/blogs" isActive={location.pathname === '/blogs'}>
//                 <FileText className="w-5 h-5 mr-3" /> Blogs
//               </MobileNavLink>
//               <MobileNavLink to="/interests" isActive={location.pathname === '/interests'}>
//                 <Code className="w-5 h-5 mr-3" /> Interests
//               </MobileNavLink>

//               <a
//                 onClick={handleResumeClick}
//                 className="flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary transition-colors duration-200 cursor-pointer"
//               >
//                 <Download className="w-4 h-4" />
//                 <span>Resume</span>
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// });

// // ─── Page Transition ──────────────────────────────────────────────────────────

// const PageTransition = ({ children }) => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={location.pathname}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.3 }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ─── App Content ──────────────────────────────────────────────────────────────

// function AppContent() {
//   const [portfolioData, setPortfolioData] = useState(null);
//   const [mode, setMode] = useState('gui');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         await new Promise(resolve => setTimeout(resolve, 1500));
//         setPortfolioData(mockPortfolioData);
//       } catch (error) {
//         console.error("Failed to load portfolio data:", error);
//         setPortfolioData(mockPortfolioData);
//       }
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   const switchToGui = useCallback(() => setMode('gui'), []);
//   const toggleMode = useCallback(() => {
//     setMode(prev => {
//       if (prev === 'gui') return 'terminal';
//       if (prev === 'terminal') return 'ws-terminal';
//       return 'gui';
//     });
//   }, []);

//   return (
//     <div className="min-h-screen text-foreground">
//       <AnimatePresence mode="wait">
//         {loading ? (
//           <LoadingScreen key="loading" />
//         ) : (
//           <motion.div
//             key="main"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-full min-h-screen"
//           >
//             <AnimatePresence mode="wait">
//               {mode === 'terminal' ? (
//                 <motion.div
//                   key="terminal"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                   className="min-h-screen"
//                 >
//                   <TerminalPage portfolioData={portfolioData} switchToGui={switchToGui} />
//                 </motion.div>
//               ) : mode === 'ws-terminal' ? (
//                 <motion.div
//                   key="ws-terminal"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                   className="min-h-screen"
//                 >
//                   <TerminalWS onClose={switchToGui} />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="gui"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <AnimatedHeader mode={mode} onModeToggle={toggleMode} />
//                   <PageTransition>
//                     <Routes>
//                       <Route path="/" element={<HomePage portfolioData={portfolioData} />} />
//                       <Route path="/blogs" element={<BlogsPage portfolioData={portfolioData} />} />
//                       <Route path="/blog/:slug" element={<BlogDetailPage portfolioData={portfolioData} />} />
//                       <Route path="/interests" element={<InterestsPage portfolioData={portfolioData} />} />
//                       <Route path="/terminal-payment-callback" element={<TerminalPaymentCallback />} />
//                     </Routes>
//                   </PageTransition>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── App Root ─────────────────────────────────────────────────────────────────

// function App() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@400;500;700;900&display=swap');

//         body, #root {
//           font-family: 'Inter', sans-serif;
//           background-color: var(--background);
//           color: var(--foreground);
//         }
//         .font-mono {
//           font-family: 'Fira Code', monospace;
//         }

//         :root {
//           --background: #f5f4f2;
//           --foreground: #030303;
//           --primary: #821d30;
//           --primary-foreground: #f5f4f2;
//           --primary-light: #c3b79d;
//           --secondary: #dcd7d4;
//           --secondary-foreground: #2c2a2b;
//           --card: #dcd7d4;
//           --card-foreground: #030303;
//           --border: #c3b79d;
//           --ring: #821d30;
//           --muted: #c3b79d;
//           --muted-foreground: #2c2a2b;
//           --accent: #2c2a2b;
//           --accent-foreground: #f5f4f2;
//           --destructive: oklch(0.577 0.245 27.325);
//           --chart-1: oklch(0.646 0.222 41.116);
//           --chart-2: oklch(0.6 0.118 184.704);
//           --chart-3: oklch(0.398 0.07 227.392);
//           --chart-4: oklch(0.828 0.189 84.429);
//           --chart-5: oklch(0.769 0.188 70.08);
//         }

//         .dark {
//           --background: #030303;
//           --foreground: #f5f4f2;
//           --primary: #821d30;
//           --primary-foreground: #f5f4f2;
//           --primary-light: #c3b79d;
//           --secondary: #2c2a2b;
//           --secondary-foreground: #dcd7d4;
//           --card: #2c2a2b;
//           --card-foreground: #f5f4f2;
//           --border: #dcd7d4;
//           --ring: #821d30;
//           --muted: #2c2a2b;
//           --muted-foreground: #dcd7d4;
//           --accent: #c3b79d;
//           --accent-foreground: #030303;
//           --destructive: oklch(0.704 0.191 22.216);
//           --chart-1: oklch(0.488 0.243 264.376);
//           --chart-2: oklch(0.696 0.17 162.48);
//           --chart-3: oklch(0.769 0.188 70.08);
//           --chart-4: oklch(0.627 0.265 303.9);
//           --chart-5: oklch(0.645 0.246 16.439);
//         }
//       `}</style>

//       <Router>
//         <AppContent />
//         <WhatsAppButton />
//       </Router>
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, Code, TerminalSquare, Download, X, Menu, Home, LayoutGrid, Mail } from 'lucide-react';

import HomePage from './pages/home.jsx';
import BlogsPage from '@/components/ui/blogs';
import ProjectsPage from './pages/projects.jsx';
import NewslettersPage from './pages/newsletters.jsx';
import TerminalPage from './pages/terminal.jsx';
import TerminalWS from './components/terminal/TerminalWS';
import InterestsPage from '@/components/ui/interests';
import BlogDetailPage from "./pages/BlogPageDetail.jsx";
import WhatsAppButton from "./pages/WhatsappButton.jsx";
import TerminalPaymentCallback from './pages/terminal-payment-callback.jsx';
import { Button } from '@/components/ui/button';
import resumePDF from "./assets/Fidel_Castro_CV_Updated (1).pdf";
import zucchiniPreview from "./assets/projects/zucchini.jpg";
// Newsletter designs — drop files in src/assets/newsletters/ then import & assign to image:
// import groundedPromo from './assets/newsletters/grounded-promo.jpg';
// import canvasLaunch from './assets/newsletters/canvas-launch.jpg';
// import organicOffers from './assets/newsletters/organic-bloom-offers.jpg';

const LOGO_URL = "https://res.cloudinary.com/dnacduwvj/image/upload/v1775397186/Generated_Image_April_05__2026_-_4_48PM-removebg-preview_dhnnj0.png";

const generateUniqueId = () => Math.random().toString(36).substring(2, 9);

const handleResumeClick = () => {
  window.open(resumePDF, "_blank");
  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const mockPortfolioData = {
  "name": "Fidel Castro",
  "title": "Full Stack Developer",
  "profile_picture_url": "",
  "bio": "Full stack developer building end-to-end web products — clean interfaces, solid APIs, and reliable systems that businesses can run every day.",
  "about_me": "I am a full stack developer focused on shipping complete web products: frontend, backend, integrations, and the details that make them production-ready.\n\nI work across the stack with React, Node.js, and modern tooling — from customer-facing apps and admin dashboards to payments, auth, content platforms, and ongoing maintenance. Whether it is a new product build or improving something already live, I care about clarity, performance, and code teams can actually maintain.\n\nFor ecommerce brands I also run email programs on Mailchimp, Klaviyo, OpenCart, and Shopify mail messaging — marketing newsletters, purchase-behavior segments, and abandoned-cart automation. My work spans e-commerce, brand platforms, hospitality, real estate, and operational tools. The common thread is the same: full stack ownership from idea to launch — and support after.",
  "contact": {
    "email": "okanga.fidel@gmail.com",
    "github": "https://github.com/Castro32",
    "linkedin": "https://www.linkedin.com/in/fidel-castro-0ab8bb239/",
    "location": "Nairobi County, Kenya",
    "website": "https://castro.mabcaslabs.com"
  },
  "blogs": [
    {
      "id": generateUniqueId(),
      "title": "Abandoned Cart Emails That Actually Recover Sales",
      "description": "A practical playbook for abandoned-cart automation on Shopify and WooCommerce — timing, copy, segmentation, and what I have seen work for grocery, beauty, and home-care brands.",
      "url": "https://castro.mabcaslabs.com/blog/abandoned-cart-emails-that-recover-sales",
      "published_date": "Aug 28, 2026",
      "read_time": 9,
      "platform": "",
      "tags": ["Email Marketing", "Abandoned Cart", "E-commerce", "Automation"]
    },
    {
      "id": generateUniqueId(),
      "title": "Segmenting Ecommerce Customers by Purchase Behavior",
      "description": "How I build purchase-behavior segments for marketing newsletters — RFM-style thinking without the jargon, applied to real Kenyan and multi-region store catalogues.",
      "url": "https://castro.mabcaslabs.com/blog/segmenting-ecommerce-customers-by-purchase-behavior",
      "published_date": "Aug 12, 2026",
      "read_time": 11,
      "platform": "",
      "tags": ["Email Marketing", "Segmentation", "Shopify", "WooCommerce"]
    },
    {
      "id": generateUniqueId(),
      "title": "Full Stack Maintenance: Keeping Client Stores Fast After Launch",
      "description": "Launch is only half the job. Notes from maintaining live stores — updates, performance, content ops, and the small fixes that stop conversion from quietly decaying.",
      "url": "https://castro.mabcaslabs.com/blog/full-stack-maintenance-keeping-client-stores-fast",
      "published_date": "Jul 30, 2026",
      "read_time": 8,
      "platform": "",
      "tags": ["Full Stack", "Website Maintenance", "Performance", "E-commerce"]
    },
    {
      "id": generateUniqueId(),
      "title": "Designing Marketing Newsletters Brands Are Happy to Send",
      "description": "Layout, hierarchy, and CTA patterns I use when designing marketing emails for product brands — so campaigns look on-brand and still convert on mobile.",
      "url": "https://castro.mabcaslabs.com/blog/designing-marketing-newsletters-that-convert",
      "published_date": "Jul 9, 2026",
      "read_time": 7,
      "platform": "",
      "tags": ["Newsletter Design", "Email Marketing", "UI/UX", "Conversion"]
    },
    {
      "id": generateUniqueId(),
      "title": "Shipping Real Estate Platforms with React: Lessons from Aura Key",
      "description": "Patterns for property listing UIs, agent flows, and investor-facing content — what matters when a real estate site has to feel premium and still stay usable.",
      "url": "https://castro.mabcaslabs.com/blog/shipping-real-estate-platforms-with-react",
      "published_date": "Jun 22, 2026",
      "read_time": 10,
      "platform": "",
      "tags": ["React", "Real Estate", "Full Stack", "UI/UX"]
    },
    {
      "id": generateUniqueId(),
      "title": "From Storefront to Stack: What Full Stack Actually Means on Client Work",
      "description": "A clear take on full stack delivery for client products — frontend, APIs, payments, CMS, and post-launch ownership without overbuilding.",
      "url": "https://castro.mabcaslabs.com/blog/what-full-stack-means-on-client-work",
      "published_date": "Jun 3, 2026",
      "read_time": 8,
      "platform": "",
      "tags": ["Full Stack", "React", "Node.js", "Product Delivery"]
    },
    {
      "id": generateUniqueId(),
      "title": "M-Pesa STK Push Without the Pain: Production Checkout Notes",
      "description": "Practical guidance for wiring M-Pesa into ecommerce checkouts — callbacks, failure states, and UX details that keep payments trustworthy.",
      "url": "https://castro.mabcaslabs.com/blog/mpesa-stk-push-production-checkout-notes",
      "published_date": "May 18, 2026",
      "read_time": 12,
      "platform": "",
      "tags": ["M-Pesa", "Payments", "E-commerce", "Node.js"]
    },
    {
      "id": generateUniqueId(),
      "title": "WordPress vs. Framer: Choosing the Right Platform for Your Website",
      "description": "A comparative analysis of WordPress and Framer, exploring their strengths, weaknesses, and ideal use cases for different types of websites, from blogs to complex interactive experiences.",
      "url": "https://castro.mabcaslabs.com/blog/wordpress-vs-framer",
      "published_date": "Mar 10, 2026",
      "read_time": 10,
      "platform": "",
      "tags": ["WordPress", "Framer", "Website Builder", "CMS", "Web Design"]
    },
    {
      "id": generateUniqueId(),
      "title": "WooCommerce vs. Shopify: A Head-to-Head for E-commerce Success",
      "description": "Deep dive into WooCommerce and Shopify, comparing features, scalability, pricing, and customization options to help businesses decide which e-commerce platform best suits their needs.",
      "url": "https://castro.mabcaslabs.com/blog/woocommerce-vs-shopify",
      "published_date": "Feb 18, 2026",
      "read_time": 12,
      "platform": "",
      "tags": ["WooCommerce", "Shopify", "E-commerce", "Online Store", "Business"]
    },
    {
      "id": generateUniqueId(),
      "title": "MPesa Daraja 2.0 + tRPC",
      "description": "A type-safe alternative to integrate with Daraja 2.0 that simplifies STK push, reduces bugs, and improves developer experience.",
      "url": "https://castro.mabcaslabs.com/blog/intergration-mpesa-daraja-and-daraja-2.0",
      "published_date": "Dec 27, 2025",
      "read_time": 15,
      "platform": "",
      "tags": ["MPesa", "tRPC", "Payments", "TypeScript"]
    },
    {
      "id": generateUniqueId(),
      "title": "Building Scalable React Applications with TypeScript",
      "description": "Learn how to structure large-scale React applications using TypeScript, exploring advanced patterns, best practices, and performance optimization techniques that I've learned from building production applications.",
      "url": "https://castro.mabcaslabs.com/blog/react-typescript-scalable",
      "published_date": "Dec 15, 2025",
      "read_time": 8,
      "platform": "",
      "tags": ["React", "TypeScript", "Architecture", "Performance"]
    },
    {
      "id": generateUniqueId(),
      "title": "AWS Lambda Functions: From Zero to Production",
      "description": "A comprehensive guide to building, deploying, and monitoring AWS Lambda functions. Covers everything from basic setup to advanced patterns like event-driven architecture and cold start optimization.",
      "url": "https://castro.mabcaslabs.com/blog/aws-lambda-guide",
      "published_date": "Nov 28, 2025",
      "read_time": 12,
      "platform": "",
      "tags": ["AWS", "Lambda", "Serverless", "Node.js"]
    },
    {
      "id": generateUniqueId(),
      "title": "How to Seamlessly Roll Auth into Your React App using Firebase Authentication",
      "description": "Learn how to implement production-ready authentication in minutes with Firebase, eliminating the need to build auth servers from scratch.",
      "url": "https://castro.mabcaslabs.com/blog/how-to-seamlessly-roll-auth-into-your-react-app-using-firebase-authentication",
      "published_date": "Oct 22, 2025",
      "read_time": 8,
      "platform": "",
      "tags": ["React", "Firebase", "Authentication", "BaaS"]
    },
    {
      "id": generateUniqueId(),
      "title": "The Future of IoT: Building Smart Systems with React and Firebase",
      "description": "Exploring how modern web technologies can be used to create intuitive dashboards for IoT devices. Real-world examples from my experience building smart fragrance systems.",
      "url": "https://castro.mabcaslabs.com/blog/iot-react-firebase",
      "published_date": "Oct 22, 2025",
      "read_time": 10,
      "platform": "",
      "tags": ["IoT", "React", "Firebase", "Smart Systems"]
    },
    {
      "id": generateUniqueId(),
      "title": "Understanding GraphQL: A Practical Approach",
      "description": "Deep dive into GraphQL fundamentals, from basic queries to advanced schema design. Includes practical examples and performance considerations for production applications.",
      "url": "https://castro.mabcaslabs.com/blog/graphql-practical-guide",
      "published_date": "Oct 5, 2025",
      "read_time": 15,
      "platform": "",
      "tags": ["GraphQL", "API Design", "Apollo", "Backend"]
    },
    {
      "id": generateUniqueId(),
      "title": "What is Inversion of Control?",
      "description": "Exploring how IoC flips traditional program structure to create more testable and maintainable code in Node.js applications.",
      "url": "https://castro.mabcaslabs.com/blog/inversion-of-control",
      "published_date": "Oct 1, 2025",
      "read_time": 10,
      "platform": "",
      "tags": ["Node.js", "Dependency Injection", "Testing", "Architecture"]
    },
    {
      "id": generateUniqueId(),
      "title": "Master Any Framework: The Mindset Shift That Actually Works",
      "description": "The secret sauce big teams use to adopt NestJS, Spring, or GraphQL quickly and wield new languages confidently.",
      "url": "https://castro.mabcaslabs.com/blog/master-any-framework-the-mindset-shift-that-actually-works",
      "published_date": "Sep 8, 2025",
      "read_time": 12,
      "platform": "",
      "tags": ["Learning", "Frameworks", "NestJS", "Spring"]
    }
  ],
  "experience": [
    {
      "id": generateUniqueId(),
      "title": "Full Stack Developer & Digital Marketing Specialist",
      "company": "CB Consulting & Media Group",
      "dates": "Sep 2025 - Present",
      "location": "On-site",
      "summary": "Owning client websites end-to-end — build, launch, SEO, and email programs on Mailchimp, Klaviyo, OpenCart, and Shopify mail.",
      "description_points": [
        "Ship and maintain production sites on WordPress, WooCommerce, Shopify, and Framer for brands that need polished UX and reliable day-to-day operations.",
        "Own the full stack for client builds: interface design, APIs, content structure, performance, and security hygiene.",
        "Run marketing newsletters, purchase-behavior segments, and abandoned-cart flows using Mailchimp, Klaviyo, OpenCart, and Shopify mail messaging.",
        "Partner with internal teams to scope requirements, ship iterations quickly, and keep live sites stable under real traffic."
      ],
      "tags": ["WordPress", "Shopify", "WooCommerce", "Framer", "Mailchimp", "Klaviyo", "OpenCart", "Shopify Mail", "Full Stack"]
    },
    {
      "id": generateUniqueId(),
      "title": "Senior Frontend Developer",
      "company": "Organic Bloom",
      "dates": "Oct 2025 - Dec 2025 · 3 mos",
      "location": "Nairobi · Remote",
      "summary": "Led the Next.js storefront for a premium organic e-commerce brand — focused on speed, checkout clarity, and conversion.",
      "description_points": [
        "Built the customer-facing storefront: product discovery, cart, checkout, and order tracking wired into NestJS services.",
        "Surface live inventory, stock status, and restock signals so shoppers trust what they see before they buy.",
        "Raised Core Web Vitals with image strategy, code splitting, and lazy loading tuned for mobile-first Kenyan shoppers.",
        "Delivered admin views for orders, analytics, and merchandising — then validated production releases through CI/CD."
      ],
      "tags": ["Next.js", "NestJS", "PostgreSQL", "Redis", "M-Pesa", "CI/CD", "AWS"]
    },
    {
      "id": generateUniqueId(),
      "title": "Innovation Engineer",
      "company": "STEMROBO Technologies",
      "dates": "Apr 2025 - Sep 2025 · 5 mos",
      "location": "Nairobi · On-site",
      "summary": "Turned robotics, IoT, and coding into hands-on STEM programs schools could actually run.",
      "description_points": [
        "Designed and delivered K–12 STEM curricula spanning robotics, AI, IoT, and software fundamentals.",
        "Ran multi-school workshops and labs that pushed students from theory into working Arduino and sensor prototypes.",
        "Coached teachers to embed STEM into existing classes — improving engagement beyond one-off events.",
        "Organized competitions and hackathons that rewarded collaboration, shipping, and creative problem-solving."
      ],
      "tags": ["STEM", "Robotics", "IoT", "Mentorship", "Curriculum Design"]
    },
    {
      "id": generateUniqueId(),
      "title": "Frontend Developer — Cargo Tracking System",
      "company": "Logistics & Transport Sector",
      "dates": "Oct 2024 - Mar 2025 · 6 mos",
      "location": "Nairobi · Remote",
      "summary": "Built the operator-facing UI for a national cargo tracking platform — live GPS, journeys, and audit-ready reports.",
      "description_points": [
        "Delivered React + Material UI modules for drivers, carriers, journeys, and end-to-end cargo tracking.",
        "Streamed live GPS positions over WebSockets so ops teams could monitor containers across national routes in real time.",
        "Integrated REST APIs with full CRUD flows and dynamic mapping across every logistics module.",
        "Shipped PDF journey reports for audits and record-keeping, and hardened the UI for both field and office use."
      ],
      "tags": ["React", "Material UI", "WebSockets", "GPS", "Logistics", "REST APIs"]
    },
    {
      "id": generateUniqueId(),
      "title": "Software Engineering Trainee",
      "company": "Power Learn Project",
      "dates": "Aug 2024 - Dec 2024 · 5 mos",
      "location": "Nairobi · On-site",
      "summary": "Intensive full-stack and mobile foundations — the craft base behind every product I ship now.",
      "description_points": [
        "Completed a structured program covering HTML/CSS, JavaScript, Python/Django, and responsive web fundamentals.",
        "Advanced into Dart and Flutter for cross-platform mobile development.",
        "Strengthened problem-solving with data structures, algorithms, and production-minded coding habits."
      ],
      "tags": ["JavaScript", "Python", "Django", "Flutter", "Dart"]
    },
  ],
  "projects": [
  {
    "id": generateUniqueId(),
    "name": "National Cargo Tracking System",
    "description": "A comprehensive end-to-end cargo tracking platform built with React and Material UI. The system includes modules for driver management, cargo carrier management, real-time cargo tracking, and journey management. Implemented real-time GPS location updates via WebSockets for live container monitoring across national routes. Integrated RESTful APIs for seamless data flow, built dynamic data mapping, and full CRUD functionality across all modules. Features include downloadable journey reports as PDF for record-keeping and audit purposes. Optimized for performance and responsiveness across both field and office devices.",
    "image": null,
    "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "PDF Reports", "Logistics", "Performance Optimization"]
  },
  {
    "id": generateUniqueId(),
    "name": "Juganhub Electronics",
    "description": "A full-featured e-commerce platform for Juganhub Technologies, a Nairobi-based tech retailer stocking brand new and refurbished smartphones, tablets, TVs, laptops, soundbars, and home appliances. Built on WordPress and WooCommerce, the store supports product variants, wishlist and comparison features, WhatsApp-based customer support, and multiple product categories spanning consumer electronics and household devices.",
    "website_link": "https://juganhub.co.ke",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjuganhub.co.ke?w=1400",
    "tags": ["WordPress", "WooCommerce", "E-commerce", "Electronics", "Retail"]
  },
  {
    "id": generateUniqueId(),
    "name": "Powershift",
    "description": "A digital platform for Power Shift, a global community helping women leaders, influencers, and entrepreneurs scale beyond six figures. The site serves as the hub for the brand's coaching programs, community membership, events, and digital products — built to reflect a premium, growth-focused brand identity for a UAE-based women's business network.",
    "website_link": "https://www.powershift.ae",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.powershift.ae?w=1400",
    "tags": ["React", "Node.js", "Stripe", "Cloudinary", "Women Entrepreneurs", "Community Platform"]
  },
  {
    "id": generateUniqueId(),
    "name": "Jay-B Fitness & Performance",
    "description": "A fitness platform for a Nairobi-based personal trainer offering personalized weight loss plans, muscle building programs, and outdoor training experiences. The site showcases services, enables session bookings, and features a subscription system with M-Pesa payment integration — built to convert visitors into clients with a clean, results-focused design.",
    "website_link": "https://jay-b-fitness.vercel.app",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjay-b-fitness.vercel.app?w=1400",
    "tags": ["Web Development", "Fitness Platform", "UI/UX", "E-commerce", "M-Pesa Integration", "Full-Stack"]
  },
  {
    "id": generateUniqueId(),
    "name": "Milliden Gardens Resort",
    "description": "A luxury hotel and retreat website for Milliden Gardens, located in Rodi, Homa-Bay, Kenya. The platform presents the property as a sanctuary of refined living, allowing guests to explore executive and standard room offerings, fine dining, and garden retreat experiences. Features an integrated booking system with automated email notifications to both admin and guests for seamless reservation management.",
    "website_link": "https://www.millidengardens.co.ke",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.millidengardens.co.ke?w=1400",
    "tags": ["Web Development", "Booking System", "UI/UX", "Email Integration", "Hospitality"]
  },
  {
    "id": generateUniqueId(),
    "name": "Avya Beauty Salon",
    "description": "A premium beauty and skincare platform for AVYA, a science-led salon based in Nairobi, Kenya. The site positions the brand under the tagline 'Where Science Meets Beauty', letting clients explore treatments, book appointments, and stay up to date with salon offers — built with a clean, aspirational aesthetic that reflects the brand's premium positioning.",
    "website_link": "https://avyabeauty.com",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Favyabeauty.com?w=1400",
    "tags": ["Web Development", "Booking System", "UI/UX"]
  },
  {
    "id": generateUniqueId(),
    "name": "Organic Bloom",
    "description": "A full-featured e-commerce platform for Organic Bloom, a Nairobi-based retailer of premium organic and natural health products. The store supports smooth product browsing, M-Pesa STK Push payments, real-time order tracking, and inventory management — built to deliver a reliable, mobile-first shopping experience for health-conscious Kenyan consumers.",
    "website_link": "https://organicbloom.co.ke/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Forganicbloom.co.ke%2F?w=1400",
    "tags": ["E-commerce", "M-Pesa", "Payment Integration", "Inventory Management", "React", "Next.js"]
  },
  {
    "id": generateUniqueId(),
    "name": "EMS Market Mall",
    "description": "A coming-soon landing page for EMS Market, an upcoming shopping mall in Lavington, Nairobi. The page establishes the brand's online presence ahead of launch, building anticipation for the mall's retail spaces and tenants.",
    "website_link": "https://www.emsmarket.co.ke/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.emsmarket.co.ke%2F?w=1400",
    "tags": ["Web Development", "Real Estate", "Marketing Site"]
  },
  {
    "id": generateUniqueId(),
    "name": "Quiet Empire Podcast",
    "description": "A podcast website built to host episodes, show notes, and subscription options for a show sharing inspiring stories and insights from diverse guests. Designed to give listeners easy access to content and enable ongoing audience engagement.",
    "website_link": "https://quietempirepodcast.com/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fquietempirepodcast.com%2F?w=1400",
    "tags": ["Web Development", "Podcast Platform", "Content Management"]
  },
  {
    "id": generateUniqueId(),
    "name": "Grounded.co.ke — Maintenance & Marketing",
    "description": "Ongoing website maintenance and email marketing for Grounded, a B-Corp certified, women-run Kenyan brand producing 50+ non-toxic home and personal care products. Includes marketing newsletters, purchase-behavior segmentation, and abandoned-cart automation on Shopify — plus store upkeep for a brand available across 170+ East African retail outlets and internationally.",
    "website_link": "https://grounded.co.ke/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgrounded.co.ke%2F?w=1400",
    "tags": ["Shopify", "Website Maintenance", "Mailchimp", "Klaviyo", "Shopify Mail", "Abandoned Cart", "Segmentation"]
  },
  {
    "id": generateUniqueId(),
    "name": "Zucchini Food Market — Maintenance & Marketing",
    "description": "Website maintenance and email marketing for Zucchini Food Market, a Nairobi grocery store bringing freshness home with vegetables, fruits, frozen foods, beverages, eggs, and dairy. Ongoing store upkeep plus marketing newsletters, purchase-behavior segmentation, and abandoned-cart automation to recover missed checkouts and keep customers coming back.",
    "website_link": "https://zucchini.co.ke/",
    "image": zucchiniPreview,
    "tags": ["Website Maintenance", "OpenCart", "Email Marketing", "Abandoned Cart", "Segmentation"]
  },
  {
    "id": generateUniqueId(),
    "name": "Bertlor Bloom",
    "description": "A construction and engineering agency website for Bertlor Bloom, showcasing commercial and residential builds, cost engineering, construction management, and real estate development services. Built to present the firm's expertise, project portfolio, academy offering, and booking flows with a bold brand-forward presence.",
    "website_link": "https://bertlorbloom.com/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbertlorbloom.com%2F?w=1400",
    "tags": ["Web Development", "Construction", "UI/UX", "Agency Site"]
  },
  {
    "id": generateUniqueId(),
    "name": "Aura Key Properties",
    "description": "A modern real estate platform for Aura Key Properties in Dubai — covering off-plan, ready, and rental listings with agent outreach, project showcases, and investor-focused guidance including mortgage, Golden Visa, and after-sales support.",
    "website_link": "https://aurakey.vercel.app/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Faurakey.vercel.app%2F?w=1400",
    "tags": ["React", "Real Estate", "UI/UX", "Dubai", "Property Platform"]
  },
  {
    "id": generateUniqueId(),
    "name": "Canvas Cosmetic — Maintenance & Marketing",
    "description": "Website maintenance and email marketing for Canvas Cosmetics, a vegan, cruelty-free premium makeup brand available across 3 regions: Kenya, UAE, and UK. Includes regular marketing newsletters, purchase-behavior segmentation, and abandoned-cart automation alongside ongoing WooCommerce store care.",
    "website_link": "https://www.canvascosmetic.com/",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.canvascosmetic.com%2F?w=1400",
    "tags": ["WordPress", "WooCommerce", "Mailchimp", "Klaviyo", "Kenya", "UAE", "UK", "Abandoned Cart", "Segmentation"]
  }
],
  "newsletters": [
    {
      "id": generateUniqueId(),
      "name": "Marketing Newsletters",
      "client": "Campaign Design",
      "type": "Marketing",
      "date": "Skill",
      "description": "Brand and promotional email design — clear hierarchy, on-brand storytelling, and CTAs that work on mobile. Built and sent through Mailchimp, Klaviyo, OpenCart, and Shopify mail messaging.",
      "link": null,
      "image": null
    },
    {
      "id": generateUniqueId(),
      "name": "Purchase-Behavior Segmentation",
      "client": "Audience Targeting",
      "type": "Segmented",
      "date": "Skill",
      "description": "Segmented campaigns based on what people actually buy — RFM-style targeting, category affinity, and reorder-minded messaging instead of one-size blasts.",
      "link": null,
      "image": null
    },
    {
      "id": generateUniqueId(),
      "name": "Abandoned Cart Automation",
      "client": "Lifecycle Flows",
      "type": "Abandoned Cart",
      "date": "Skill",
      "description": "Automated recovery flows that nudge incomplete checkouts with the right timing, copy, and follow-ups — wired through Mailchimp, Klaviyo, OpenCart, and Shopify mail.",
      "link": null,
      "image": null
    },
    {
      "id": generateUniqueId(),
      "name": "Platform Setup & Delivery",
      "client": "Mail Stack",
      "type": "Platforms",
      "date": "Skill",
      "description": "Hands-on experience running email programs on Mailchimp, Klaviyo, OpenCart messaging, and Shopify mail — lists, templates, automations, and campaign ops.",
      "link": null,
      "image": null
    }
  ],
  // "projects": [
  //   {
  //     "id": generateUniqueId(),
  //     "name": "National Cargo Tracking System",
  //     "description": "A comprehensive end-to-end cargo tracking platform built with React and Material UI. The system includes modules for driver management, cargo carrier management, real-time cargo tracking, and journey management. Implemented real-time GPS location updates via WebSockets for live container monitoring across national routes. Integrated RESTful APIs for seamless data flow, built dynamic data mapping, and full CRUD functionality across all modules. Features include downloadable journey reports as PDF for record-keeping and audit purposes. Optimized for performance and responsiveness across both field and office devices.",
  //     "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "PDF Reports", "Logistics", "Performance Optimization"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Juganhub Electronics",
  //     "description": "A full-stack e-commerce platform for selling electronics, featuring a responsive Wordpress theme and a robust WooCommerce backend. The system includes product catalog management, shopping cart functionality, secure checkout with M-Pesa integration, and order tracking. Implemented real-time inventory updates and dynamic pricing features. The platform is optimized for performance, SEO, and user experience across devices.",
  //     "website_link": "https://juganhub.co.ke",
  //     "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "PDF Reports", "Logistics", "Performance Optimization"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Powershift",
  //     "description": "Power Shift is a global community for leaders, influencers, and changemakers ready to spark real growth. It's where mindfulness meets brand building, and where innovation creates lasting wealth and impact.",
  //     "website_link": "https://www.powershift.ae",
  //     "tags": ["React", "Material UI", "WebSockets", "REST APIs", "Real-time Tracking", "GPS", "PDF Reports", "Logistics", "Performance Optimization"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Jay-B Fitness & Performance",
  //     "description": "A full-stack fitness and performance platform designed to deliver personalized training programs, nutrition guidance, and wellness resources. The platform provides an intuitive user experience for exploring workouts, booking sessions, and tracking fitness progress. It features a subscription-based system with seamless M-Pesa integration for secure payments, alongside an e-commerce module that allows users to purchase gym wear and fitness merchandise. Built with a focus on performance, scalability, and user engagement.",
  //     "website_link": "https://jay-b-fitness.vercel.app",
  //     "tags": ["Web Development", "Fitness Platform", "UI/UX", "E-commerce", "M-Pesa Integration", "Full-Stack"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Milliden Gardens Resort",
  //     "description": "A modern resort website designed to showcase hospitality services while enabling seamless online booking. The platform allows guests to explore amenities, view available services, and make reservations with ease. It features an integrated booking system that automatically sends email notifications to both the admin and customers, ensuring efficient reservation management and communication. Built with a focus on user experience, accessibility, and reliability.",
  //     "website_link": "https://www.millidengardens.co.ke",
  //     "tags": ["Web Development", "Booking System", "UI/UX", "Email Integration", "Hospitality"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Avya Beauty Salon",
  //     "description": "A modern beauty and wellness platform that connects clients with salon services through easy online booking, service browsing, and appointment management. It offers a seamless user experience for discovering treatments, scheduling visits, and staying updated with salon offers and trends.",
  //     "website_link": "https://avyabeauty.com",
  //     "tags": ["Web Development", "Booking System", "UI/UX"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Organic Bloom",
  //     "description": "A full-featured eCommerce platform for selling organic and health products, offering smooth online shopping with M-Pesa STK Push payments. It includes order tracking, inventory management, and an easy-to-use interface for customers to browse, purchase, and monitor their orders in real time.",
  //     "website_link": "https://organicbloom.co.ke/",
  //     "tags": ["E-commerce", "M-Pesa", "Payment Integration", "Inventory Management", "React", "Next.js"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "EMS Market Mall",
  //     "description": "A website for an upcoming shopping mall located in Lavington, Nairobi, Kenya. The platform showcases the mall, its shops, and services, providing visitors with information about available spaces, stores, and updates as the mall prepares for launch.",
  //     "website_link": "https://www.emsmarket.co.ke/",
  //     "tags": ["Web Development", "Real Estate", "Marketing Site"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Quiet Empire Podcast",
  //     "description": "A podcast website dedicated to sharing inspiring stories and insights from various guests. The platform features episodes, show notes, and subscription options, allowing listeners to easily access and engage with the content.",
  //     "website_link": "https://quietempirepodcast.com/",
  //     "tags": ["Web Development", "Podcast Platform", "Content Management"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Portfolio Terminal",
  //     "description": "Interactive terminal-style portfolio with GUI/CLI modes, showcasing projects, skills, and experience through a developer-first interface.",
  //     "website_link": "https://better-portfolio-pi.vercel.app",
  //     "tags": ["React", "Terminal", "Animation", "Portfolio", "CLI", "UI/UX"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Grounded.co.ke — Maintenance & Marketing",
  //     "description": "Ongoing website maintenance, content updates, and marketing newsletter management for an e-commerce store built on WordPress and WooCommerce, ensuring optimal performance and consistent customer engagement.",
  //     "website_link": "https://grounded.co.ke/",
  //     "tags": ["WordPress", "WooCommerce", "Website Maintenance", "Digital Marketing", "Newsletter Management", "E-commerce"]
  //   },
  //   {
  //     "id": generateUniqueId(),
  //     "name": "Canvas Cosmetic — Maintenance & Marketing",
  //     "description": "Comprehensive website maintenance and targeted marketing newsletters for a cosmetics e-commerce brand, leveraging WordPress and WooCommerce to enhance user experience and drive sales.",
  //     "website_link": "https://www.canvascosmetic.com/",
  //     "tags": ["WordPress", "WooCommerce", "Website Maintenance", "Digital Marketing", "Newsletter Management", "E-commerce"]
  //   }
  // ],
  "skills": [
    {
      "category": "Frontend",
      "values": ["React", "TypeScript", "Dart", "Flutter", "Next.js", "Framer", "Material UI"]
    },
    {
      "category": "Backend",
      "values": ["NestJS", "Node.js", "Java", "Firebase", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Message Queues (BULLMQ)"]
    },
    {
      "category": "Tracking & IoT",
      "values": ["GPS Tracking Systems", "WebSockets (Real-time)", "Teltonika Devices", "Reverse Geocoding", "IoT Device Integration", "Real-time Data Mapping"]
    },
    {
      "category": "E-commerce & CMS",
      "values": ["Shopify", "WordPress", "WooCommerce", "OpenCart", "Framer CMS", "E-commerce Development"]
    },
    {
      "category": "Email & Messaging",
      "values": ["Mailchimp", "Klaviyo", "Shopify Mail", "OpenCart Email", "Marketing Newsletters", "Audience Segmentation", "Abandoned Cart Automation"]
    },
    {
      "category": "Cloud & DevOps",
      "values": ["AWS", "Cloudflare", "CI/CD", "Linux", "Docker", "Git"]
    },
    {
      "category": "Other",
      "values": ["Technical Documentation", "API Development", "SEO Optimization", "Digital Marketing", "UI/UX Design", "Client Management"]
    }
  ],
  "education": {
    "degree": "Bachelor's degree, Information Communication Technology",
    "university": "KCA University",
    "dates": "2021 - 2025 (Expected)",
    "description": "Focused on foundational concepts in Information Communication Technology, including web technologies, programming, and database management.",
    "tags": ["Information Technology", "Web Development", "Programming"]
  },
  "certifications": [
    {
      "name": "AWS Database Migration Service",
      "issuer": "Amazon Web Services (AWS)",
      "date": "May 2025",
      "skills": ["Amazon Relational Database Service (RDS)", "Amazon Database Migration Service", "AWS Migrations"]
    },
    {
      "name": "Configuring and Deploying VPCs with Multiple Subnets",
      "issuer": "Amazon Web Services (AWS)",
      "date": "May 2025",
      "skills": ["AWS Networking", "VPC", "Cloud Infrastructure"]
    },
    {
      "name": "Graph Developer - Associate",
      "issuer": "Apollo GraphQL",
      "date": "Feb 2025",
      "skills": ["Apollo GraphQL", "GraphQL", "Node.js", "API Development"]
    },
    {
      "name": "Google Cloud Skills Badges",
      "issuer": "Google Cloud Skills Boost",
      "date": "2024",
      "skills": ["PostgreSQL", "Databases", "Load Balancing", "Cloud Infrastructure", "Cloud Storage", "Google Cloud Platform"]
    },
    {
      "name": "AWS re/Start Graduate",
      "issuer": "Amazon Web Services (AWS)",
      "date": "Aug 2024",
      "skills": ["Amazon Web Services (AWS)", "Cloud Computing", "Linux Fundamentals"]
    }
  ],
  "honors": [
    {
      "name": "GDSC-Core Team Member-(Android) - KU",
      "issuer": "GDSC - Kenyatta University",
      "date": "Jul 2024",
      "description": "As a GDSC Core Member and Android Lead at Kenyatta University, played a crucial role in fostering a vibrant community of student developers by organizing workshops, leading coding sessions, and mentoring peers in Android development. Contributed to building and maintaining open-source projects.",
      "tags": ["Community Leadership", "Android Development", "Mentorship", "Google Developer Student Clubs"]
    }
  ],
  "recommendations": [
    {
      "name": "Mr. Kibet",
      "position": "CEO at REDOLENCE LIVING LIMITED (BEE MULTISCENTS)",
      "date": "March 4, 2025",
      "content": "Highly recommend Barrack Ouma for his exceptional contributions at Bee Multiscent. As a key member of our development team, Barrack played a crucial role in designing and managing the full-stack architecture of our IoT-integrated fragrance system. His expertise in React.js, Firebase, Node.js, and Cloudflare security ensured a seamless and secure user experience."
    }
  ],
  "interests": [
    "Dependency Injection", "CQRS", "Pub/Sub", "CDNs", "TDD",
    "Cloud Computing",
    "Technical Writing",
    "Mobile Development",
    "E-commerce Platforms",
    "Digital Marketing",
    "Email Automation",
    "Klaviyo & Mailchimp",
    "IoT",
    "AI/ML",
    "GPS & Logistics Systems",
    "Real-time Data Streaming"
  ]
};

// ─── Loading Screen ───────────────────────────────────────────────────────────

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-background flex flex-col items-center justify-center gap-4"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      className="w-7 h-7 border-2 border-primary/30 border-t-primary rounded-full"
    />
    <span className="text-foreground/70 font-display text-lg tracking-tight">Fidel Castro</span>
  </motion.div>
);

// ─── Nav Links ────────────────────────────────────────────────────────────────

const NavLink = React.memo(({ to, children, isActive }) => (
  <Link
    to={to}
    className={`hover:text-primary transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-foreground'
    }`}
  >
    {children}
  </Link>
));

const MobileNavLink = React.memo(({ to, children, isActive }) => (
  <Link
    to={to}
    className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-primary bg-primary/20'
        : 'text-foreground hover:bg-card-foreground'
    }`}
  >
    {children}
  </Link>
));

// ─── Animated Header ──────────────────────────────────────────────────────────

// const AnimatedHeader = React.memo(({ mode, onModeToggle }) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [location.pathname]);

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="bg-card text-foreground p-4 sticky top-0 z-50 shadow-md border-b border-border"
//     >
//       <div className="mx-auto max-w-5xl flex justify-between items-center">

//         {/* Logo */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <Link to="/" className="block hover:opacity-80 transition-opacity duration-200">
//             <img
//               src={LOGO_URL}
//               alt="Fidel Castro"
//               style={{ height: '100px', width: 'auto', objectFit: 'contain', display: 'block' }}
//             />
//           </Link>
//         </motion.div>

//         {/* Desktop Nav */}
//         <motion.nav
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="hidden md:flex items-center gap-6 text-sm"
//         >
//           <NavLink to="/" isActive={isHomePage}>Home</NavLink>
//           <NavLink to="/blogs" isActive={location.pathname === '/blogs'}>Blogs</NavLink>
//           <NavLink to="/interests" isActive={location.pathname === '/interests'}>Interests</NavLink>
//         </motion.nav>

//         {/* Right Actions */}
//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="flex items-center gap-3"
//         >
//           <a
//             onClick={handleResumeClick}
//             className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary hover:text-foreground transition-colors duration-200 cursor-pointer"
//           >
//             <Download className="w-4 h-4" />
//             <span>Resume</span>
//           </a>

//           <Button
//             variant="outline"
//             className="hidden lg:flex bg-transparent border-border hover:bg-card-foreground hover:text-card transition-all duration-300"
//             onClick={onModeToggle}
//           >
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="flex items-center text-foreground"
//             >
//               {mode === 'gui' ? (
//                 <>
//                   <TerminalSquare className="w-4 h-4 mr-2 text-primary" />
//                   Terminal Mode
//                 </>
//               ) : (
//                 <>
//                   <User className="w-4 h-4 mr-2 text-primary" />
//                   GUI Mode
//                 </>
//               )}
//             </motion.div>
//           </Button>

//           {/* Hamburger */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen
//               ? <X className="w-6 h-6 text-foreground" />
//               : <Menu className="w-6 h-6 text-foreground" />
//             }
//           </button>
//         </motion.div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden absolute left-0 right-0 bg-card shadow-lg border-t border-border z-40"
//           >
//             <div className="px-4 py-3 space-y-3">
//               <MobileNavLink to="/" isActive={isHomePage}>
//                 <Home className="w-5 h-5 mr-3" /> Home
//               </MobileNavLink>
//               <MobileNavLink to="/blogs" isActive={location.pathname === '/blogs'}>
//                 <FileText className="w-5 h-5 mr-3" /> Blogs
//               </MobileNavLink>
//               <MobileNavLink to="/interests" isActive={location.pathname === '/interests'}>
//                 <Code className="w-5 h-5 mr-3" /> Interests
//               </MobileNavLink>

//               <a
//                 onClick={handleResumeClick}
//                 className="flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/20 hover:bg-primary/10 text-primary transition-colors duration-200 cursor-pointer"
//               >
//                 <Download className="w-4 h-4" />
//                 <span>Resume</span>
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// });
const AnimatedHeader = React.memo(({ mode, onModeToggle }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b border-primary-light/50 bg-[#f5f4f2]/85 backdrop-blur-xl"
    >
      <Link to="/" className="flex items-center gap-2.5 no-underline group">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
          <span className="text-primary-foreground text-xs font-medium font-mono">FC</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground leading-tight font-display tracking-tight">Fidel Castro</span>
          <span className="text-[11px] text-muted-foreground leading-tight">Full Stack Developer</span>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {[
          { to: '/', label: 'Home', active: isHomePage },
          { to: '/projects', label: 'Projects', active: location.pathname === '/projects' },
          { to: '/newsletters', label: 'Newsletters', active: location.pathname === '/newsletters' },
          { to: '/blogs', label: 'Blogs', active: location.pathname === '/blogs' },
          { to: '/interests', label: 'Interests', active: location.pathname === '/interests' },
        ].map(({ to, label, active }) => (
          <Link
            key={to}
            to={to}
            className={`text-[13px] no-underline px-3 py-1.5 rounded-md transition-colors ${
              active
                ? 'text-primary bg-primary/8'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
          >
            {label}
          </Link>
        ))}

        <div className="w-px h-4 bg-border mx-2" />

        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground px-2.5 py-1 rounded-full border border-border/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available
        </div>
      </nav>

      <div className="flex items-center gap-2">
        <a
          onClick={handleResumeClick}
          className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-primary border border-primary/30 rounded-lg bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>

        <button
          onClick={onModeToggle}
          className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] text-muted-foreground border border-border rounded-lg bg-transparent hover:text-foreground hover:border-foreground/20 cursor-pointer font-mono transition-colors"
        >
          <TerminalSquare className="w-3.5 h-3.5" />
          {mode === 'gui' ? 'Terminal' : 'GUI'}
        </button>

        <button
          className="md:hidden p-2 rounded-lg border border-border bg-transparent cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen
            ? <X className="w-5 h-5 text-foreground" />
            : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border px-4 py-3 z-40"
          >
            {[
              { to: '/', label: 'Home', icon: Home, active: isHomePage },
              { to: '/projects', label: 'Projects', icon: LayoutGrid, active: location.pathname === '/projects' },
              { to: '/newsletters', label: 'Newsletters', icon: Mail, active: location.pathname === '/newsletters' },
              { to: '/blogs', label: 'Blogs', icon: FileText, active: location.pathname === '/blogs' },
              { to: '/interests', label: 'Interests', icon: Code, active: location.pathname === '/interests' },
            ].map(({ to, label, icon: Icon, active }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1 no-underline text-sm ${
                  active ? 'text-primary bg-primary/8' : 'text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </Link>
            ))}
            <a
              onClick={handleResumeClick}
              className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-lg cursor-pointer text-primary text-sm border border-primary/30"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

// ─── Page Transition ──────────────────────────────────────────────────────────

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// ─── App Content ──────────────────────────────────────────────────────────────

function AppContent() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [mode, setMode] = useState('gui');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setPortfolioData(mockPortfolioData);
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
        setPortfolioData(mockPortfolioData);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  const switchToGui = useCallback(() => setMode('gui'), []);
  const toggleMode = useCallback(() => {
    setMode(prev => {
      if (prev === 'gui') return 'terminal';
      if (prev === 'terminal') return 'ws-terminal';
      return 'gui';
    });
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen"
          >
            <AnimatePresence mode="wait">
              {mode === 'terminal' ? (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-screen"
                >
                  <TerminalPage portfolioData={portfolioData} switchToGui={switchToGui} />
                </motion.div>
              ) : mode === 'ws-terminal' ? (
                <motion.div
                  key="ws-terminal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-screen"
                >
                  <TerminalWS onClose={switchToGui} />
                </motion.div>
              ) : (
                <motion.div
                  key="gui"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedHeader mode={mode} onModeToggle={toggleMode} />
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<HomePage portfolioData={portfolioData} />} />
                      <Route path="/projects" element={<ProjectsPage portfolioData={portfolioData} />} />
                      <Route path="/newsletters" element={<NewslettersPage portfolioData={portfolioData} />} />
                      <Route path="/blogs" element={<BlogsPage portfolioData={portfolioData} />} />
                      <Route path="/blog/:slug" element={<BlogDetailPage portfolioData={portfolioData} />} />
                      <Route path="/interests" element={<InterestsPage portfolioData={portfolioData} />} />
                      <Route path="/terminal-payment-callback" element={<TerminalPaymentCallback />} />
                    </Routes>
                  </PageTransition>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@500;600;700;800&display=swap');
      `}</style>

      <Router>
        <AppContent />
        <WhatsAppButton />
      </Router>
    </>
  );
}

export default App;