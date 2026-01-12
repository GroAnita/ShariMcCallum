class Headeralt {
  constructor() {
    this.links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
      { path: "/the-rolfing-works-ltd", label: "The Rolfing Works Ltd" },
      { path: "/holistic-face-aesthetics", label: "Holistic Face Aesthetics" },
      { path: "/equine-si", label: "Equine SI" },
      { path: "/product-cbd", label: "CBD Salve with Arnica" },
      { path: "/holistic-services", label: "Holistic Services" },
      { path: "/facial-treatments", label: "Facial Treatments" },
      { path: "/signature-packages", label: "Signature Packages" },
      { path: "/locations", label: "Locations" },
      { path: "/faq", label: "FAQs" },
      { path: "/what-is-rolfing", label: "What is Rolfing?" },
      { path: "/berthoud-co", label: "Berthoud, CO" },
      { path: "/denver-co", label: "Denver, CO" },
      { path: "/contact", label: "Contact" },
    ];
  }

  render() {
    const basePath = window.location.pathname.includes("/ShariMcCallum")
      ? "/ShariMcCallum"
      : "";
    return `
        <header>
        <div class="header-top-nav-alt">
        <div class="logo-icon"><img src="${basePath}/src/images/Shari-MacCallum-Epona-Logo.webp" alt="Logo"></div>
        <h1 class="brand-name-alt">Shari MacCallum</h1>
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu'><label></label>
  <ul>
    <li><a href='${basePath}/' data-link>Home</a></li>
    <li><a class='dropdown-arrow' href="${basePath}/the-rolfing-works-ltd" data-link>The Rolfing Works Ltd</a>
      <ul class='sub-menus'>
        <li><a href='${basePath}/what-is-rolfing' data-link>What is Rolfing?</a></li>
        <li><a href='${basePath}/equine-si' data-link>Equine SI</a></li>
        <li><a href='${basePath}/product-cbd' data-link>CBD Salve with Arnica</a></li>
        <li><a href='${basePath}/the-rolfing-works-ltd' data-link>Schedule a session</a></li>
      </ul>
    </li>
    <li><a class="dropdown-arrow">Holistic Face Aesthetics</a>
    <ul class='sub-menus'>
      <li><a href='${basePath}/holistic-services' data-link>Holistic Services</a></li>
      <li><a href='${basePath}/facial-treatments' data-link>Facial Treatments</a></li>
      <li><a href='${basePath}/signature-packages' data-link>Signature Packages</a></li>
      <li><a href='${basePath}/contact' data-link>Schedule a Consultation</a></li>
    </ul>
    </li>
    <li><a class='dropdown-arrow'>About</a>
      <ul class='sub-menus'>
        <li><a href='${basePath}/about' data-link>Meet Shari MacCallum</a></li>
        <li><a href='${basePath}/faq' data-link>FAQs</a></li>
        <li><a href='#'>Blog.</a></li>
      </ul>
    </li>
    <li><a class='dropdown-arrow'>Locations</a>
    <ul class='sub-menus'>
      <li><a href='${basePath}/berthoud-co' data-link>Berthoud, Colorado</a></li>
      <li><a href='${basePath}/denver-co' data-link>Denver, Colorado</a></li>
      <li><a href='${basePath}/locations' data-link>Minnesota</a></li>
    </ul>
    </li>
  </ul>
 
</nav>

</div>
 
</header>
          
  
    `;
  }
}

export default Headeralt;
