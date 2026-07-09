import React from 'react'

const NavBar = () => {
  return (
    <div>

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
       

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
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Book
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Book
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                Delete Book
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar