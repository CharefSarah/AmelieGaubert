//FONCTION POUR LE SLIDER DU HEADER
(function () {
    const images = ["assets/img/slider/livrestrarwars.jpg", "assets/img/slider/youtube.jpg", "assets/img/slider/starwars.jpg"];
    let counter = 0;
    let btns = document.querySelectorAll(".btn");
    let image = document.getElementById("image");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            let value = event.target;
            if (value.classList.contains("prev")) {
                counter--;
                if (counter < 0) {
                    counter = images.length - 1;
                }
                image.src = `${images[counter]}`;
            }
            if (value.classList.contains("next")) {
                counter++;
                if (counter > images.length - 1) {
                    counter = 0;
                }
                image.src = `${images[counter]}`;
            }
        });
    });
})();



//FONCTION POUR QUE LA NAV SOIT STICKY ON SCROLL
let sticky = document.querySelector(".navbar")
window.addEventListener('scroll', () => {
    window.scrollY > 100 ? sticky.classList.add("sticky") : sticky.classList.remove("sticky")
})




//FONCTION POUR LE CAPTCHA
function recaptchaCallback() {
    var btnSubmit = document.getElementById("btnSubmit");

    if (btnSubmit.classList.contains("hidden")) {
        btnSubmit.classList.remove("hidden");
        btnSubmitclassList.add("show");
    }
};




//FONCTION POUR LES IMAGES 
function createImageSwitcher(imgContainer, enableZoom) {
    let images = imgContainer.children;
    let imageCount = images.length;
    let imageIndex = 0;
    let intervalId = null;
  
    imgContainer.addEventListener('mouseover', () => {
      if (intervalId === null) {
        intervalId = setInterval(() => {
          images[imageIndex].style.opacity = 0;
          imageIndex = (imageIndex + 1) % imageCount;
          images[imageIndex].style.opacity = 1;
        }, 1500);
      }
    });
  
    imgContainer.addEventListener('mouseout', () => {
      clearInterval(intervalId);
      intervalId = null;
      images[imageIndex].style.opacity = 0;
      imageIndex = 0;
      images[imageIndex].style.opacity = 1;
    });
  
    if (enableZoom) {
      let zoomedOverlay = document.createElement('div');
      zoomedOverlay.classList.add('zoomed-overlay');
  
      for (let i = 0; i < images.length; i++) {
        let image = images[i];
  
        image.addEventListener('click', () => {
          if (!image.classList.contains('zoomed')) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            let x = image.getBoundingClientRect().left + scrollLeft;
            let y = image.getBoundingClientRect().top + scrollTop;
  
            image.classList.add('zoomed');
            image.style.transformOrigin = `${event.clientX - x}px ${event.clientY - y}px`;
            zoomedOverlay.classList.add('active');
            image.classList.add('active');
            document.body.classList.add('no-scroll');
            setTimeout(() => {
              image.style.transform = 'translate(-50%, -50%) scale(1.0)';
              zoomedOverlay.style.opacity = '0.8';
            }, 0);
          }
        });
      }
  
      zoomedOverlay.addEventListener('click', () => {
        let zoomedImage = document.querySelector('img.zoomed');
        if (zoomedImage) {
          zoomedImage.style.transform = null;
          zoomedImage.classList.remove('zoomed');
          zoomedOverlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
          zoomedOverlay.style.opacity = '0';
          zoomedImage.classList.remove('active');
        }
      });
  
      document.body.appendChild(zoomedOverlay);
    }
  }
  
  createImageSwitcher(document.querySelector('.image__deco1'), false);
  createImageSwitcher(document.querySelector('.image__deco2'), false);
  createImageSwitcher(document.querySelector('.image__deco3'), false);
  createImageSwitcher(document.querySelector('.image__deco4'), true);
  createImageSwitcher(document.querySelector('.image__deco5'), true);
  createImageSwitcher(document.querySelector('.image__deco6'), true);

  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  function downloadPDF() {
    if (isMobileDevice()) {
      // Code spécifique pour les appareils mobiles
      var link = document.createElement('a');
      link.href = 'assets/pdf/cv.pdf';
      link.download = 'assets/pdf/cv.pdf';
      link.click();
    } else {
      // Code pour les ordinateurs de bureau
      window.open('assets/pdf/cv.pdf');
    }
  }