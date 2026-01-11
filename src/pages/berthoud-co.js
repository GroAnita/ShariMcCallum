class BerthoudCO {
  constructor() {
    this.title = "Berthoud, CO";
  }

  async render() {
    return `

      <hr class="about-divider"/>
			<div class="locations-page">
      <section class="berthoud-co">
      <div class="left-container">
        <img src="src/images/officebuilding.jpg" alt="Berthoud, CO Office" class="berthoud-co-image"/>
        <div class="opening-hours">
          <h2>Opening Hours</h2>
          <ul>
            <li>Monday: 10am - 7pm</li>
            <li>Thuesday: closed</li>
            <li>Wednesday: 10am - 7pm</li>
            <li>Thursday: closed</li>
            <li>Friday: 10am - 7pm</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p><i class="fa-solid fa-phone"></i> <a href="tel:+01(303) 870-1400">+01 (303) 870-1400</a></p>
          <p class="berthoud-address"> <i class="fa-regular fa-address-book"></i> Shari McCallum,<br> The Rolfing Works & The Holistic Face,<br> Berthoud, CO 80513</p>

      </div>
      </div>
      <hr class="vertical-divider"/>
      <div class="berthoud-co-text">
        <h1>About Berthoud, CO</h1>
        <p>Looking for The Rolfing Works Ltd or Holistic Face Aesthetics in Berthoud, CO?</p><p> Our primary location is here to serve clients across Northern Colorado with holistic aesthetic services and Advanced Rolfing® bodywork. <br>Whether you’re interested in Botox® or Daxxify® injectables, European facials, Chinese Facial Diagnostics, or Rolfing® Structural Integration, you can trust Shari MacCallum to provide professional, natural results that help you feel your best.</p>
				<h2>Serving Our Local Community</h2>
				<p>Our Berthoud, CO office is conveniently located for clients traveling from Loveland, Longmont, Fort Collins, Boulder, and surrounding areas. Many of our long-time clients choose this location for its relaxing, professional environment and Shari’s personalized care.</p>
        <h2>Contact Us to Schedule Your Appointment</h2>
        <p>If you have questions about our services or would like to schedule a consultation or treatment at our Berthoud, CO location, please don’t hesitate to reach out. We look forward to helping you achieve your wellness and aesthetic goals.</p>
        </div>
      </section>
      <hr class="about-divider"/>
      <section class="berthoud-map">
        <h2>Find Us Here!</h2>
        <div class="map-container">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48679.05338641301!2d-105.10309697039438!3d40.31037284092986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8769559f46d173c1%3A0xc655ecae6212926b!2sBerthoud%2C%20CO!5e0!3m2!1sen!2sus!4v1768125657021!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
			</div>
		`;
  }
}

export default BerthoudCO;
