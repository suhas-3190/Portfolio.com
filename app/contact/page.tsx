// export default function Contact() {
//     return (
//       <section
//         id="contact"
//         className="bg-base-100 text-base-content py-20 px-4 max-w-3xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold mb-10 text-center text-primary">
//           Contact Me
//         </h2>
  
//         <form
//           action="https://formsubmit.co/133d8bc61b6157db08b8359eb48bf732"
//           method="POST"
//           className="space-y-6 bg-base-200 p-8 rounded-2xl shadow-md border border-base-300"
//         >
//           {/* Add a honeypot to prevent spam */}
//           <input type="hidden" name="_honey" className="hidden" />
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_template" value="box" />
  
//           <div>
//             <label className="label font-semibold" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               placeholder="Your name"
//               className="input input-bordered w-full"
//             />
//           </div>
  
//           <div>
//             <label className="label font-semibold" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Your email"
//               className="input input-bordered w-full"
//             />
//           </div>
  
//           <div>
//             <label className="label font-semibold" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               required
//               placeholder="Your message"
//               rows={5}
//               className="textarea textarea-bordered w-full"
//             />
//           </div>
  
//           <button type="submit" className="btn btn-primary w-full">
//             Send Message
//           </button>
//         </form>
//       </section>
//     );
//   }
  
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    toast.success('Message sent successfully!');
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/kethangowda003@gmail.com"
        method="POST"
        className="w-full max-w-lg bg-base-200 shadow-lg rounded-xl p-8 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Hidden inputs for FormSubmit options */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting me! I'll reply to you as soon as possible."
        />

        <div>
          <label htmlFor="name" className="label text-base-content">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="label text-base-content">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="label text-base-content">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </motion.section>
  );
}
