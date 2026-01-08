import Home from "./pages/home.js?v=4";
import About from "./pages/about.js?v=4";
import Berthoud from "./pages/berthoud-co.js?v=4";
import Denver from "./pages/denver-co.js?v=4";
import EquineSI from "./pages/Equine-SI.js?v=4";
import FacialTreatments from "./pages/facial-treatments.js?v=4";
import FAQ from "./pages/FAQ.js?v=4";
import HolisticFaceAesthetics from "./pages/holistic-face-aesthetics.js?v=4";
import HolisticServices from "./pages/holistic-services.js?v=4";
import Locations from "./pages/locations.js?v=4";
import ProductCbd from "./pages/product-cbd.js?v=4";
import SignaturePackages from "./pages/signature-packages.js?v=4";
import RolfingWorks from "./pages/the-rolfing-works-ltd.js?v=4";
import WhatIsRolfing from "./pages/what-is-rolfing.js?v=4";
import Contact from "./pages/contact.js?v=4";

// Router class for handling SPA navigation
class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;

    // Listen for browser back/forward buttons
    window.addEventListener("popstate", () => this.handleRoute());

    // Intercept all link clicks
    this.setupLinkInterception();
  }

  setupLinkInterception() {
    document.addEventListener("click", (e) => {
      // Check if clicked element is a link with data-link attribute
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });
  }

  async navigateTo(url) {
    // Update browser history
    // Extract just the pathname from the URL to avoid issues
    const urlObj = new URL(url, window.location.origin);
    history.pushState(null, null, urlObj.pathname);
    await this.handleRoute();
  }

  async handleRoute() {
    let path = window.location.pathname;

    // Handle GitHub Pages base path
    const basePath = "/ShariMcCallum";
    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length) || "/";
    }

    // Find matching route
    let route = this.routes.find((r) => r.path === path);

    // Default to home page if no match found
    if (!route) {
      route = this.routes[0];
    }

    this.currentRoute = route;

    // Load and render the view
    if (route.view) {
      const view = new route.view();
      document.querySelector("#app").innerHTML = await view.render();
      if (typeof view.mount === "function") {
        view.mount();
      }
    }
  }

  async init() {
    await this.handleRoute();
  }
}

// Define routes
const routes = [
  { path: "/", view: Home },
  { path: "/about", view: About },
  { path: "/berthoud-co", view: Berthoud },
  { path: "/denver-co", view: Denver },
  { path: "/equine-si", view: EquineSI },
  { path: "/facial-treatments", view: FacialTreatments },
  { path: "/faq", view: FAQ },
  { path: "/holistic-face-aesthetics", view: HolisticFaceAesthetics },
  { path: "/holistic-services", view: HolisticServices },
  { path: "/locations", view: Locations },
  { path: "/product-cbd", view: ProductCbd },
  { path: "/signature-packages", view: SignaturePackages },
  { path: "/the-rolfing-works-ltd", view: RolfingWorks },
  { path: "/what-is-rolfing", view: WhatIsRolfing },
  { path: "/contact", view: Contact },
];

export default Router;
export { routes };
