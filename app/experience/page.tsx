type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Fullstack AI Developer Intern",
    company: "StackLane",
    period: "Mar 2025 - Present",
    description:
      "Working on fullstack projects using React, Vite, Tailwind CSS, Hono, Prisma. Built REST APIs, deployed on Azure using GitHub Actions.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-base-100 text-base-content py-8 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-primary">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-neutral pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-md" />
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-neutral-content mb-2">
              {exp.company} &mdash; <span>{exp.period}</span>
            </p>
            <p className="text-base-content">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
