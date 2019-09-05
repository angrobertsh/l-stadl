// Open the Modal
function openModal() {
  $("#image-modal").addClass("block");
  $("#image-modal").removeClass("hidden");
}

// Close the Modal
function closeModal() {
  $("#image-modal").addClass("hidden");
  $("#image-modal").removeClass("block");
}

var slideIndex = 1;

// Next/previous controls
function changeSlide(offSet) {
  showSlide(slideIndex + offSet);
}

function showSlide(n) {
  slideIndex = n;
  var i;
  var slides = $(".image-modal-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.addClass("hidden");
  $(slides[slideIndex-1]).removeClass("hidden");
}
