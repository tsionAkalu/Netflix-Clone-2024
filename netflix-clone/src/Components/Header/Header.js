import React, {useState, useEffect} from 'react'
import "./Header.css"
import NetflixLogo from "../../Assets/images/NetflixLogos.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
    {/* <div className='header_outer_container'> */}
        <div className='header_container'>
            <div className="header_left">
                <ul>
                    <li><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" width={"100"}/></li>
                    <li>
                        <a href='/browse'>
                            <div className='browse'>Browse</div>
                            <div className='browse'>
                                <ArrowDropDownIcon />
                            </div>
                        </a>
                        
                    </li>
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
            {/* <div className="header_left">
                <ul className='headerb'
            </div> */}

        </div>
    </div>
     
 </>  
  )
}


export default Header

