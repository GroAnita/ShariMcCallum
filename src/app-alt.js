import Router, { routes } from "./router.js?v=4";
import Header from "./components/headeralt.js?v=4";
import Footer from "./components/footer.js?v=4";

class App {
  constructor() {
    this.router = null;
  }

  async init() {
    // Render header
    this.renderHeader();

    // Initialize router with routes
    this.router = new Router(routes);
    await this.router.init();

    this.renderFooter();
  }

  renderHeader() {
    const headerContainer = document.querySelector("#header");
    if (headerContainer) {
      const header = new Header();
      headerContainer.innerHTML = header.render();
    }
  }

  renderFooter() {
    const footerContainer = document.querySelector("#footer");
    if (footerContainer) {
      const footer = new Footer();
      footerContainer.innerHTML = footer.render();
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});

export default App;
