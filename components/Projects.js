import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projets
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description = {proj.description}
              technologie = {proj.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl,description,technologie }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold bg-blue-500 rounded-md px-2">
          {title}<br/>
          {technologie} <br/>
        </h1>

        <h1 className="relative bottom-10 left-10 text-gray-10 font-bold ">
        {description} 
        </h1>
      </div>
    </a>
  );
};
