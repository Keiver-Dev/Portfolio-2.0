const About = () => {
  return (
    <main className="flex flex-row lg:flex-row items-center justify-center h-[95vh] w-full px-6 text-start lg:text-left overflow-hidden gap-8">
      <section className="flex flex-col w-[60%] xl:w-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bebas">
          About Me
        </h1>
        <p className="max-w-3xl xl:max-w-3xl text-base sm:text-lg lg:text-xl mb-4">
          Hi, I'm <span className="text-[#DAFDBA] font-semibold">Keiver</span>,
          a passionate Frontend Developer with a love for creating sleek,
          interactive web experiences using{" "}
          <span className="font-medium">React</span> and{" "}
          <span className="font-medium">Tailwind CSS</span>. I enjoy turning
          complex ideas into clean, functional interfaces while continuously
          learning and experimenting with modern web technologies.
        </p>
        <p className="max-w-3xl text-base sm:text-lg lg:text-xl mb-4">
          Beyond coding, I explore the worlds of{" "}
          <span className="italic">music production</span> and{" "}
          <span className="italic">renewable energy research</span>, constantly
          seeking inspiration from technology, design, and innovation. My
          projects reflect a blend of creativity and technical precision, from
          interactive dashboards to dynamic portfolios.
        </p>
        <p className="max-w-3xl text-base sm:text-lg lg:text-xl">
          I'm always looking for ways to push the boundaries of frontend
          development, build meaningful experiences, and contribute to projects
          that make a difference.
        </p>
      </section>
      <section className="flex flex-col mt-8 lg:mt-0">
        <img
          src="./Avatar.jpg"
          alt="Avatar"
          className="rounded-full h-64 sm:h-80 lg:h-96 ring-4 ring-[#DAFDBA] p-2 mx-auto lg:mx-0"
        />
      </section>
    </main>
  );
};

export default About;
