"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import {motion} from "framer-motion";
import profilepic from "../assets/profilepic.png";



const Hero =()=> {
    return(
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]">

            </div>

            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Devesh Ingale</h1>
                </div>

                <motion.div
                    className="hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image 
                    src={cursor} 
                    height="170"
                    width="170" 
                    alt="cursor" 
                    className=""
                    draggable="false"
                     />
                </motion.div>

                <motion.div
                    className="hidden md:block absolute right-[220px] top-[20px]"
                    drag
                >
                    <Image 
                    src={lightning} 
                    height="120"
                    width="120" 
                    alt="lightning" 
                    className=""
                    draggable="false"
                     />
                </motion.div>
            

            <p className="text-center text-xl max-w-[550px] mx-auto mt-8 text-white/80">
            Passionate software and Android developer, crafting seamless software and mobile apps that captivate users from the first tap
            </p>

            <Image
            src={profilepic}
            alt="profile picture"
            className="h-auto w-auto mx-auto"/>

            <div className="w-full flex justify-center mt-8">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://drive.google.com/file/d/1SU4LEpMNMI07gFSl8-VRCJMULv0J6V7e/view?usp=sharing"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Download CV
            </a>
          </div>
        </div>

        </div>

    </div>
    )
}

export default Hero