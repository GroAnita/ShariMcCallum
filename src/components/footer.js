class Footer {
  constructor() {
    this.links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
    ];
  }

  render() {
    const basePath = window.location.pathname.includes("/ShariMcCallum")
      ? "/ShariMcCallum"
      : "";
    return `
        <footer class="footer">
        <div class="footer-logo-icon"><img src="${basePath}/src/images/Shari-MacCallum-Epona-Logo.webp" alt="Logo"></div>
        <div class="footer-links">
          <a href="${basePath}/" data-link>Home</a>
          <a href="${basePath}/about" data-link>About</a>
          <a href="${basePath}/faq" data-link>FAQ</a>
          <a href="${basePath}/contact" data-link>Contact</a>
        </div>
        <div class="footer-info">
          <p>&copy; ${new Date().getFullYear()} Shari McCallum. All rights reserved.</p>
        </div>
        </footer>
        
 
    `;
  }
}

export default Footer;
