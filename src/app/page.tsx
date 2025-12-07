import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="header">
        <nav className="flex p-4 jusitfy-content justify-center ">
          <ul>About</ul>
          <ul>Projects</ul>
          <ul>Contact Me</ul>
        </nav>
        <div className="header-section flex flex-row text-3xl p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10 h-full">
          <img
            className="first-pic rounded-full h-128 shadow-xl/45 outline-solid outline-slate-500"
            src="me-1.jpeg"
          />
          <h1 className="self-description text-4xl">
            Alamdar Qanoongo | Software Engineer | Full-Stack Developer
            <div className="socials-section flex flex-row items-center justify-center">
              <a target="_blank" href="https://www.linkedin.com/in/qanoongo/">
                <img src="linkedin.png" />
              </a>
              <a target="_blank" href="https://github.com/aloomdar">
                <img src="github.png" />
              </a>
              <a href=""></a>
            </div>
          </h1>
        </div>
      </section>
      <section id="about-me">
        <div className="about-me-section flex flex-col text-3xl rounded-4xl p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10">
          <h1 className="text-5xl underline">About Me</h1>
          <p className="self-description max-w-2/3">
            <img
              className="float-right object-cover rounded-full h-40 aspect-square outline-solid outline-slate-500 ml-6 mb-2 shadow-xl/45"
              src="me-2.jpg"
            />
            I’m Alamdar—a Computer Science student and full-stack developer who
            genuinely enjoys building things that are useful, fast, and clean.
            I’m the type of person who learns a new framework over a weekend if
            it helps me ship something better on Monday. Most of my work centers
            around modern web development. I’ve built everything from real-time
            AI streaming interfaces with Laravel and Vue to full authentication
            systems, database-driven apps, and tools that automate video
            translation and dubbing. I’m comfortable jumping between frontend
            and backend, solving problems end-to-end, and picking up new
            technologies on the fly. I’m actively looking for a place where I
            can contribute, grow, and work with people who care about building
            great software. I’m driven, curious, and always improving—and I’m
            ready to bring that energy to a team that values it.
          </p>
        </div>
      </section>
      <section id="projects">
        <div className="project-section flex flex-col text-3xl rounded p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10">
          <h1 className="text-5xl underline">Projects</h1>
          <div className="betterhealth max-w-2/3 flex flex-col items-center justify-center gap-10">
            <a
              target="_blank"
              href="https://betterhealth.vercel.app/"
            >
              <img className="rounded-4xl" src="betterhealth.png" />
            </a>
            <a target="_blank" href="https://github.com/betterhealth490/betterhealth">
                <img src="github.png" />
              </a>
            <span className="max-w-1/2"></span>
          </div>
         
        </div>
      </section>
      <section id="contact-me">
        <div className="contact-me-section flex flex-col text-3xl rounded-4xl p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10">
          <h1 className="text-5xl underline">Contact Me</h1>
            <div className="email-form max-w-2/3 flex flex-col gap-5">
              <h1>Shoot me an email!</h1>
              <form action="mailto:aqanoongo@gmail.com" encType="text/plain">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-indigo-500"/>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
}
