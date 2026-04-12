
// // // import React, { useState } from 'react';
// // // import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle, Terminal, ArrowRight } from 'lucide-react';
// // // import TechIcons from './techicons';
// // // import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

// // // const generateContactUrl = (key, value) => {
// // //     switch (key) {
// // //         case 'email':
// // //             return `mailto:${value}`;
// // //         case 'twitter':
// // //             // Handle both @username and full URLs
// // //             if (value.startsWith('http')) return value;
// // //             const username = value.replace('@', '');
// // //             return `https://twitter.com/${username}`;
// // //         case 'github':
// // //             // Handle both username and full URLs
// // //             if (value.startsWith('http')) return value;
// // //             const githubUsername = value.replace(/^@?/, '');
// // //             return `https://github.com/${githubUsername}`;
// // //         case 'linkedin':
// // //             // Handle both profile URLs and usernames
// // //             if (value.startsWith('http')) return value;
// // //             return `https://linkedin.com/in/${value}`;
// // //         case 'location':
// // //             // Generate Google Maps search URL
// // //             return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
// // //         default:
// // //             return value.startsWith('http') ? value : `https://${value}`;
// // //     }
// // // };

// // // const socialLinks = [
// // //     { key: 'email', icon: Mail },
// // //     { key: 'twitter', icon: Twitter },
// // //     { key: 'github', icon: Github },
// // //     { key: 'linkedin', icon: Linkedin },
// // //     { key: 'location', icon: MapPin },
// // // ];

// // // const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
// // //     const [showSponsorModal, setShowSponsorModal] = useState(false);
// // //     const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
// // //     const [sponsorAmount, setSponsorAmount] = useState(0);

// // //     return (
// // //         <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
// // //             <TechIcons />

// // //             <div className="relative z-20 flex flex-col items-center justify-center">
// // //                 <div className="bg-[#2a2a2a]/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-sm md:max-w-md border border-gray-700 hover:border-gray-600 transition-all duration-300">
// // //                     <div className="flex flex-col items-center text-center">
// // //                         <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-2 sm:mb-3 md:mb-4 bg-gray-700 flex items-center justify-center border-2 border-emerald-300/20">
// // //                             {profilePictureUrl ? (
// // //                                 <img
// // //                                     src={profilePictureUrl}
// // //                                     alt={name}
// // //                                     className="w-full h-full rounded-full object-cover"
// // //                                 />
// // //                             ) : (
// // //                                 <UserCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-500" />
// // //                             )}
// // //                         </div>
// // //                         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{name}</h1>
// // //                         <h2 className="text-sm sm:text-base md:text-xl font-medium text-emerald-300 mb-2 sm:mb-3 md:mb-4">{title}</h2>
// // //                         <p className="text-gray-300 text-xs sm:text-sm max-w-xs leading-relaxed">{bio}</p>
// // //                     </div>

// // //                     <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
// // //                         {socialLinks.map(({ key, icon: Icon }) => contact[key] && (
// // //                             <a
// // //                                 key={key}
// // //                                 href={generateContactUrl(key, contact[key])}
// // //                                 target={key === 'location' ? '_blank' : key === 'email' ? '_self' : '_blank'}
// // //                                 rel={key !== 'email' ? 'noopener noreferrer' : undefined}
// // //                                 className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors duration-200 group cursor-pointer"
// // //                             >
// // //                                 <Icon className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform duration-200" />
// // //                                 <span className="truncate group-hover:underline">{contact[key]}</span>
// // //                             </a>
// // //                         ))}

// // //                     </div>

// // //                     {/* Terminal Payment Awareness */}
// // //                     <div className="mt-3 sm:mt-3.5 md:mt-4 p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg">
// // //                         <div className="flex items-center gap-1.5 sm:gap-2 text-blue-300 text-[10px] sm:text-xs lg:text-sm">
// // //                             <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
// // //                             <span className="font-medium">💡 Try Terminal Mode!</span>
// // //                         </div>
// // //                         <p className="text-blue-200 text-[10px] sm:text-xs lg:text-sm mt-0.5 sm:mt-1">
// // //                             Buy me a coffee like a developer - sponsor via the terminal
// // //                         </p>
// // //                     </div>

