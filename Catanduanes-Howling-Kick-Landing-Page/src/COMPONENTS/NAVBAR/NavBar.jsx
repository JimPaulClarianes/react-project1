import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
        <div className="navbar-top">
            <div className="navbar-top-left">
                <div className="navbar-top-left-logo">
                    <a href='#'>CATANDUANES HOWLING KICK</a>
                </div>
            </div>
            <div className="navbar-top-right">
                <a href='#'>LOGO</a>
                <a href='#'>LOGO</a>
            </div>
        </div>
        <div className="navbar-bottom">
            <div className="navbar-bottom-left">
                <div className="navbar-bottom-left-links">
                    <a href='#'>cavinitan virac catanduananes</a>
                    <a href='#'>09123456789</a>
                    <a href='#'>chktrainingcenter@gmail.com</a>
                </div>
            </div>
            <div className="navbar-bottom-menu">
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>PROGRAM</a></li>
                    <li><a href='#'>TRAINING</a></li>
                    <li><a href='#'>CONTACT</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar