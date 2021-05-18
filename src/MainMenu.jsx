
import { FiX } from 'react-icons/fi';

function Menu(props) {
    const { user, toggleMenu, mainMenu } = props;
    return (
        <div  className="main-menu__wpr" style={mainMenu ? {right: '0px'} : {right: '-300px'}}>

        {/* Menu Navigation */}
            <div className="menu__nav">
                <div className="name-field">
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>{user.field}</p>
                </div>
                <button onClick={toggleMenu}>
                    {/* <FontAwesomeIcon className="close" icon={['fas', 'times']} /> */}
                    <FiX className="close" />
                </button>
            </div>

        {/* Profile Picture */}
            <div className="menu__profile-pic">
                <img src={user.pic} alt=""/>
            </div>

        {/* Menu Links */}
        <ul className="menu__links-1">
            <li>
                <a href="dead">Edit Profile</a>
            </li>
            <li>
                <a href="dead">Update Resume</a>
            </li>
            <li>
                <a href="dead">Sign Out</a>
            </li>
        </ul>

        {/* Menu Links */}
        <ul className="menu__links-2">
            <li>
                <a href="dead">Settings</a>
            </li>
            <li>
                <a href="dead">Help</a>
            </li>
        </ul>


        </div>
    )
}

export default Menu;