// // //                     {/* Message for small screens about Terminal Mode */}
// // //                     <div className="lg:hidden mt-3 sm:mt-3.5 md:mt-4 p-2 sm:p-2.5 md:p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
// // //                         <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-300 text-[10px] sm:text-xs">
// // //                             <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
// // //                             <span className="font-medium">💻 Use Terminal Mode on larger screens</span>
// // //                         </div>
// // //                         <p className="text-emerald-200 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
// // //                             Switch to desktop view to access the interactive terminal experience
// // //                         </p>
// // //                     </div>

// // //                     {/* Enhanced message for larger screens */}
// // //                     <div className="hidden lg:block mt-3 sm:mt-3.5 md:mt-4 p-3 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-500/40 rounded-lg">
// // //                         <div className="flex items-center gap-2 text-emerald-300 text-sm">
// // //                             <Terminal className="w-4 h-4" />
// // //                             <span className="font-semibold">🚀 Use Terminal Mode!</span>
// // //                         </div>
// // //                         <p className="text-emerald-200 text-sm mt-1.5">
// // //                             Click the "Terminal Mode" button in the header to experience an interactive terminal interface
// // //                         </p>
// // //                     </div>

// // //                     {/* Sponsorship Button */}
// // //                     <div className="mt-3 sm:mt-3.5 md:mt-4 flex justify-center">
// // //                         <SponsorButton
// // //                             onSponsor={() => setShowSponsorModal(true)}
// // //                             className="transform hover:scale-110 transition-transform duration-300"
// // //                         />
// // //                     </div>
// // //                 </div>

// // //                 <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col items-center">
// // //                     <span className="text-xs sm:text-sm font-medium text-emerald-400/90 mb-2 sm:mb-3 animate-pulse">Scroll to explore</span>
// // //                     <div className="relative">
// // //                         <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-gradient-to-b from-emerald-400/80 to-transparent">
// // //                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-bounce"></div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <div className="absolute inset-0 z-0">
// // //                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl"></div>
// // //                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl"></div>
// // //             </div>

// // //             {/* Sponsorship Modals */}
// // //             <SponsorModal
// // //                 isOpen={showSponsorModal}
// // //                 onClose={() => setShowSponsorModal(false)}
// // //                 onSponsor={(amount, reference) => {
// // //                     setSponsorAmount(amount);
// // //                     setShowSponsorModal(false);
// // //                     setShowSponsorSuccess(true);
// // //                 }}
// // //             />

// // //             {showSponsorSuccess && (
// // //                 <SponsorSuccess
// // //                     amount={sponsorAmount}
// // //                     onClose={() => setShowSponsorSuccess(false)}
// // //                 />
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default Hero;
// // import React, { useState } from 'react';
// // import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle, Terminal, ArrowRight } from 'lucide-react';
// // import TechIcons from './techicons';
// // import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

// // const generateContactUrl = (key, value) => {
// //     switch (key) {
// //         case 'email':
// //             return `mailto:${value}`;
// //         case 'twitter':
// //             if (value.startsWith('http')) return value;
// //             const username = value.replace('@', '');
// //             return `https://twitter.com/${username}`;
// //         case 'github':
// //             if (value.startsWith('http')) return value;
// //             const githubUsername = value.replace(/^@?/, '');
// //             return `https://github.com/${githubUsername}`;
// //         case 'linkedin':
// //             if (value.startsWith('http')) return value;
// //             return `https://linkedin.com/in/${value}`;
// //         case 'location':
// //             return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
// //         default:
// //             return value.startsWith('http') ? value : `https://${value}`;
// //     }
// // };

// // const socialLinks = [
// //     { key: 'email', icon: Mail },
// //     { key: 'twitter', icon: Twitter },
// //     { key: 'github', icon: Github },
// //     { key: 'linkedin', icon: Linkedin },
// //     { key: 'location', icon: MapPin },
// // ];

// // const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
// //     const [showSponsorModal, setShowSponsorModal] = useState(false);
// //     const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
// //     const [sponsorAmount, setSponsorAmount] = useState(0);

// //     return (
// //         // Adjusted: body background is now background from CSS variable
// //         <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground w-full">
// //             <TechIcons />

// //             <div className="relative z-20 flex flex-col items-center justify-center">
// //                 {/* Adjusted: card background, border, and hover border */}
// //                 <div className="bg-card/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-sm md:max-w-md border border-border hover:border-ring transition-all duration-300">
// //                     <div className="flex flex-col items-center text-center">
// //                         {/* Adjusted: profile picture background and border */}
// //                         <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-2 sm:mb-3 md:mb-4 bg-secondary flex items-center justify-center border-2 border-primary/20">
// //                             {profilePictureUrl ? (
// //                                 <img
// //                                     src={profilePictureUrl}
// //                                     alt={name}
// //                                     className="w-full h-full rounded-full object-cover"
// //                                 />
// //                             ) : (
// //                                 // Adjusted: UserCircle icon color
// //                                 <UserCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-muted-foreground" />
// //                             )}
// //                         </div>
// //                         {/* Adjusted: name text color */}
// //                         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">{name}</h1>
// //                         {/* Adjusted: title text color */}
// //                         <h2 className="text-sm sm:text-base md:text-xl font-medium text-primary mb-2 sm:mb-3 md:mb-4">{title}</h2>
// //                         {/* Adjusted: bio text color */}
// //                         <p className="text-muted-foreground text-xs sm:text-sm max-w-xs leading-relaxed">{bio}</p>
// //                     </div>

// //                     <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
// //                         {socialLinks.map(({ key, icon: Icon }) => contact[key] && (
// //                             <a
// //                                 key={key}
// //                                 href={generateContactUrl(key, contact[key])}
// //                                 target={key === 'location' ? '_blank' : key === 'email' ? '_self' : '_blank'}
// //                                 rel={key !== 'email' ? 'noopener noreferrer' : undefined}
// //                                 // Adjusted: social link text and icon colors
// //                                 className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group cursor-pointer"
// //                             >
// //                                 <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
// //                                 <span className="truncate group-hover:underline">{contact[key]}</span>
// //                             </a>
// //                         ))}
// //                     </div>

// //                     {/* Terminal Payment Awareness */}
// //                     {/* Adjusted: background, border, and text colors */}
// //                     <div className="mt-3 sm:mt-3.5 md:mt-4 p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-chart-2/20 to-chart-3/20 border border-chart-2/30 rounded-lg">
// //                         <div className="flex items-center gap-1.5 sm:gap-2 text-chart-2 text-[10px] sm:text-xs lg:text-sm">
// //                             <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
// //                             <span className="font-medium">💡 Try Terminal Mode!</span>
// //                         </div>
// //                         <p className="text-chart-2/80 text-[10px] sm:text-xs lg:text-sm mt-0.5 sm:mt-1">
// //                             Buy me a coffee like a developer - sponsor via the terminal
// //                         </p>
// //                     </div>

// //                     {/* Message for small screens about Terminal Mode */}
// //                     {/* Adjusted: background, border, and text colors */}
// //                     <div className="lg:hidden mt-3 sm:mt-3.5 md:mt-4 p-2 sm:p-2.5 md:p-3 bg-secondary/20 border border-secondary/30 rounded-lg">
// //                         <div className="flex items-center gap-1.5 sm:gap-2 text-secondary-foreground text-[10px] sm:text-xs">
// //                             <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
// //                             <span className="font-medium">💻 Use Terminal Mode on larger screens</span>
// //                         </div>
// //                         <p className="text-secondary-foreground/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
// //                             Switch to desktop view to access the interactive terminal experience
// //                         </p>
// //                     </div>

// //                     {/* Enhanced message for larger screens */}
// //                     {/* Adjusted: background, border, and text colors */}
// //                     <div className="hidden lg:block mt-3 sm:mt-3.5 md:mt-4 p-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg">
// //                         <div className="flex items-center gap-2 text-primary-foreground text-sm">
// //                             <Terminal className="w-4 h-4" />
// //                             <span className="font-semibold">🚀 Use Terminal Mode!</span>
// //                         </div>
// //                         <p className="text-primary-foreground/80 text-sm mt-1.5">
// //                             Click the "Terminal Mode" button in the header to experience an interactive terminal interface
// //                         </p>
// //                     </div>

