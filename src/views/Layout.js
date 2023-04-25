import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
  <>
    <header className="App-header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/kidscartoon/">Home</Link>
          </li>
          <li>
            <Link to="/kidscartoon/video/1">Blogs</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;