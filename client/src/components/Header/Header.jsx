import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="hero_area">
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Hostit</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to={"/"} className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/about"} className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/service"} className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/price"} className="nav-link">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* Login start */}

                <div>
                  <p className="text-danger mt-3">
                    <Link to={"/login"}>signin</Link>/
                    <Link to={"/register"}>signup </Link>
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* <!-- end header section --> */}
      </div>{" "}
    </div>
  );
}

export default Header;
