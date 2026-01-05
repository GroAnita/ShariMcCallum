class Home {
  constructor() {
    this.title = "Shari McCallum";
  }

  async render() {
    return `
      <div class="home-page">
       <div class="home-slider">
         <div class="slide slide-1">
           <div class="slide-content">
           <image src="src/images/berthoud-pass-in-colorado-cecelia-helwig.jpg" alt="Berthoud Pass, Colorado" class="slide-image"/>
             <h1>Berthoud, Colorado</h1>
             <p>Discover my projects and skills.</p>
           </div>
         </div>
         <div class="slide slide-2">
           <div class="slide-content">
             <image src="src/images/wp4203788-denver-colorad-wallpapers.jpg" alt="Denver, Colorado" class="slide-image"/>
             <h1>Denver, Colorado</h1>
             <p>Learn more about my background and experience.</p>
           </div>
         </div>
         <div class="slide slide-3">
           <div class="slide-content">
             <image src="src/images/minnesota-minneapolis.jpg" alt="Minnesota" class="slide-image"/>
             <h1>Minnesota</h1>
             <p>Contact me for collaborations or inquiries.</p>
           </div>
         </div>
       </div>
      </div>
    `;
  }

  attachBallClickListeners() {
    const navElements = document.querySelectorAll(".projects-ball, .nav-tile");

    navElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const route = element.getAttribute("data-route");

        // Add appropriate animation class
        if (element.classList.contains("projects-ball")) {
          element.classList.add("morph-to-page");
        } else {
          element.classList.add("tile-fade-out");
        }

        // Navigate after animation completes
        setTimeout(() => {
          // Add base path if on GitHub Pages
          const basePath = window.location.pathname.includes("/portfolio1")
            ? "/portfolio1"
            : "";
          const fullPath = basePath + route;
          window.history.pushState(null, null, fullPath);
          window.dispatchEvent(new Event("popstate"));
        }, 600);
      });
    });
  }
}

export default Home;
