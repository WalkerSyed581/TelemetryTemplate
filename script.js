var headerHeight = document.querySelector('.headerSection').offsetHeight;
var scrollingNav = document.querySelector('header');

window.onscroll = function(){
	if(document.documentElement.scrollTop >= (headerHeight - scrollingNav.offsetHeight)){
		scrollingNav.style.backgroundColor = "#ff9185";
		scrollingNav.classList.add("scrolled");
		
	} else if(document.documentElement.scrollTop < (headerHeight - scrollingNav.offsetHeight)){
		scrollingNav.style.backgroundColor = "transparent";
		scrollingNav.classList.remove("scrolled");
	}
}

var switchableLinks = document.querySelectorAll('.nav a');
switchableLinks.forEach( 
	function(currentValue, currentIndex, listObj) { 
	  currentValue.onclick = function(e){
		e.preventDefault();
		var clickedElement = e.originalTarget;
		if(clickedElement.classList.contains("active")){
			return;
		} else{
			var activeLink = document.querySelector('.nav a.active');
			activeLink.classList.remove("active");
			currentValue.classList.add("active");

			var switchSections = document.querySelectorAll('.switchable-cards .card');
			var activeSection = document.querySelector('.switchable-cards .card:not(.hide)');
			activeSection.style.opacity = "0";
			setTimeout(function(){
				activeSection.classList.add("hide");
				switchSections[currentIndex].style.opacity = "0";
				switchSections[currentIndex].classList.remove("hide");
				setTimeout(function(){
					switchSections[currentIndex].style.opacity = "1";
				},150)
			},150)
		   
		}
	  }
	},
	'myThisArg'
);

var breadcrumbButton = document.querySelector('.breadcrumb');
var navArea = document.querySelector('#navPanel');
breadcrumbButton.addEventListener('click',function(){
	navArea.classList.add("visible");
},false);

var hideButton = document.querySelector('.nav-hide-button');
hideButton.addEventListener('click',function(){
	navArea.classList.remove('visible');
},false);

document.addEventListener('click',function(e){
	if(e.target !== navArea && navArea.classList.contains("visible")){
		navArea.classList.remove('visible');
	}
},true);

window.onload = function(){
	let progressBars = document.querySelectorAll(".meter > span");
	let randomNumbers = new this.Array(5);
	for(var i = 0;i < randomNumbers.length;i++){
		randomNumbers[i] = Math.floor(Math.random() * 100 + 1);
	}
	progressBars.forEach( 
		function(currentValue, currentIndex, listObj) { 
			currentValue.style.backgroundImage = "linear-gradient(to right,var(--definingColor)"+ 
												randomNumbers[currentIndex] + "%,#555 " + randomNumbers[currentIndex]+"%)";
			currentValue.parentElement.insertAdjacentHTML("afterend","<p class='percent'>" 
															+ randomNumbers[currentIndex] + "%</p>");
		},
		'myThisArg'
	);

	var dropdownElement= document.querySelector('.dropdown');
	var dropdownList = document.querySelector('.dropdown .dropdownArea');
	dropdownElement.addEventListener("mouseenter", function(e){
		dropdownList.style.display = "block";
		dropdownList.style.opacity = 1;
	},false);
	dropdownElement.addEventListener("mouseleave",function(e){
		setTimeout(function(){
			dropdownList.style.display = "none";
			dropdownList.style.opacity = 0;
		},200);
	},false);
}

