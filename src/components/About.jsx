import aboutme from "../assets/aboutme.jpg";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-beutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutme} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
           <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">As a front-end web developer, I specialize in creating engaging, user-friendly interfaces for websites and web applications. My focus is on translating design concepts into functional, interactive elements using languages like HTML, CSS, and JavaScript. With a keen eye for detail, I ensure that layouts are visually appealing and responsive across various devices and screen sizes. My adept at working with frameworks such as React , optimizing performance, and ensuring seamless user experiences. I stay updated with the latest industry trends and best practices, striving to build modern, efficient, and accessible web solutions.
           <br />
           Currently, I am pursuing <b>b.tech</b> from <b>JECRC</b> college.
           </p>

           </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About;

