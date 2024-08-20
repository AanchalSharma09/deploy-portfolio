import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project) => (
          <div key={project.title} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded"
                width={150}
                height={150}
              />
            </motion.div>

            {/* Title Section */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="mt-6 w-full max-w-xl lg:w-3/4"
            >

<a href={project.link} target="_blank" rel="noopener noreferrer">
  <motion.h6
    // whileHover={{  }}
    className="mb-2 font-semibold text-lg "
  >
    {project.title}
  </motion.h6>
</a>


            </motion.div>

            {/* Description Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" mx-10 lg:w-3/4"
            >
              <p className=" text-neutral-400 ">{project.description}</p>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="mt-5  lg:w-3/4 "
            >
              <div>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="mx-2 rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-purple-800 "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
