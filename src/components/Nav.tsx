export function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top" aria-label="Rohan, back to top">
        Rohan
      </a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#loom">Loom</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
