"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { Span } from "next/dist/trace";

const About = ()=>{
    return (
        <div className="max-w-[1200px] mx-auto" id="about">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
                About <span className="text-orange-400">Me</span>
            </h1>
            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">


                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-pulse"></div>
                   <div className="flex flex-row p-6">
                    <Image src={book} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Education</h2>
                        <p className="text-lg text-white/70 mt-2">Pursuing a degree in Computer Science at IIIT Gwalior, with a focus on building cutting-edge solutions through technologies like Java, Kotlin, Firebase, and Jetpack Compose.</p>
                    </div>
                   </div>
                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-pulse"></div>

                   <div className="flex flex-row p-6">
                    <Image src={finance} alt="finance" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Problem-Solving</h2>
                        <p className="text-lg text-white/70 mt-2">I enjoy breaking down complex challenges and devising efficient, scalable solutions.</p>
                    </div>
                   </div>
                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-pulse"></div>

                   <div className="flex flex-row p-6">
                    <Image src={card} alt="card" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                        <p className="text-lg text-white/70 mt-2">As a Software & Android Developer, I’ve worked on impactful projects and internships.</p>
                    </div>
                   </div>
                </div>

                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-pulse"></div>

                   <div className="flex flex-row p-6">
                    <Image src={pc} alt="pc" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80">Technical skills</h2>
                        <p className="text-lg text-white/70 mt-2">I specialize in full-stack development with proficiency in Kotlin, Android, Java, and database systems like Firebase. Whether modernizing legacy apps or creating sleek UIs, I prioritize maintainability and performance in every project.</p>
                    </div>
                   </div>
                </div>



            </div>

        </div>
    )
}

export default About