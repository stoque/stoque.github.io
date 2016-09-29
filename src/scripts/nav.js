// Elementos auxiliares
var openMenu	  = document.querySelectorAll('.nav-toggle'),
    closeMenu		= document.querySelectorAll('.nav-close'),
		linkMenu		= document.querySelectorAll('.main-nav > .list > .item > .link'),
    navBar    	= document.querySelector('.main-nav');
    menuOverlay = document.querySelector('.nav-overlay');


// Evento de click para chamar função menuAction
for (var i = 0; i < linkMenu.length; i++){
	openMenu[0].addEventListener('click', menuAction);
  closeMenu[0].addEventListener('click', menuAction);
	linkMenu[i].addEventListener('click', menuAction);
	menuOverlay.addEventListener('click', menuAction);
};

// Função que abre e fecha o menu
function menuAction() {
  if(navBar.classList.contains('is-active')){
  	navBar.classList.remove('is-active');
    menuOverlay.classList.remove('is-active');
  }
  else {
  	navBar.classList.add('is-active');
  	menuOverlay.classList.add('is-active');
  }
};
