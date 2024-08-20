import {CONTACT} from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: 100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">aanchalsharma4077@gmail.com</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <motion.div 
      whileInView={{opacity: 1, y:1}}
      initial={{opacity:0, y: 100}}
      transition={{duration:0.5}}
      className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/aanchal-sharma-582035287/" className="hover:text-blue-500 transition-all" target="blank"><FaLinkedin/></a>
    <a href="https://github.com/AanchalSharma09" className="hover:text-white bg-black transition-all" target="blank" ><FaGithub/></a>
      <a href="https://x.com/aanchal_sh60716?t=Kr_w_us70JxDSPpxY9JEvw&s=09" className="hover:text-blue-400 transition-all" target="blank"><FaTwitter /></a>
      <a href="https://www.instagram.com/invites/contact/?igsh=10h741waj56p0&utm_content=oud5sh3" className="hover:text-pink-400 transition-all" target="blank"><FaInstagram/></a>
      </motion.div>
    </div>
    </div>
  )
}

export default Contact
