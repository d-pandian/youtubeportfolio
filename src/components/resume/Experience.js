import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
            <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Feb2024 - Jan2025</p>
          <h2 className="text-4xl font-bold">FullStack Developer</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
};

export default Experience;