// //                     {/* Sponsorship Button */}
// //                     <div className="mt-3 sm:mt-3.5 md:mt-4 flex justify-center">
// //                         <SponsorButton
// //                             onSponsor={() => setShowSponsorModal(true)}
// //                             // Adjusted: Sponsor button colors
// //                             className="transform hover:scale-110 transition-transform duration-300 bg-primary text-primary-foreground"
// //                         />
// //                     </div>
// //                 </div>

// //                 <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col items-center">
// //                     {/* Adjusted: scroll text color */}
// //                     <span className="text-xs sm:text-sm font-medium text-primary/90 mb-2 sm:mb-3 animate-pulse">Scroll to explore</span>
// //                     <div className="relative">
// //                         {/* Adjusted: scroll indicator line and dot colors */}
// //                         <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-gradient-to-b from-primary/80 to-transparent">
// //                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary animate-bounce"></div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="absolute inset-0 z-0">
// //                 {/* Adjusted: background blur colors */}
// //                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
// //                 <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
// //             </div>

// //             {/* Sponsorship Modals (assuming these will inherit colors or have internal styling) */}
// //             <SponsorModal
// //                 isOpen={showSponsorModal}
// //                 onClose={() => setShowSponsorModal(false)}
// //                 onSponsor={(amount, reference) => {
// //                     setSponsorAmount(amount);
// //                     setShowSponsorModal(false);
// //                     setShowSponsorSuccess(true);
// //                 }}
// //             />

// //             {showSponsorSuccess && (
// //                 <SponsorSuccess
// //                     amount={sponsorAmount}
// //                     onClose={() => setShowSponsorSuccess(false)}
// //                 />
// //             )}
// //         </div>
// //     );
// // };

// // export default Hero;
// import React, { useState } from 'react';
// import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle, Terminal, ArrowRight } from 'lucide-react';
// import TechIcons from './techicons';
// import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

// const generateContactUrl = (key, value) => {
//     switch (key) {
//         case 'email':
//             return `mailto:${value}`;
//         case 'twitter':
//             if (value.startsWith('http')) return value;
//             return `https://twitter.com/${value.replace('@', '')}`;
//         case 'github':
//             if (value.startsWith('http')) return value;
//             return `https://github.com/${value.replace(/^@?/, '')}`;
//         case 'linkedin':
//             if (value.startsWith('http')) return value;
//             return `https://linkedin.com/in/${value}`;
//         case 'location':
//             return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
//         default:
//             return value.startsWith('http') ? value : `https://${value}`;
//     }
// };

// const socialLinks = [
//     { key: 'email', icon: Mail },
//     { key: 'twitter', icon: Twitter },
//     { key: 'github', icon: Github },
//     { key: 'linkedin', icon: Linkedin },
//     { key: 'location', icon: MapPin },
// ];

// const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
//     const [showSponsorModal, setShowSponsorModal] = useState(false);
//     const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
//     const [sponsorAmount, setSponsorAmount] = useState(0);

//     return (
//         <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground w-full">
//             <TechIcons />

//             <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-6">

//                 {/* Main Card — wide layout */}
//                 <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-2xl border border-border hover:border-ring transition-all duration-300 overflow-hidden">

//                     {/* Top section: profile + bio side by side on md+ */}
//                     <div className="flex flex-col md:flex-row gap-0">

//                         {/* Left column: avatar + name + title */}
//                         <div className="flex flex-col items-center justify-center p-6 md:p-8 md:w-56 lg:w-64 shrink-0 bg-secondary/10 border-b md:border-b-0 md:border-r border-border">
//                             <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 bg-secondary flex items-center justify-center border-2 border-primary/20 overflow-hidden">
//                                 {profilePictureUrl ? (
//                                     <img
//                                         src={profilePictureUrl}
//                                         alt={name}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 ) : (
//                                     <UserCircle className="w-20 h-20 text-muted-foreground" />
//                                 )}
//                             </div>
//                             <h1 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight mb-1">
//                                 {name}
//                             </h1>
//                             <h2 className="text-sm md:text-base font-medium text-primary text-center">
//                                 {title}
//                             </h2>
//                         </div>

