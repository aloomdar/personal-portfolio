import Image from "next/image";

export default function Home() {
  return (
    <div >
      <section id="header">
        <nav className="flex p-4 jusitfy-content justify-center ">
          <ul >
            <a href="#about-me">About Me</a>
          </ul>
          <ul >
            <a href="#projects">Projects</a>
          </ul>
          <ul >
            <a href="#contact-me">Contact Me</a>
          </ul>
        </nav>
        <div className="header-section flex flex-row text-3xl p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10 h-full ">
          <img
            className="first-pic rounded-full h-128 shadow-xl/45 outline-solid outline-slate-500"
            src="me-1.jpeg"
          />
          <h1 className="self-description text-4xl">
            Alamdar Qanoongo | Software Engineer | Full-Stack Developer
            <div className="socials-section flex flex-row items-center justify-center gap-5">
              <a target="_blank" href="https://www.linkedin.com/in/qanoongo/">
                <img src="linkedin.png" />
              </a>
              <a target="_blank" href="https://github.com/aloomdar">
                <img src="github.png" />
              </a>
              <a target="_blank" href="resume.pdf">Resume</a>
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
            Hello! I'm Alamdar Qanoongo, a passionate software engineer with a
            experience in full-stack development, backend systems, and database systems and design. 
            I love building scalable and efficient applications that solve real-world problems. 
            My expertise lies in JavaScript\Typescript and Python. 
            When I'm not coding, I enjoy hiking and exploring new technologies.
            I am currently working towards getting my certification as an AWS Certified Developer Associate. 
            Feel free to reach out to me!
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
            <div className="project-description text-base flex flex-row gap-5">
              <span className="max-w-1/2 text-">If you would like to log in as a patient, use the following: <br />badamowicz0@berkeley.edu <br /> gN5,X#F(5X=DG7L </span>
              <span className="max-w-1/2">If you would like to log in as therapist, use the following: <br />tbrigginshawb@about.me <br /> sN8+uz6'{'}'}I/fp) </span>
            </div>
            <a target="_blank" href="https://github.com/betterhealth490/betterhealth">
                <img src="github.png" />
              </a>
          </div>
         
        </div>
      </section>
      <section id="contact-me">
        <div className="contact-me-section flex flex-col text-3xl rounded-4xl p-10 text-center text-gray-800 mt-20 items-center justify-center gap-10">
          <h1 className="text-5xl underline">Contact Me</h1>
            <div className="email-form max-w-2/3 flex flex-col gap-5">
              <h1>Shoot me an email!</h1>
              <form  className="flex flex-col" action="mailto:aqanoongo@gmail.com" encType="text/plain">
                <label htmlFor="first_name">First Name: </label>
                <input type="text" id="name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 mx-3 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-indigo-500"/>
                <label htmlFor="name">Last Name: </label>
                <input type="text" id="name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 mx-3 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-indigo-500"/>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
}
