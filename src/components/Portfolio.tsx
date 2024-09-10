"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project2 from "../assets/passwordmanager.png";
import project1 from "../assets/talkify.png";
import project3 from "../assets/intern.png";

const projects = [
    {
        title: "Talkify",
        desc: "Developed a room messaging app with an integrated AI chatbot, leveraging real-time data storage and user authentication for enhanced user interaction.",
        devstack: "Kotlin, MVVM, Jetpack Compose, Firebase, Google Cloud",
        link: "", 
        git: "https://github.com/Devesh-Ingale/Talkify",
        src: project1
    },
    {
        title: "Password Manager",
        desc: "Built a secure mobile application for managing passwords using local data storage and encryption techniques for robust security.",
        devstack: "Kotlin, Jetpack Compose, MVVM, Room Database, Android Keystore",
        link: "", 
        git: "https://github.com/Devesh-Ingale/PasswordManager",
        src: project2
    },
    {
        title: "Android Developer Intern at Resolute AI",
        desc: "Migrated codebase from Java to Kotlin, enhanced app performance, and future-proofed API integrations.",
        devstack: "Kotlin, Google Health Connect API, Java",
        link: "", 
        git: "",
        src: project3
    }
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
                Selected  <span className="text-orange-400">Projects</span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{opacity: 0, y: 75}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.25}}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                width={400} 
                                height={350} 
                                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                            />
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
