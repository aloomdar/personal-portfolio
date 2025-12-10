"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "83a69119-7d86-477f-b50b-a71e7e35559b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div>
      <section id="header" className="justify-center">
        <nav className="jusitfy-content flex justify-center gap-10 p-4 text-xl text-gray-800">
          <ul>
            <a href="#about-me">About Me</a>
          </ul>
          <ul>
            <a href="#projects">Projects</a>
          </ul>
          <ul>
            <a href="#contact-me">Contact Me</a>
          </ul>
        </nav>
        <div className="header-section mt-20 flex flex-col items-center justify-center gap-10 p-10 text-center text-base text-gray-800 xl:flex-row xl:text-3xl">
          <img
            className="first-pic h-128 rounded-full shadow-xl/45 outline-slate-500 outline-solid md:w-auto md:w-128"
            src="me-1.jpeg"
          />
          <h1 className="self-description text-3xl xl:text-4xl">
            Alamdar Qanoongo | Software Engineer | Full-Stack Developer
            <div className="socials-section flex flex-row items-center justify-center gap-5">
              <a target="_blank" href="https://www.linkedin.com/in/qanoongo/">
                <img src="linkedin.png" />
              </a>
              <a target="_blank" href="https://github.com/aloomdar">
                <img src="github.png" />
              </a>
              <a target="_blank" href="resume.pdf">
                Resume
              </a>
            </div>
          </h1>
        </div>
      </section>
      <section id="about-me">
        <div className="about-me-section mt-20 flex flex-col items-center justify-center gap-10 rounded-4xl p-10 text-center text-xl text-gray-800 xl:text-3xl">
          <h1 className="text-4xl underline xl:text-5xl">About Me</h1>
          <p className="self-description max-w-2/3">
            <img
              className="float-right mb-2 ml-6 aspect-square h-40 rounded-full object-cover shadow-xl/45 outline-slate-500 outline-solid"
              src="me-2.jpg"
            />
            Hello! I'm Alamdar Qanoongo, a passionate software engineer with a
            experience in full-stack development, backend systems, and database
            systems and design. I love building scalable and efficient
            applications that solve real-world problems. My expertise lies in
            JavaScript\Typescript and Python. When I'm not coding, I enjoy
            hiking and exploring new technologies. I am currently working
            towards getting my certification as an AWS Certified Developer
            Associate. Feel free to reach out to me!
          </p>
        </div>
      </section>
      <section id="projects">
        <div className="project-section mt-20 flex flex-col items-center justify-center gap-10 rounded p-10 text-center text-xl xl:text-3xl text-gray-800">
          <h1 className="text-4xl xl:text-5xl underline">Projects</h1>
          <div className="betterhealth flex max-w-2/3 flex-col items-center justify-center gap-10">
            <a target="_blank" href="https://betterhealth.vercel.app/">
              <img className="rounded-4xl w-full " src="betterhealth.png" />
            </a>
            <div className="project-description flex flex-row gap-5 text-base">
              <span className="text- max-w-1/2">
                If you would like to log in as a patient, use the following:{" "}
                <br />
                badamowicz0@berkeley.edu <br /> gN5,X#F(5X=DG7L{" "}
              </span>
              <span className="max-w-1/2">
                If you would like to log in as therapist, use the following:{" "}
                <br />
                tbrigginshawb@about.me <br /> sN8+uz6'{"}"}I/fp){" "}
              </span>
            </div>
            <a
              target="_blank"
              href="https://github.com/betterhealth490/betterhealth"
            >
              <img src="github.png" />
            </a>
          </div>
        </div>
      </section>
      <section id="contact-me">
        <div className="contact-me-section mt-20 flex flex-col items-center justify-center gap-10 rounded-4xl p-10 text-center text-3xl text-gray-800">
          <h1 className="text-4xl xl:text-5xl underline">Contact Me</h1>
          <div className="email-form flex max-w-2/3 flex-col gap-5">
            <h1 className="text-xl xl:text-4xl">Shoot me an email!</h1>
            {/* <form  className="flex flex-col" action="mailto:aqanoongo@gmail.com" encType="text/plain">
                <label htmlFor="first_name">First Name: </label>
                <input type="text" id="name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 mx-3 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-indigo-500"/>
                <label htmlFor="name">Last Name: </label>
                <input type="text" id="name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 mx-3 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-indigo-500"/>
              </form> */}
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-base">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-base">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-base">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-base">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-base">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-base text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Let's talk
                </button>
              </div>
              <p className="mt-10">{result}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
