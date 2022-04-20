let navbar1 = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar1.classList.add('active');
}


let account = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () => {
  account.classList.add('active');
};

document.querySelector('#account-close').onclick = () =>{
  account.classList.remove('active');
};

let logingBtn = document.querySelector('.account-form .login-btn');
let registerBtn = document.querySelector('.account-form .register-btn');

logingBtn.onclick = () => {
  registerBtn.classList.remove('active');
  logingBtn.classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
  document.querySelector('.account-form .login-form').classList.add('active');
}

registerBtn.onclick = () => {
  logingBtn.classList.remove('active');
  registerBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
}

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
  grabCursor:true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};


document.querySelectorAll('.faq .row .box').forEach(acco => {
  acco.onclick = () =>{
    document.querySelectorAll('.faq .row .box').forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};