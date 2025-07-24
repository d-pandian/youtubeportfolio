import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="DoctorOnCall – Online Doctor Appointment System"
          des=" DoctorOnCall is a full-stack app for booking doctor appointments with features like secure login, doctor profiles, real-time status updates, and appointment scheduling. It ensures a smooth user experience with a responsive UI and optimized backend"
          src={projectOne}
        />
        <ProjectsCard
          title="BazarPro – React Ecommerce Web App"
          des=" zarPro is an educational ecommerce project built with React.js. It features a clean, responsive UI and basic product display/navigation—perfect for learning realworld ecommerce design."
          src={projectThree}
        />
        <ProjectsCard
          title="Orebi – Modern Ecommerce Web Application"
          des=" Orebi is a modern, responsive ecommerce app built with React.js and Tailwind CSS. It offers a clean UI, smooth UX, and modular components—ideal for fashion, electronics, and furniture stores with easy customization"
          src={projectTwo}
        />
        
        
        
    
      </div>
    </section>
  );
}

export default Projects