import logo from "../assets/Images/troll-face.png"

function Header() {
    return (
        <header className="header">
           <img src={logo} alt="logo" className="header--logo" />
           <p className="header--title">Meme Generator</p>
        </header>
    )
}

export default Header;