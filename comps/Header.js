import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <Image alt="Welcome Ally" src="/logo.png" width={258} height={144} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 5
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
