class Contact {
  constructor() {
    this.title = "Contact";
  }

  async render() {
    return `
			<div class="about-page">
				<h1>About</h1>
				<p>This is the About page. Add your content here.</p>
			</div>
		`;
  }
}

export default Contact;
