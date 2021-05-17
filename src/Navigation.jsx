

function Navigation(props) {
    const { user, toggleMenu } =  props;
    return (
        <div className='navigation-wpr'>

            {/* Page Title*/}
            <h1>Shtudy Video Library</h1>

            {/* Access Profile */}
            <button onClick={toggleMenu} className="navigation__profile-pic">
                <img alt='' src={user.pic}/>
            </button>

        </div>
    )
}

export default Navigation;