//scrolling smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// -------------oneLIfe Toggle-----------
$(document).ready(function(){
  $('.firstToggleBtn1').click(function(){
      $('div.divToggle1').addClass('divHide');
      $('.oneFirstDiv').removeClass('divHide');
      $('.projectBtn1').removeClass('btnClicked');
      $(this).addClass('btnClicked');
  });

  $('.firstToggleBtn2').click(function(){
      $('div.divToggle1').addClass('divHide');
      $('.oneSecondDiv').removeClass('divHide');
      $('.projectBtn1').removeClass('btnClicked');
      $(this).addClass('btnClicked');
  });

  $('.firstToggleBtn3').click(function(){
    $('div.divToggle1').addClass('divHide');
    $('.oneThirdDiv').removeClass('divHide');
    $('.projectBtn1').removeClass('btnClicked');
    $(this).addClass('btnClicked');
});

$('.firstToggleBtn4').click(function(){
  $('div.divToggle1').addClass('divHide');
  $('.oneFourthDiv').removeClass('divHide');
  $('.projectBtn1').removeClass('btnClicked');
  $(this).addClass('btnClicked');
});
$('.firstToggleBtn5').click(function(){
  $('div.divToggle1').addClass('divHide');
  $('.oneFifthdDiv').removeClass('divHide');
  $('.projectBtn1').removeClass('btnClicked');
  $(this).addClass('btnClicked');
});

$('.khToggleBtn1').click(function(){
  $('div.divToggle2').addClass('divHide');
  $('.khFirstDiv').removeClass('divHide');
  $('.projectBtn2').removeClass('btnClicked');
  $(this).addClass('btnClicked');
});
$('.khToggleBtn2').click(function(){
  $('div.divToggle2').addClass('divHide');
  $('.khSecondDiv').removeClass('divHide');
  $('.projectBtn2').removeClass('btnClicked');
  $(this).addClass('btnClicked');
});
$('.khToggleBtn3').click(function(){
  $('div.divToggle2').addClass('divHide');
  $('.khThirdDiv').removeClass('divHide');
  $('.projectBtn2').removeClass('btnClicked');
  $(this).addClass('btnClicked');
});
});


// ----------------------------
// 슬라이드 onelife 1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("proDot1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// -------------------------------------
// 슬라이드 onelife 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");

  var dots = document.getElementsByClassName("proDot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
}


// 슬라이드 onelife 3
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");

  var dots = document.getElementsByClassName("proDot3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
}

// 슬라이드 onelife 5
var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");

  var dots = document.getElementsByClassName("proDot5");
  if (n > slides.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5-1].style.display = "block";  
  dots[slideIndex5-1].className += " active";
}

// ---------------------------
//이미지 클릭 시 zoom
var zoomImg = function () {
  // (A) CREATE EVIL IMAGE CLONE
  var clone = this.cloneNode(true);
  clone.classList.remove("zoomD");
  // let imgName = this.nextElementSibling.value;
  // (B) PUT EVIL CLONE INTO LIGHTBOX
  var lb = document.querySelector("#lb-img");
  
  // lb.innerHTML = "<div class='imgTitle'>" + imgName + "</div>";
  lb.innerHTML = "";
  lb.appendChild(clone);
  lb.lastElementChild.classList.add("imgZoom");

  // var imgDesc = document.getElementsByClassName('imgTitle')[0];
  // imgDesc.style.left = lb.lastElementChild.x + 10 +'px';

  // (C) SHOW LIGHTBOX
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  // (D) ATTACH ON CLICK EVENTS TO ALL .ZOOMD IMAGES
  var images = document.getElementsByClassName("zoomD");
  if (images.length>0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // (E) CLICK EVENT TO HIDE THE LIGHTBOX
  document.getElementById("lb-back").addEventListener("click", function(){
    this.classList.remove("show");
  })
});


// -------------------------------------
//career slide
var sbwSlideIndex = 1;
sbwShowSlides(sbwSlideIndex);

function sbwPlusSlides(n) {
  sbwShowSlides(sbwSlideIndex += n);
}

function sbwCurrentSlide(n) {
  sbwShowSlides(sbwSlideIndex = n);
}

function sbwShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sbwSlides");

  var dots = document.getElementsByClassName("sbwDot");
  if (n > slides.length) {sbwSlideIndex = 1}    
  if (n < 1) {sbwSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sbwSlideIndex-1].style.display = "flex";  
  dots[sbwSlideIndex-1].className += " active";
}

// ---------------------------
//career 이미지 클릭 시 zoom
var zoomImg2 = function () {
  // (A) CREATE EVIL IMAGE CLONE
  var clone = this.cloneNode(true);
  clone.classList.remove("zoomSbw");
  // (B) PUT EVIL CLONE INTO LIGHTBOX
  var lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);

  // (C) SHOW LIGHTBOX
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function(){
  // (D) ATTACH ON CLICK EVENTS TO ALL .ZOOMD IMAGES
  var images = document.getElementsByClassName("zoomSbw");
  if (images.length>0) {
    for (var img of images) {
      img.addEventListener("click", zoomImg2);
    }
  }

  // (E) CLICK EVENT TO HIDE THE LIGHTBOX
  document.getElementById("lb-back").addEventListener("click", function(){
    this.classList.remove("show");
    var imgContainer = document.getElementById("lb-img");
    imgContainer.innerHTML = "";
  })
});

// 모달
var modal = document.getElementById("myModal");

var oneTableBtn = document.getElementById("oneTableBtn");
var proModel = document.getElementsByClassName("modal-content")[0];

oneTableBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<img src="resources/images/onlife_table.jpg" alt="">';
  modal.style.display = "block";
}

var oneErdBtn = document.getElementById("oneErdBtn");

oneErdBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<iframe width="600" height="336" src="https://www.erdcloud.com/p/k55g4WCpC84QZAGrL" frameborder="0" allowfullscreen></iframe>';
  modal.style.display = "block";
}

var oneDefinitionBtn = document.getElementById("oneDefinitionBtn");

oneDefinitionBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<img src="resources/images/onlife_definition.jpg" alt="">';
  modal.style.display = "block";
}

var khDefinitionBtn = document.getElementById("khDefinitionBtn");

khDefinitionBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<img src="resources/images/KH_definition.jpg" alt="">';
  modal.style.display = "block";
}

var khTableBtn = document.getElementById("khTableBtn");

khTableBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<img src="resources/images/KH_table.jpg" alt="">';
  modal.style.display = "block";
}

var khErdBtn = document.getElementById("khErdBtn");

khErdBtn.onclick = function() {
  proModel.innerHTML = "";
  proModel.innerHTML = '<iframe width="600" height="336" src="https://www.erdcloud.com/p/ZCe2JFP4YntkMjfYQ" frameborder="0" allowfullscreen></iframe>';
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}