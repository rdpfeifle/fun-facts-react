export function Navbar(props) {
  const { darkMode, toggleDarkMode } = props;

  return (
    <nav className={darkMode ? "dark" : ""}>
      <h3 className="nav--logo-text">USAFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p class="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
