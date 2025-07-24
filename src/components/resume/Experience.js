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
            des="Developed and maintained web applications using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL Participated in the complete software development life cycle including requirement gathering, coding, unit testing, and deployment Built and consumed RESTful APIs and integrated backend services with frontend components Used Git for version control and Postman for API testing Collaborated with QA team to resolve bugs and enhance functionality Followed Agile development practices, participated in daily standups and sprint reviews"
          />
          
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
