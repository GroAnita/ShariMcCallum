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
           <img src="src/images/berthoud-pass-in-colorado-cecelia-helwig.jpg" alt="Berthoud Pass, Colorado" class="slide-image"/>
           <div class="slide-text-overlay">
                <p>Advanced Rolfing <br/> and <br/> Holistic Skin Care</p>
                 <button class="slider-button">Berthoud, CO</button>
                  <button class="slider-button">Denver, CO</button>
            </div>    
            
           </div>
         </div>
         <div class="slide slide-2">
           <div class="slide-content">
             <img src="src/images/wp4203788-denver-colorado-wallpapers.jpg" alt="Denver, Colorado" class="slide-image"/>
             <div class="slide-text-overlay">
             <p>Learn more about my background and experience.</p>
             <button class="slider-button">About Me</button>
            </div>
                
           </div>
         </div>
         <div class="slide slide-3">
           <div class="slide-content">
             <img src="src/images/minnesota-minneapolis.jpg" alt="Minnesota" class="slide-image"/>
            <div class="slide-text-overlay">
             <h1>Minnesota</h1>
             <p>Contact me for collaborations or inquiries.</p>
             <button class="slider-button">Contact Me</button>
            </div>
           </div>
         </div>
         <div class="prev-button">&#10094;</div>
         <div class="next-button">&#10095;</div>
       </div>
       <section class="image-intro">
       <div class="intro-box">
       <div class="img-container">
         <img src="src/images/Shari-MacCallum-Rolfing-in-Denver-CO.webp" alt="Rolfing Session" class="intro-image"/>
       </div>
       <div class="text-container">
         <h2>The Rolfing Works Ltd</h2>
         <p>Unwind years of physical tension and stress with our expert Rolfing services.</p>
         </div>
         <button class="learn-more-button">Feel the difference</button>
        
       </div>
       <div class="intro-box">
         <div class="img-container">
         <img src="src/images/Shari-MacCallum-Rolfing-in-Denver-CO.webp" alt="Holistic Face Aesthetics" class="intro-image"/>
         </div>
         <div class="text-container">
         <h2>Holistic Face Aesthetics</h2>
         <p>Reduce years of physical aging</p>
         </div>
            <button class="learn-more-button">See the difference</button>
        
       </div>
       <div class="intro-box">
            <div class="img-container">
            <img src="src/images/Shari-MacCallum-Rolfing-in-Denver-CO.webp" alt="Schedule Appointment" class="intro-image"/>
            </div>
            <div class="text-container">
         <h2>Schedule Appointment</h2>
         <p>Get started today!</p>
         </div>
            <button class="learn-more-button">Book now</button>
        
       </div>
       </section>
      </div>
    `;
  }
  mount() {
    this.initSlider();
  }
  initSlider() {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    showSlide(currentIndex);
  }
}

export default Home;
