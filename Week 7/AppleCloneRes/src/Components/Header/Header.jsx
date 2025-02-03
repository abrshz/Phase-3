import Logo from "../../assets/images/icons/logo-sm.png"
import Search from "../../assets/images/icons/search-icon-sm.png"
import Cart from "../../assets/images/icons/cart-sm.png"
import "./header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
    <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/"><img src={Logo} /></Link>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac">Mac</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
                    <Link className="nav-item" ><a className="nav-link js-scroll-trigger" to="/search/"><img src={Search} /></a></Link>
                    <Link className="nav-item"><a  className="nav-link js-scroll-trigger" to="/cart/"><img src={Cart} /></a></Link>
                </ul>
            </div>
        </nav>
    </div>
</div>
  )
}

export default Header