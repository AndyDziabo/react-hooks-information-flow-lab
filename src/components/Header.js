
function Header({ onDarkModeClick, isMode }) {

    return (
        <div >
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {isMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}


export default Header;