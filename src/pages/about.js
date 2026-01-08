class About {
  constructor() {
    this.title = "About";
  }

  async render() {
    return `
			<div class="about-page">
      <div class="about-content">
				<h1>Meet Shari MacCallum</h1>
        <div class="about-row-shari">
          <div class="about-image-shari">
            <img src="src/images/shari-headshot.png" alt="Shari MacCallum"/>
          </div>
          <div class="about-text-shari">
            <p>At the heart of The Rolfing Works Ltd and Holistic Face Aesthetics, founder Shari MacCallum combines over three decades of expertise in Rolfing® Structural Integration with advanced training in Holistic Aesthetics. Her passion is helping people — and even horses — move, feel, and look their best through precision-based bodywork and natural, restorative skin care.</p>
            <p>Shari’s services bring together the best of bodywork and aesthetics, including:
            </p>
            <ul>
              <li><p class="about-text__ul-headlines"> Ashiatsu Oriental Bar Therapy </p> - A deep tissue massage performed by the practitioner’s feet, excellent for back pain and bilateral therapy.</li>
              <li><p class="about-text__ul-headlines">Rolfing®</p > - Addresses chronic pain, improves posture, and helps individuals rediscover natural movement.</li>
              <li><p class="about-text__ul-headlines">Equine Rolfing®</p> - Helping horses achieve comfort, alignment, and movement efficiency while improving rider–horse connection and performance.</li>
              <li><p class="about-text__ul-headlines">Aromatherapy</p> - Available with all services to enhance relaxation and healing.</li>
              <li><p class="about-text__ul-headlines">Advanced Holistic Skincare</p> - Gentle, restorative facial aesthetics designed to improve tone, texture, and natural radiance. </li>
            </ul>
          </div>
        </div>
        <hr class="about-divider"/>
        <div class="about-personal-journey">
        <div class="about-image-journey">
            <img src="src/images/shari-cyclist.webp" alt="Shari MacCallum competitive cyclist"/>
          </div>
          <div class="about-text-journey">
          <h2>A Personal Journey to Healing</h2>
          <p>As a competitive cyclist training at the U.S. Olympic Training Center, Shari suffered from chronic neck and shoulder pain that limited her performance.<br> It was through Structural Integration that she found lasting relief and renewed mobility.</p> <p>Inspired by this transformation, she graduated from the Rolf Institute® in 1992 and completed Advanced Rolfing® Training in 1997, dedicating her career to helping others achieve pain-free movement and greater balance.</p>
          </div>
          </div>
        <hr class="about-divider"/>
          <div class="about-structural-integration">
          <div class="about-structural-text">
            <h2>Expertise in Structural Integration</h2>
            <p>Structural Integration is a precise myofascial technique that restores balance to the body by addressing posture and movement patterns developed over a lifetime.</p><p> By improving mechanics, coordination, and presence, this work supports both everyday health and athletic performance.</p><p> Shari has studied and practiced in Boulder, Colorado and Torino, Italy, deepening her knowledge of the global bodywork community.</p><p>

She emphasizes the mind-body connection: just as the mind can make poor posture feel “normal,” it can also be retrained to make balanced movement feel natural. This awareness becomes second nature, supported by muscle memory and presence.</p>
          </div>
          <div class="about-structural-image">
            <img src="src/images/shari-rolfing.webp" alt="Shari MacCallum Rolfing session"/>
          </div>
       </div>
        <hr class="about-divider"/>
       <div class="about-holistic-aesthetics">
          <div class="about-holistic-image">
            <img src="src/images/holistic-face.webp" alt="Shari MacCallum Holistic Face Aesthetics"/>
          </div>
          <div class="about-holistic-text">
          <h2>The Holistic Face <br/>Advanced Skincare & Aesthetics</h2>
            <p>In addition to bodywork, Shari leads Holistic Face Aesthetics, her skincare practice dedicated to helping clients age gracefully and naturally. As an Advanced Licensed Holistic Aesthetician, she offers restorative treatments designed to improve skin health, texture, and radiance without invasive procedures.

Her approach combines advanced techniques with a deep respect for natural beauty, ensuring clients not only look rejuvenated but also feel confident and supported in their overall wellness.</p>
          </div>
       </div>
        <hr class="about-divider"/>

       <div class="about-why-choose-shari">
          <h2>Why Choose Shari MacCallum?</h2>
          <p class="about-text-whychooseshari">For or over 30 years, Shari has built her reputation through word of mouth, trust, and results. Clients choose her because she listens deeply, works with precision, and tailors each session to restore comfort, balance, and confidence. </p>
          <p class="about-text-whychooseshari">Whether you are seeking relief from chronic pain, recovering from injury, enhancing equestrian performance, or rejuvenating your skin, Shari offers a unique combination of services that support whole-body wellness inside and out. </p>
          <p class="about-text-whychooseshari">Schedule a consultation today with Shari MacCallum at The Rolfing Works Ltd or Holistic Face Aesthetics in Berthoud and Denver, Colorado — and discover how she can help you look, move, and feel your best. </p>
      </div>
		`;
  }
}

export default About;
