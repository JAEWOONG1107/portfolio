// fullpage js
$(function () {
    $('#fullpage').fullpage({
          //options here
          anchors : ['section1', 'section2', 'section3', 'section4', 'section5'],
          menu : '#menu',
          slidersNavigation : true,
          navigation : false,
    });

    // 프로젝트 이미지 메뉴
    $('.proImg').mouseover(function() {
      $(this).find('.blackBox').stop().fadeIn();
    });
    $('.proImg').mouseout(function() {
      $(this).find('.blackBox').stop().fadeOut();
    });

    $('.blackBox').click(function(){
      $(this).parents('.proImg').siblings('.proContent').stop().fadeIn();
  
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    });

    $('.closeBtn').click(function(){
      $(this).parents('.proContent').stop().fadeOut();

      $('body').off('scroll touchmove mousewheel');
    });
})

// main text animation
const myText = new SplitType("#myText");

gsap.to('.char', {
    y : 0,
    stagger : 0.05,
    delay : 0.2,
    duration: .1
});

// typed js
var typed = new Typed('.mainText', {
    strings : ['Thank You'],
    typeSpeed : 150,
    backSpeed : 150,
    backDelay : 1000,
    loop : true
});

// swiper slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed : 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// h1 animation
let numH = 0.4;
document.querySelectorAll('.mText').forEach((el)=>{
    el.style.setProperty('animation-delay', `${numH}s`);
})

let observerH1 = new IntersectionObserver((k) => {
  k.forEach((box)=>{
      if (box.isIntersecting) {
        box.target.classList.add('animate__animated', 'animate__fadeInUp');
        box.target.style.opacity = 1;
      }
      else {
        box.target.classList.remove('animate__animated', 'animate__fadeInUp');
        box.target.style.opacity = 0;
      }
  });
})

let H1 = document.querySelectorAll('.mText');
for (let i=0; i<H1.length; i++) {
  observerH1.observe(H1[i]);
}

// about img animation
let observerAboutI = new IntersectionObserver((k) => {
  k.forEach((box)=>{
      if (box.isIntersecting) {
        box.target.classList.add('animate__animated', 'animate__fadeInLeft');
        box.target.style.opacity = 1;
      }
      else {
        box.target.classList.remove('animate__animated', 'animate__fadeInLeft');
        box.target.style.opacity = 0;
      }
  });
})

let AboutI = document.querySelector('.aboutImg');
observerAboutI.observe(AboutI);

// about text animation
let numT = 0.1;
document.querySelectorAll('.aboutText').forEach((el)=>{
    el.style.setProperty('animation-delay', `${numT}s`);
})

let observerAboutT = new IntersectionObserver((k) => {
  k.forEach((box)=>{
      if (box.isIntersecting) {
        box.target.classList.add('animate__animated', 'animate__fadeInRight');
        box.target.style.opacity = 1;
      }
      else {
        box.target.classList.remove('animate__animated', 'animate__fadeInRight');
        box.target.style.opacity = 0;
      }
  });
})

let AboutT = document.querySelector('.aboutText');
observerAboutT.observe(AboutT);

// skill ani1
let observer1 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('path1');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('path1');
          box.target.style.opacity = 0;
      }
  });
})

let circle1 = document.querySelectorAll('.ani1');
for (let i=0; i<circle1.length; i++) {
  observer1.observe(circle1[i]);
}

// skill ani2
let observer2 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('path2');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('path2');
          box.target.style.opacity = 0;
      }
  });
})

let circle2 = document.querySelectorAll('.ani2');
for (let i=0; i<circle2.length; i++) {
  observer2.observe(circle2[i]);
}

// skill ani3
let observer3 = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('path3');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('path3');
          box.target.style.opacity = 0;
      }
  });
})

let circle3 = document.querySelector('.ani3');
observer3.observe(circle3);

// projectImg
let numP = 0.5;
document.querySelectorAll('.proImg').forEach((el)=>{
    el.style.setProperty('animation-delay', `${numP}s`);
})

let observerP = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__fadeInDown');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__fadeInDown');
          box.target.style.opacity = 0;
      }
  });
})

let projectI = document.querySelectorAll('.proImg');
for (let i=0; i<projectI.length; i++) {
  observerP.observe(projectI[i]);
}

// projectText
let num = 0.4;
document.querySelectorAll('.project').forEach((el)=>{
    el.style.setProperty('animation-delay', `${num}s`);
})

let observerT = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('animate__animated', 'animate__fadeInUp');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('animate__animated', 'animate__fadeInUp');
          box.target.style.opacity = 0;
      }
  });
})

