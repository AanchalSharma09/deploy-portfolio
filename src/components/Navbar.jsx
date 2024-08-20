import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {color, motion} from "framer-motion";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img src="" alt="" />
    </div>
    <motion.div 
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x: 100}}
     transition={{duration: 1}}
    className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/aanchal-sharma-582035287/" className="hover:text-blue-500 transition-all" target="blank"><FaLinkedin/></a>
    <a href="https://github.com/AanchalSharma09" className="hover:text-white bg-black transition-all" target="blank"><FaGithub/></a>
      <a href="https://x.com/aanchal_sh60716?t=Kr_w_us70JxDSPpxY9JEvw&s=09" className="hover:text-blue-400 transition-all" target="blank"><FaTwitter /></a>
      <a href="https://www.instagram.com/invites/contact/?igsh=10h741waj56p0&utm_content=oud5sh3" className="hover:text-pink-400 transition-all" target="blank"><FaInstagram/></a>
    </motion.div>
  </nav>
}
export default Navbar;
