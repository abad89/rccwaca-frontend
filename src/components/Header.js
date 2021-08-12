function Header() {
  return (
    <div>
      <nav className={"navbar navbar-light bg-light"}>
        <div className={"container-fluid"}>
          <a className={"navbar-brand"}>Anthony's RC Car Collection App</a>
          <ul className={"navbar-nav ms-md-auto"}>
            <li className={"nav-item"}>
              <a
                target="_blank"
                rel="noopener"
                className={"nav-link"}
                href="https://github.com/abad89"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