let projectT = document.querySelectorAll('.project');
for (let i=0; i<projectT.length; i++) {
  observerT.observe(projectT[i]);
}

// svg text animation
let observerS = new IntersectionObserver((e) => {
  e.forEach((box)=>{
      if (box.isIntersecting) {
          box.target.classList.add('txt');
          box.target.style.opacity = 1;
      }
      else {
          box.target.classList.remove('txt');
          box.target.style.opacity = 1;
      }
  });
})

let svG = document.querySelectorAll('svg text');
for (let i=0; i<svG.length; i++) {
  observerS.observe(svG[i]);
}

// project img change
const zoomBtn = document.querySelectorAll('.blackBox');
const closeBtn = document.querySelectorAll('.closeBtn');
const proCon = document.querySelectorAll('.proContent')
const proMini = document.querySelectorAll('.proInner ul img');
const proThumb = document.querySelectorAll('.proInner ul li');
let proImg = document.querySelectorAll('.proInner > img');

for (let i=0; i<zoomBtn.length; i++) {
  zoomBtn[i].addEventListener('click', function() {
    document.querySelector('header').style.display = 'none';
    document.querySelector('.swiper-pagination').style.display = "none";
    document.querySelector('.swiper-button-prev').style.display = "none";
    document.querySelector('.swiper-button-next').style.display = "none";
  });

  closeBtn[i].addEventListener('click', function() {
    if (window.innerWidth <= "768") {
      document.querySelector('header').style.display = 'flex';
      document.querySelector('.swiper-pagination').style.display = "flex";
      document.querySelector('.swiper-button-prev').style.display = "none";
      document.querySelector('.swiper-button-next').style.display = "none";
    }
    else {
      document.querySelector('header').style.display = 'flex';
      document.querySelector('.swiper-pagination').style.display = "flex";
      document.querySelector('.swiper-button-prev').style.display = "block";
      document.querySelector('.swiper-button-next').style.display = "block";
    }
  });
}

// 반응형 슬라이드 버튼 조정
window.onresize = function() {
  let innerWidth = window.innerWidth;
  if (innerWidth <= "768") {
    document.querySelector('.swiper-button-prev').style.display = "none";
    document.querySelector('.swiper-button-next').style.display = "none";
  }
  else {
    document.querySelector('.swiper-button-prev').style.display = "block";
    document.querySelector('.swiper-button-next').style.display = "block";
  }
}

for (let i=0; i<proThumb.length; i++) {
  if (i <= 5) {
    proThumb[i].addEventListener('click', function() {
      proImg[0].setAttribute('src', `img/project1-${i+1}.png`);
      proThumb[0].classList.remove('active');
      proThumb[1].classList.remove('active');
      proThumb[2].classList.remove('active');
      proThumb[3].classList.remove('active');
      proThumb[4].classList.remove('active');
      proThumb[5].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
  else if (6 <= i && i <= 7){
    proThumb[i].addEventListener('click', function() {
      proImg[1].setAttribute('src', `img/project2-${i-5}.png`);
      proThumb[6].classList.remove('active');
      proThumb[7].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
  else if (8 <= i && i <= 11) {
    proThumb[i].addEventListener('click', function() {
      proImg[2].setAttribute('src', `img/project3-${i-7}.png`);
      proThumb[8].classList.remove('active');
      proThumb[9].classList.remove('active');
      proThumb[10].classList.remove('active');
      proThumb[11].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
  else if (12 <= i && i <= 19) {
    proThumb[i].addEventListener('click', function() {
      proImg[3].setAttribute('src', `img/project4-${i-11}.png`);
      proThumb[12].classList.remove('active');
      proThumb[13].classList.remove('active');
      proThumb[14].classList.remove('active');
      proThumb[15].classList.remove('active');
      proThumb[16].classList.remove('active');
      proThumb[17].classList.remove('active');
      proThumb[18].classList.remove('active');
      proThumb[19].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
  else if (20 <= i && i <= 21) {
    proThumb[i].addEventListener('click', function() {
      proImg[4].setAttribute('src', `img/project5-${i-19}.png`);
      proThumb[20].classList.remove('active');
      proThumb[21].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
  else if (22 <= i && i <= 25) {
    proThumb[i].addEventListener('click', function() {
      proImg[5].setAttribute('src', `img/project6-${i-21}.png`);
      proThumb[22].classList.remove('active');
      proThumb[23].classList.remove('active');
      proThumb[24].classList.remove('active');
      proThumb[25].classList.remove('active');
      proThumb[i].classList.add('active');
    });
  }
}
