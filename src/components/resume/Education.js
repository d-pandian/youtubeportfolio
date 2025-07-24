import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Srm Univercity Chennai, Tamilnadu,India( 2021- 2023)"
            result="3.90/4"
            des="Studied core CS subjects including Java, Python, C, C++, JavaScript, MySQL, and Cloud Computing. Completed projects involving database systems and full-stack web development"
          />
          
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Jun2023 -Dec2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Python Full Stack Development Internship
            <ResumeCard
          
  des="Built full-stack apps with Python, MySQL, and JavaScript in an Agile setup."

      
    
          />
</h2>
        </div>
          
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Feb2024 -Jan2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Developer"
            subTitle=" Thots2IT Technology Services Pvt Ltd"
            result="Madurai"
            des="Built full-stack apps using Java, Spring Boot, and MySQL. Developed REST APIs, integrated frontend, used Git/Postman, and followed Agile to enhance features and fix bugs."
          />
          
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education