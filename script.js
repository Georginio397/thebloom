let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function copyContract() {
    const contractText = "Ca:Soon";
    navigator.clipboard.writeText(contractText).then(() => {
   
    });
  }
  
  // lightbox logic
document.querySelectorAll(".meme-gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
  
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  

window.onload = () => {
  showSlide(currentIndex);
};
