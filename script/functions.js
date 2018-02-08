var slideComponents1 = null;
var slideComponents2 = null;
var slide1open = false;
var slide2open = false;

function SlideNext (_id) {
	var slideComponent = document.getElementById(_id);
	var componentsArray = [].slice.call(slideComponent.children);
	componentsArray.push(componentsArray.shift());
	slideComponent.innerHTML = "";
	for(var i = 0; componentsArray.length > 1; i++) {
		slideComponent.innerHTML += "<article class=\"ficha\">" + componentsArray[i].innerHTML + "</article>";
	}
}

function SlideBack (_id) {
	var slideComponent = document.getElementById(_id);
	var componentsArray = [].slice.call(slideComponent.children);
	componentsArray.unshift(componentsArray.pop());
	slideComponent.innerHTML = "";
	for(var i = 0; componentsArray.length > 1; i++) {
		slideComponent.innerHTML += "<article class=\"ficha\">" + componentsArray[i].innerHTML + "</article>";
	}
}

function DropDownMenuCtrl () {
	var navMenu = document.getElementById('nav-menu');
	if (navMenu.classList.contains('hideMenu')) {
		navMenu.classList.remove('hideMenu');
		navMenu.classList.add('showMenu');
	} else {
		navMenu.classList.remove('showMenu');
		navMenu.classList.add('hideMenu');
	}
}

function CtrlDestaquesMobile (_id) {
	if(_id=="SlideDestaques") {
		if(slide1open) {
			HideSlides(_id);
			slide1open = false;
			document.getElementById('bt-destaques-mobile-1').innerHTML = "Carregar mais " + (slideComponents1.length-2) + " destaques";
		} else {
			AllVisible(_id);
			slide1open = true;
			document.getElementById('bt-destaques-mobile-1').innerHTML = "Recolher lista";
		}
	} else if(_id=="SlideDestaques2") {
		if(slide2open) {
			HideSlides(_id);
			slide2open = false;
			document.getElementById('bt-destaques-mobile-2').innerHTML = "Carregar mais " + (slideComponents2.length-2) + " destaques";
		} else {
			AllVisible(_id);
			slide2open = true;
			document.getElementById('bt-destaques-mobile-2').innerHTML = "Recolher lista";
		}
	}
}

function Start() {
	var mediaMatch = window.matchMedia("(max-width: 760px)")
	mediaMatch.addListener(Start);

	if(mediaMatch.matches) {
		slideComponents1 = document.getElementById('SlideDestaques').children;
		slideComponents2 = document.getElementById('SlideDestaques2').children;
		document.getElementById('bt-destaques-mobile-1').innerHTML = "Carregar mais " + (slideComponents1.length-2) + " destaques";
		document.getElementById('bt-destaques-mobile-2').innerHTML = "Carregar mais " + (slideComponents2.length-2) + " destaques";

		HideSlides("SlideDestaques");
		HideSlides("SlideDestaques2");
	} else {
		AllVisible("SlideDestaques");
		AllVisible("SlideDestaques2");
	}
}

function AllVisible(_id) {
	if (_id=="SlideDestaques") {
		for (var i = 0; slideComponents1.length > i; i++) {
			slideComponents1[i].style.display = "block";
		}
	} else if(_id=="SlideDestaques2") {
		for (var i = 1; slideComponents2.length > i; i++) {
			slideComponents2[i].style.display = "block";
		}
	}
}

function HideSlides(_id) {
	if (_id=="SlideDestaques") {
		for (var i = 2; slideComponents1.length > i; i++) {
			slideComponents1[i].style.display = "none";
		}
	} else if(_id=="SlideDestaques2") {
		for (var i = 2; slideComponents2.length > i; i++) {
			slideComponents2[i].style.display = "none";
		}
	}
}