//                         {/* Right column: bio + social links */}
//                         <div className="flex flex-col flex-1 p-6 md:p-8 gap-5">
//                             <p className="text-muted-foreground text-sm leading-relaxed">
//                                 {bio}
//                             </p>

//                             {/* Social links grid */}
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                                 {socialLinks.map(({ key, icon: Icon }) =>
//                                     contact[key] && (
//                                         <a
//                                             key={key}
//                                             href={generateContactUrl(key, contact[key])}
//                                             target={key === 'email' ? '_self' : '_blank'}
//                                             rel={key !== 'email' ? 'noopener noreferrer' : undefined}
//                                             className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
//                                         >
//                                             <Icon className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
//                                             <span className="truncate group-hover:underline">{contact[key]}</span>
//                                         </a>
//                                     )
//                                 )}
//                             </div>

//                             {/* Sponsor button */}
//                             <div className="pt-1">
//                                 <SponsorButton
//                                     onSponsor={() => setShowSponsorModal(true)}
//                                     className="transform hover:scale-105 transition-transform duration-300 bg-primary text-primary-foreground"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom banner: Terminal mode callout */}
//                     <div className="border-t border-border px-6 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-gradient-to-r from-chart-2/10 to-chart-3/10">
//                         <Terminal className="w-4 h-4 text-chart-2 shrink-0 mt-0.5 sm:mt-0" />
//                         <div className="flex-1 min-w-0">
//                             <p className="text-sm font-medium text-chart-2">Try Terminal Mode</p>
//                             <p className="text-xs text-chart-2/70 mt-0.5 hidden sm:block">
//                                 Click "Terminal Mode" in the header for an interactive developer experience
//                             </p>
//                             <p className="text-xs text-chart-2/70 mt-0.5 sm:hidden">
//                                 Best experienced on larger screens
//                             </p>
//                         </div>
//                         <div className="hidden lg:flex items-center gap-1 text-xs text-chart-2/80 font-medium shrink-0">
//                             Open terminal <ArrowRight className="w-3 h-3 ml-1" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Scroll indicator */}
//                 <div className="mt-10 flex flex-col items-center">
//                     <span className="text-xs font-medium text-primary/80 mb-3 animate-pulse tracking-wide">
//                         Scroll to explore
//                     </span>
//                     <div className="relative w-0.5 h-14 bg-gradient-to-b from-primary/70 to-transparent">
//                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-bounce" />
//                     </div>
//                 </div>
//             </div>

//             {/* Background blobs */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//                 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
//             </div>

//             {/* Sponsor modals */}
//             <SponsorModal
//                 isOpen={showSponsorModal}
//                 onClose={() => setShowSponsorModal(false)}
//                 onSponsor={(amount, reference) => {
//                     setSponsorAmount(amount);
//                     setShowSponsorModal(false);
//                     setShowSponsorSuccess(true);
//                 }}
//             />

//             {showSponsorSuccess && (
//                 <SponsorSuccess
//                     amount={sponsorAmount}
//                     onClose={() => setShowSponsorSuccess(false)}
//                 />
//             )}
//         </div>
//     );
// };

// export default Hero;
import React, { useState } from 'react';
import { Mail, Twitter, Github, Linkedin, MapPin, UserCircle, Terminal } from 'lucide-react';
import TechIcons from './techicons';
import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

const generateContactUrl = (key, value) => {
    switch (key) {
        case 'email':    return `mailto:${value}`;
        case 'twitter':  return value.startsWith('http') ? value : `https://twitter.com/${value.replace('@', '')}`;
        case 'github':   return value.startsWith('http') ? value : `https://github.com/${value.replace(/^@?/, '')}`;
        case 'linkedin': return value.startsWith('http') ? value : `https://linkedin.com/in/${value}`;
        case 'location': return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
        default:         return value.startsWith('http') ? value : `https://${value}`;
    }
};

const socialLinks = [
    { key: 'email',    icon: Mail,     label: 'Email' },
    { key: 'twitter',  icon: Twitter,  label: 'Twitter' },
    { key: 'github',   icon: Github,   label: 'GitHub' },
    { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
    { key: 'location', icon: MapPin,   label: 'Location' },
];

//const TABS = ['About', 'Projects', 'Contact'];

const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
    const [activeTab, setActiveTab] = useState('About');
    const [showSponsorModal, setShowSponsorModal] = useState(false);
    const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
    const [sponsorAmount, setSponsorAmount] = useState(0);

    const initials = name
        ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
        : '??';

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground w-full">
            <TechIcons />

            <div className="relative z-20 w-full max-w-2xl px-4 sm:px-6 flex flex-col items-center">

                {/* Card */}
                <div className="w-full rounded-2xl border border-border bg-card overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">

                    {/* Header band */}
                    <div className="bg-secondary/20 border-b border-border px-6 sm:px-8 pt-8 pb-0">
                        <div className="flex items-end gap-4 sm:gap-5">

                            {/* Avatar */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-card bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                {profilePictureUrl ? (
                                    <img src={profilePictureUrl} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-2xl sm:text-3xl font-semibold text-primary">{initials}</span>
                                )}
                            </div>

                            {/* Name + title badge */}
                            <div className="pb-4">
                                <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">{name}</h1>
                                <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
                                    {title}
                                </span>
                            </div>
                        </div>

                        {/* Tab strip */}
                        {/* <div className="flex gap-1 mt-5 -mb-px">
                            {TABS.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-150 ${
                                        activeTab === tab
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div> */}
                    </div>

                    {/* Body */}
                    <div className="px-6 sm:px-8 py-6">

                        {activeTab === 'About' && (
                            <div className="space-y-5">
                                <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>

                                {/* Link pills grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {socialLinks.map(({ key, icon: Icon, label }) =>
                                        contact[key] && (
                                            <a
                                                key={key}
                                                href={generateContactUrl(key, contact[key])}
                                                target={key === 'email' ? '_self' : '_blank'}
                                                rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-primary/30 transition-all duration-200 group"
                                            >
                                                <Icon className="w-4 h-4 text-primary shrink-0" />
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</span>
                                                    <span className="text-xs text-foreground truncate group-hover:text-primary transition-colors">{contact[key]}</span>
                                                </div>
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Projects' && (
                            <div className="py-8 text-center text-muted-foreground text-sm">
                                Projects coming soon.
                            </div>
                        )}

                        {activeTab === 'Contact' && (
                            <div className="space-y-3 py-2">
                                {socialLinks.filter(({ key }) => contact[key]).map(({ key, icon: Icon, label }) => (
                                    <a
                                        key={key}
                                        href={generateContactUrl(key, contact[key])}
                                        target={key === 'email' ? '_self' : '_blank'}
                                        rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-secondary/30 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-foreground">{label}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground group-hover:text-primary truncate max-w-[180px] transition-colors">{contact[key]}</span>
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Footer row */}
                        {/* <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/40 border border-border text-xs text-muted-foreground">
                                <Terminal className="w-3.5 h-3.5 shrink-0" />
                                <span className="hidden sm:inline">Try terminal mode in the header</span>
                                <span className="sm:hidden">Terminal mode</span>
                            </div>
                            <SponsorButton
                                onSponsor={() => setShowSponsorModal(true)}
                                className="text-sm font-medium"
                            />
                        </div> */}
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-4 flex-wrap">
                        <SponsorButton
                            onSponsor={() => setShowSponsorModal(true)}
                            className="text-sm font-medium"
                        />
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="mt-10 flex flex-col items-center">
                    <span className="text-xs font-medium text-primary/70 mb-3 tracking-widest uppercase animate-pulse">Scroll</span>
                    <div className="relative w-px h-12 bg-gradient-to-b from-primary/60 to-transparent">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Background blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-3xl" />
            </div>

            {/* Modals */}
            <SponsorModal
                isOpen={showSponsorModal}
                onClose={() => setShowSponsorModal(false)}
                onSponsor={(amount) => {
                    setSponsorAmount(amount);
                    setShowSponsorModal(false);
                    setShowSponsorSuccess(true);
                }}
            />
            {showSponsorSuccess && (
                <SponsorSuccess
                    amount={sponsorAmount}
                    onClose={() => setShowSponsorSuccess(false)}
                />
            )}
        </div>
    );
};

export default Hero;