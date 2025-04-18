// 'use client';

// import Image from 'next/image';
// import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Hero = () => {
//   return (
//     <section
//       id="profile"
//       className="min-h-[80vh] flex flex-col items-center justify-center px-6 pb-4 transition-all"
//     >
//       {/* Profile Picture using next/image */}
//       <Image
//         src="/kethanpfp2.jpg"
//         alt="Kethan Gowda N Profile Picture"
//         width={160}
//         height={160}
//         className="rounded-full border-4 border-white shadow-lg mb-6"
//       />

//       {/* Name and Title */}
//       <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-primary">
//         Kethan Gowda N
//       </h1>
//       <p className="text-lg md:text-xl text-gray-400 mb-4 text-center">
//         Fullstack AI Developer | React • Hono • Tailwind • Prisma • Azure
//       </p>

//       {/* Social Media Links */}
//       <div className="flex gap-6 mt-6">
//         <a
//           href="https://github.com/Kethan3"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-500 hover:text-red-500 transition flex items-center gap-2"
//           aria-label="GitHub Profile"
//         >
//           <FontAwesomeIcon icon={faGithub} className="text-xl" />
//           <span className="hidden md:inline">GitHub</span>
//         </a>

//         <a
//           href="https://www.linkedin.com/in/kethan-gowda-51657224b"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-500 hover:text-red-500 transition flex items-center gap-2"
//           aria-label="LinkedIn Profile"
//         >
//           <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
//           <span className="hidden md:inline">LinkedIn</span>
//         </a>

//         <a
//           href="https://www.instagram.com/kethan2003/#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-500 hover:text-red-500 transition flex items-center gap-2"
//           aria-label="Instagram Profile"
//         >
//           <FontAwesomeIcon icon={faInstagram} className="text-xl" />
//           <span className="hidden md:inline">Instagram</span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <motion.section
      id="profile"
      className="min-h-[90vh] flex flex-col items-center justify-center px-6 pb-4 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image with border glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-6"
      >
        <Image
          src="/kethanpfp2.jpg"
          alt="Kethan Gowda N Profile Picture"
          width={160}
          height={160}
          className="rounded-full border-4 border-primary shadow-xl hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full border border-primary blur-xl opacity-20 animate-pulse"></div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2 text-center text-primary"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Kethan Gowda N
      </motion.h1>

      {/* Title */}
      <motion.p
        className="text-lg md:text-xl text-base-content/70 mb-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Fullstack AI Developer &mdash; React • Hono • Tailwind • Prisma • Azure
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://github.com/Kethan3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-primary transition-all flex items-center gap-2"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          <span className="hidden md:inline text-sm">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/kethan-gowda-51657224b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-primary transition-all flex items-center gap-2"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          <span className="hidden md:inline text-sm">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/kethan2003/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-primary transition-all flex items-center gap-2"
          aria-label="Instagram Profile"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <span className="hidden md:inline text-sm">Instagram</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
