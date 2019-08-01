//AUTOPLAY: Set "var autoplay = true" and a slidetime time:
var autoplay, slidetime;
if (autoplay === true){var start = setInterval(nextSlide, slidetime);}
 
//Button Next Slide

function nextSlide(){
  var active = document.querySelectorAll('li.active')[0],
        activeslide = document.querySelectorAll('.slides div.active')[0],
        number = active.dataset.link.split("-",2)[1],
        length = document.querySelectorAll(".slide-controller li").length;

  active.className = active.className.replace('active', '');
  activeslide.className = activeslide.className.replace('active', '');

  if( number < length){
      active.nextElementSibling.className += ' active';
      activeslide.nextElementSibling.className += ' active';
  } else {
      document.querySelectorAll(".slide-controller li")[0].className += ' active';
      document.getElementById("slide-1").className += ' active';
  }
  clearInterval(start);
	if (autoplay === true){
			start = setInterval(nextSlide, slidetime);
	}
  
}
const button_next = document.querySelectorAll(".arrow-button-right")[0];
button_next.addEventListener('click', nextSlide);



//Button Previous Slide

function previousSlide(){
  var active = document.querySelectorAll('li.active')[0],
        activeslide = document.querySelectorAll('.slides div.active')[0],
        number = active.dataset.link.split("-",2)[1],
        length = document.querySelectorAll(".slide-controller li").length;

  active.className = active.className.replace('active', '');
  activeslide.className = activeslide.className.replace('active', '');

  if( number > length){
      active.previousElementSibling.className += ' active';
      activeslide.previousElementSibling.className += ' active';
  } else {
      document.querySelectorAll(".slide-controller li")[0].className += ' active';
      document.getElementById("slide-1").className += ' active';
  }
   clearInterval(start);
	if (autoplay === true){
			start = setInterval(nextSlide, slidetime);
	}
}
const button_previous = document.querySelectorAll(".arrow-button-left")[0];
button_previous.addEventListener('click', previousSlide);



// Slide Circle Indicators

clicks = document.querySelectorAll(".slide-controller li");
for (each of clicks) {

	each.addEventListener('click', (e) => {
			var el = e.target,
					active = document.querySelectorAll('.active');
			for (each of active) {
					 each.className = each.className.replace('active', '');
			}
			el.className += ' active';
			document.getElementById(el.dataset.link).className += ' active';
  clearInterval(start);
	if (autoplay === true){
			start = setInterval(nextSlide, slidetime);
	}
	});

}


