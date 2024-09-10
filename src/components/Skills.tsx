import React from 'react';
import { FaHtml5,FaCss3Alt,FaReact,FaJsSquare,FaJava, FaGit, FaGithub, FaLinux  } from 'react-icons/fa';
import { SiCplusplus, SiKotlin, SiPython, SiSpringboot, SiAndroid, SiFirebase, SiMysql, SiPostgresql } from 'react-icons/si';


const skillsIcons=[
  { icon: <FaJava size={140} />, label: "Java" },
  { icon: <SiCplusplus size={140} />, label: "C++" },
  { icon: <SiKotlin size={140} />, label: "Kotlin" },
  { icon: <SiPython size={140} />, label: "Python" },
  { icon: <SiSpringboot size={140} />, label: "SpringBoot" },
  { icon: <SiAndroid size={140} />, label: "Android" },
  { icon: <SiFirebase size={140} />, label: "Firebase" },
  { icon: <SiMysql size={140} />, label: "MySQL" },
  { icon: <SiPostgresql size={140} />, label: "PostgreSQL" },
  { icon: <FaGit size={140} />, label: "Git" },
  { icon: <FaGithub size={140} />, label: "GitHub" },
  { icon: <FaLinux size={140} />, label: "Linux" },
  { icon: <FaHtml5 size={140} />, label: "HTML5" },
  { icon: <FaCss3Alt size={140} />, label: "CSS3" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <FaReact size={140} />, label: "React" }
]

const Skills =()=> {
    return(
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {skillsIcons.map((skill,index)=>(
                        <div
                        key={index}
                        className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between 
                                   items-center bg-white/10 p-4 rounded-xl'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>

                        </div>  
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Skills