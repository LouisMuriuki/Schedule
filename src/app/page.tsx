import Link from "next/link";
import React from "react";
const projects = [
  { name: "TO-DO", link: "schedule" },
  { name: "WAREHOUSE", link: "warehouse" },
];
const HomePage = () => {
  return (
    <div className="container mx-auto py-2 px-2">
      <h1 className="text-2xl text-slate-100 text-center underline mb-5 md:mb-10">
        Examples
      </h1>
      <div className="flex flex-row  ">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="flex relative border border-blue-700 w-1/2 md:w-1/3  bg-slate-800 hover:bg-slate-900 cursor-pointer h-40 w- items-center justify-center "
            >
              <Link className="py-15 px-15 md:px-30" href={`/${project.link}`}>
                <text className="text-2xl text-center text-neutral-200 hover:text-neutral-100">
                  {project.name}
                </text>
              </Link>
              <Link href={`/${project.link}`}>
                <div className="absolute bottom-0 right-0 pr-2 text-orange-300">
                  <text>Go to &#8594;</text>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
