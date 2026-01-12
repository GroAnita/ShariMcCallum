class DenverCO {
  constructor() {
    this.title = "Denver, CO";
  }

  async render() {
    return `
      <hr class="about-divider"/>
			<div class="location-page">
      <section class="location-co">
      <div class="left-container">
        <img src="src/images/officebuilding.jpg" alt="Denver, CO Office" class="location-co-image"/>
        <div class="opening-hours">
          <h2>Opening Hours</h2>
          <ul>
            <li class="closed-day">Monday: closed</li>
            <li class="open-day">Tuesday: 10am - 7pm</li>
            <li class="closed-day">Wednesday: closed</li>
            <li class="open-day">Thursday: 10am - 7pm</li>
            <li class="closed-day">Friday: closed</li>
            <li class="closed-day">Saturday: Closed</li>
            <li class="closed-day">Sunday: Closed</li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p><i class="fa-solid fa-phone"></i> <a href="tel:+01(303) 870-1400">+01 (303) 870-1400</a></p>
          <p class="location-co-address"> <i class="fa-regular fa-address-book"></i>The Rolfing Works & Holistic Face Aesthetics,<br>2839 Wyandot St<br> Denver, CO 80211</p>

      </div>
      </div>
      <hr class="vertical-divider"/>
      <div class="location-co-text">
        <h1>About Denver, CO</h1>
        <p>In Denver, Shari MacCallum offers specialized holistic facial aesthetics designed to restore your skin’s health and natural glow. With over 10 years of experience, Shari brings advanced training and a whole-body perspective to her skincare routine—helping you look radiant while supporting your overall well-being.
        </p>
				<h2 class="denver-ul">At our Denver location, clients come for: </h2>
        <ul>
          <li>A full body reset with the Rolfing Ten-Series®</li>
          <li>A full body reset with the Rolfing Ten-Series®</li>
          <li>Advanced holistic facials</li>
          <li>Anti-aging skincare treatments</li>
          <li>Personalized aesthetics services that go beyond surface beauty</li>
        </ul>
        <p>Each session is carefully tailored to balance your skin and leave you feeling refreshed, confident, and renewed.</p>
        
				
        </div>
      </section>
      <hr class="about-divider"/>
      <section class="location-co-map">
        <h2>Find Us Here!</h2>
        <div class="map-container">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196313.66404765093!2d-105.1166447!3d39.7643389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1736631234567!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
			</div>
		`;
  }
}

export default DenverCO;
