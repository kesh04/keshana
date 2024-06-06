import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          
            <img className='w-10 mx-2' src={logo} alt="Logo" />
        
        </div>
        <div className='m-8 items-center justify-center gap-4 text-2xl flex'>
          <a href="https://www.linkedin.com/in/keshana-viyanga-l-556918240/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kesh04" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100079213314554" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/keshana_viyanga/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
