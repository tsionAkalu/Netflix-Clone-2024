import React, {useState, useEffect} from 'react'
import "./Header.css"
import NetflixLogo from "../../Assets/images/NetflixLogo1.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavSection from './Nav';


const Header = () => {
    const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    
  }, []);
  return (
    <>
    <div className={`header_outer_container ${show && "nav_black"}`}>
        <div className='header_container'>
            <div className='browse'>
                <NavSection />
            </div>
            <div className="header_left">
                <ul>
                    <li><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" width={"100"}/></li>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/tvshows'>TVShows</a></li>
                    <li><a href='/movies'>Movies</a></li>
                    <li><a href='latest'>Latest</a></li>
                    <li><a href='my list'>MyList</a></li>
                    <li><a href='/browse by languages'>Browse by Languages</a></li>
                </ul>
            </div>
            <div className="header_right">
                <ul className="headericons">

                    <li> <SearchIcon /> </li>
                    <li><NotificationsNoneIcon/></li>
                    
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>

 
                </ul>
            </div>
        </div>
    </div>
     
 </>  
  )
}

export default Header

