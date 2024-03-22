document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = [
      'img/roomImage1.png',
      'img/roomImage2.png',
      'img/roomImage3.png',
      'img/roomImage4.png'
    ];
  
    var names = [
      '01 — Bed Room',
      '02 — Dining Room',
      '03 — Study Room',
      '04 — Living Room'
    ];
    
    var titles = [
      'Inner Peace',
      'Minimalism',
      'Rustic Char',
      'Urban Chic'
    ];
  
    function showCurrentImage() {
      var imgElement = document.getElementById('roomImage');
      var nameElement = document.getElementById('roomName');
      var titleElement = document.getElementById('roomTitle');
      var dots = document.querySelectorAll('.dot');
      if (imgElement && nameElement && titleElement && dots.length) {
        imgElement.src = images[currentIndex];
        nameElement.textContent = names[currentIndex];
        titleElement.textContent = titles[currentIndex];
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
  
      var thumbnails = document.getElementById('thumbnails');
      var nextIndex = (currentIndex + 1) % images.length; 
      thumbnails.innerHTML = `<img class="thumbnail" src="${images[nextIndex]}" alt="Thumbnail ${nextIndex}" onclick="setCurrentIndex(${nextIndex})" style="width: 344.95px; height: 486; margin-right: 10px;">`;
    }
  
    window.setCurrentIndex = function(index) {
      currentIndex = index;
      showCurrentImage();
    }
  
    document.getElementById('nextButton').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % images.length;
      showCurrentImage();
    });
  
    showCurrentImage();
});
  