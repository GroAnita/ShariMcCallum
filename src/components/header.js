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
    const basePath = window.location.pathname.includes("/ShariMcCallum")
      ? "/ShariMcCallum"
      : "";
    return `
        <div class="header">
      
        <class ="header-top-nav">
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
  <ul>
    <li><a href='http://'>Home</a></li>
    <li><a class='dropdown-arrow' href='http://'>The Rolfing Works Ltd</a>
      <ul class='sub-menus'>
        <li><a href='what-is-rolfing.js'>What is Rolfing?</a></li>
        <li><a href='Equine-SI.js'>Equine SI</a></li>
        <li><a href='product-cbd.js'>CBD Salve with Arnica</a></li>
        <li><a href='http://'>Schedule a session</a></li>
      </ul>
    </li>
    <li><a class="dropdown-arrow" href='http://'>Holistic Face Aesthetics</a>
    <ul class='sub-menus'>
      <li><a href='holistic-services.js'>Holistic Services</a></li>
      <li><a href='facial-treatments.js'>Facial Treatments</a></li>
      <li><a href='signature-packages.js'>Signature Packages</a></li>
      <li><a href='http://'>Schedule a Consultation</a></li>
    </ul>
    </li>
    <li><a class='dropdown-arrow' href='http://'>About</a>
      <ul class='sub-menus'>
        <li><a href='http://'>Meet Shari MacCallum</a></li>
        <li><a href='http://'>FAQs</a></li>
        <li><a href='http://'>Blog</a></li>
      </ul>
    </li>
    <li><a class='dropdown-arrow' href='http://'>Locations</a>
    <ul class='sub-menus'>
      <li><a href='http://'>Berthoud, Colorado</a></li>
      <li><a href='http://'>Denver, Colorado</a></li>
      <li><a href='http://'>Minnesota</a></li>
    </ul>
    </li>
  </ul>
</nav>
</div>
<div class="header-brand">
  <div class="logo-icon"><img src="${basePath}/src/images/Shari-MacCallum-Epona-Logo.webp" alt="Logo"></div>
  <div class="brand-text">
  <div class="brand-name"><h1>Shari MacCallum</h1></div>
  <div class="brand-tagline"><h2>Advanced Rolfing & Holistic Skin Care</h2></div>
  </div>
  <div class="spacer">
  </div>
  
</div>
      <nav class="navbar">
        <div class="nav-brand">
        </div>
        
            </header>
          
      </nav>
    `;
  }
}

export default Header;
