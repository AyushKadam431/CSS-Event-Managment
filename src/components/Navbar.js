import "../pages/Home.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top d-flex align-items-center">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsupportcontents"
          aria-controls="navbarsupportcontents"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-auto mb-2 mb-lg-2" id="navbarsupportcontents">
          <ul className="navbar-nav me-auto mb-2 mb-lg-2" style={{ paddingTop: "15px" }}>
            <li className="nav-item" style={{ width: "130px" }}>
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item" style={{ width: "130px" }}>
              <a className="nav-link" href="/eventcreation">Event</a>
            </li>
            <li className="nav-item" style={{ width: "130px" }}>
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>
            <li className="nav-item" style={{ width: "150px" }}>
              <a className="nav-link" href="/aboutus">About Us</a>
            </li>
            <li className="nav-item" style={{ width: "150px" }}>
              <a className="nav-link" href="/contactus">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
