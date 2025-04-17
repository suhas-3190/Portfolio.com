
const AboutPage = () => {
  return (
    <section className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
        About Me
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-base-content leading-relaxed">
        I&apos;m{" "}
        <span className="font-semibold text-primary">Kethan Gowda</span>, a
        passionate Fullstack AI Developer Intern currently working at{" "}
        <a
          href="https://stacklane.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-secondary"
        >
          StackLane
        </a>
        . I specialize in building robust web applications using technologies
        like <span className="font-semibold text-base-content">React</span>,{" "}
        <span className="font-semibold text-base-content">Tailwind CSS</span>,{" "}
        <span className="font-semibold text-base-content">Prisma</span>, and{" "}
        <span className="font-semibold text-base-content">Hono</span>.
      </p>

      <p className="max-w-2xl text-lg md:text-xl text-base-content leading-relaxed mt-6">
        My journey involves developing REST APIs and deploying scalable
        applications using <span className="font-semibold text-base-content">Azure</span> and{" "}
        <span className="font-semibold text-base-content">GitHub Actions</span>. I&apos;m constantly
        learning and exploring new technologies to build innovative solutions.
      </p>
    </section>
  );
};

export default AboutPage;
