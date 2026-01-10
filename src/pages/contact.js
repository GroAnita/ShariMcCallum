class Contact {
  constructor() {
    this.title = "Contact";
  }

  async render() {
    return `
      <hr class="about-divider"/>
			<div class="contact-page">
      <section class="contact-text">
				<h1>Contact Us</h1>
				<p>If you are interested in any of our services or have any questions, please feel free to reach out to us.</p>
        <p>You can fill out the contact form, and we will get back to you as soon as possible.</p>
        <h2>Or you can call us directly at:</h2>  <p><i class="fa-solid fa-phone"></i> <a href="tel:+01(123) 456-7890">+01 (123) 456-7890</a></p>
        <p class="business-hours"><i class="fa-solid fa-business-time"></i>Business hours:  9am to 5pm.</p>
        </section>
        <section contact-form>
        <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Your Name" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Your Email" />

          <label for="select-location">Select Location:</label>
          <select id="select-location" name="select-location" required>
            <option value="" disabled selected>Select a location</option>
            <option value="the-rolfing-works-ltd">Berthoud, CO</option>
            <option value="holistic-face-aesthetics">Denver, CO</option>
          </select> 

          <label for="select-service">Select Service:</label>
          <select id="select-service" name="select-service" required>
            <option value="" disabled selected>Select a service</option>
            <option value="rolfing-sessions">Rolfing Sessions</option>
            <option value="equine-si">Equine SI</option>
            <option value="cbd-salve">CBD Salve with Arnica</option>
            <option value="holistic-services">Holistic Services</option>
            <option value="facial-treatments">Facial Treatments</option>
            <option value="signature-packages">Signature Packages</option>
          </select>

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="15" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        </section>
			</div>
		`;
  }

  mount() {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      });
    }
  }
}

export default Contact;
