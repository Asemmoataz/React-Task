import './Header.css'


export default function Header({ isDarkMode, toggleMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src="../images/logo-dark.svg" alt="DevBlog" width="130" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link fw-bold" href="./Header.jsx">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="./Header.jsx">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="./Header.jsx">Contact</a>
          </li>
        </ul>
        <button onClick={toggleMode} className="btn btn-sm btn-toggle">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}