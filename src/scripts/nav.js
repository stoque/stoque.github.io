// Elementos auxiliares
var openMenu	  = document.querySelectorAll('.toggle'),
    closeMenu		= document.querySelectorAll('.close'),
		linkMenu		= document.querySelectorAll(".nav-bar > .item > .link"),
    navBar    	= document.querySelector('.nav-bar');


// Evento de click para chamar função menuAction
for (var i = 0; i < linkMenu.length; i++){
	openMenu[0].addEventListener('click', menuAction);
  closeMenu[0].addEventListener('click', menuAction);
	linkMenu[i].addEventListener('click', menuAction);
};

// Função que abre e fecha o menu
function menuAction() {
  if(navBar.classList.contains('-visible')){
  	navBar.classList.remove('-visible');
  }
  else {
  	navBar.classList.add('-visible');
  }
};
