
import "./NavBar.css"
import Logo from "../Assets/images/Rectangle 4 (1).png"
import menu from "../Assets/images/menu (1).png"

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" >
                <div class="container">
                    <img className="Logo" src={Logo} alt=""></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img className="menu" src={menu} alt=""></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button className="BtnNavBar" type="button">Login</button>
                </div >
            </nav >
        </>
    )
}

export default NavBar;