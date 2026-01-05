class Header {
  constructor() {
    this.links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
    ];
  }

  render() {
    const basePath = window.location.pathname.includes("/portfolio1")
      ? "/portfolio1"
      : "";
    return `
      <nav class="navbar">
        <div class="nav-brand">
          <a href="/" data-link>ShariMcCallum</a>
          
        </div>
        <div class="logo-icon"><img src="${basePath}/src/images/Shari-MacCallum-Epona-Logo.png" alt="Logo"></div>
        <ul class="nav-links">
          ${this.links
            .map(
              (link) => `
            <li>
              <a href="${basePath}${link.path}" data-link>${link.label}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </nav>
    `;
  }
}

export default Navbar;
