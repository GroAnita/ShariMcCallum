class TheRolfingWorksLtd {
  constructor() {
    this.title = "The Rolfing Works Ltd";
  }

  async render() {
    return `
      <hr class="hr-divider-top"/>
			<div class="rolfingworks-page">
      <div class="rolfingworks-content">
				<h1>Welcome to The Rolfing Works Ltd</h1>
				<p>At The Rolfing Works Ltd, we specialize in helping people and horses move, feel, and perform at their best. Led by Shari MacCallum, Certified Advanced Rolfer™ and Licensed Holistic Aesthetician, our practice offers precision-based Rolfing® Structural Integration designed to restore balance, improve movement, and release long-held patterns of pain or restriction.</p>
        <p>Whether you are seeking relief from chronic pain, looking to improve posture and body alignment, or supporting your equine partner in competition or training, our work focuses on creating lasting, life-changing results.
        </p>

        <hr class="rolfingworks-divider"/>

        <div class="rolfing-si">

        <div class="rolfing-si-content">
        <div class="rolfing-si-text">
          <h2>Rolfing® Structural Integration</h2>
          <p>Rolfing® is a precise myofascial technique that addresses the body’s connective tissue to improve posture, movement patterns, and overall balance. Through a series of sessions, we work to realign the body, release tension, and enhance coordination, helping clients rediscover natural movement and ease.</p>
          </div>
          <div class="rolfing-si-image">
            <img src="src/images/Shari-MacCallum-Rolfing-in-Denver-CO.webp" alt="Rolfing Session"/>
          </div>
        </div>
          <button class="learn-more-button">Learn More about Rolfing®</button>
        </div>

        <hr class="rolfingworks-divider"/>

        <div class="equine-si">
        <div class="equine-si-content">
        <div class="equine-si-image">
            <img src="src/images/Equestrian-Rolfing-2.webp" alt="Equine Rolfing Session"/>
          </div>
          <div class="equine-si-text">
          <h2>Equine Structural Integration</h2>
          <p>As riders and trainers know, a horse’s movement and comfort directly reflect the rider’s body and alignment. Shari’s advanced training extends into equine Rolfing®, offering horses improved biomechanics, greater comfort under saddle, and long-term soundness.</p>
          </div>
        </div>
          <button class="learn-more-button">Learn More about Equine SI</button>
        </div>

        <hr class="rolfingworks-divider"/>

        <div class="why-choose-us">
        <div class="why-choose-us-content">
        <div class="why-choose-us-text">
          <h2>Why Choose The Rolfing Works Ltd?</h2>
          <ul>
            <li><p class="why-choose-us__ul-headlines">Expertise and Experience</p> - With over three decades of experience, Shari brings a wealth of knowledge and skill to every session.</li>
            <li><p class="why-choose-us__ul-headlines">Personalized Approach</p> - Each client receives a tailored treatment plan designed to meet their unique needs and goals.</li>
            <li><p class="why-choose-us__ul-headlines">Holistic Care</p> - We consider the whole person (or horse), addressing physical, emotional, and energetic aspects of well-being.</li>
            <li><p class="why-choose-us__ul-headlines">Proven Results</p> - Our clients consistently report significant improvements in pain relief, mobility, and overall quality of life.</li>
          </ul>
          </div>
          <div class="why-choose-us-image">
            <img src="src/images/Equestrain-Head-shots.webp" alt="Happy Rolfing Client"/>
            </div>
          </div>
          <button class="learn-more-button">Schedule a Session</button>
        </div>

        <hr class="rolfingworks-divider"/>

        <div class="take-the-first-step">
          <h2>Take the First Step Towards Lasting Change</h2>
          <p>Discover how The Rolfing Works Ltd can support improved comfort, balance, and performance for both people and horses.</p>
          <p> <strong>Contact us today to schedule a consultation and take the first step toward optimal well-being.</strong></p>
          <button class="learn-more-button">Contact Us</button>
          </div>
        </div>
			</div>
		`;
  }
}

export default TheRolfingWorksLtd;
