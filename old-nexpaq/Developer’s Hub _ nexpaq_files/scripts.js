/*
(function ($, root, undefined) {

	$(function () {

		'use strict';

		// header-menu
		document.getElementById('btn-header-menu-close').addEventListener('click', toggleHeaderMenu);
		document.getElementById('btn-header-menu-open').addEventListener('click', toggleHeaderMenu);

	});

	// Header functions
	function toggleHeaderMenu(e) {
		e.preventDefault();
		if(this.classList.contains('btn-header-menu-open')) {
			document.getElementById('main-menu').classList.add('open');
			document.getElementById('btn-header-menu-close').classList.remove('hidden');
			this.classList.add('hidden');
		} else {
			document.getElementById('main-menu').classList.remove('open');
			document.getElementById('btn-header-menu-open').classList.remove('hidden');
			this.classList.add('hidden');
		}

		return false;
	}

})(jQuery, this);
*/

/*
function preloadImages(images_list) {
	var img;
	for (var i = 0; i < images_list.length; i++) {
		img=document.createElement('img');
		img.src=images_list[i];
		//$("<img />").attr("src", images_list[i]);
	}
}
preloadImages(['img/city/2X.jpg', 'img/city/3X.jpg']);
function subSlider() {
  var $slider = document.getElementById('sub-slider'),
      $slides = $slider.children;

  for(var i=0; i<$slides.length; i++) {
    if($slides[i].classList.contains('active')) {
      if(i != $slides.length - 1) {
        $slides[i].classList.remove('active');
        $slides[i + 1].classList.add('active');
      } else {
        $slides[i].classList.remove('active');
        $slides[0].classList.add('active');
      }
      break;
    }
  }
}
*/
function subSliderControllerButtonHandler(e) {
  var target = this.dataset.target,
      $slider = document.getElementById('sub-slider'),
      $slides = $slider.children,
      sub_controller_buttons = document.getElementById('sub-slider-controller').children;

  for(var i=0; i<$slides.length; i++) {
    sub_controller_buttons[i].classList.remove('active');

    if($slides[i].id == target) {
      $slides[i].classList.add('active');
    } else {
      $slides[i].classList.remove('active');
    }
  }
  this.classList.add('active');
}
function transformSvgLines() {
  function getLineLength(el){
      var x1 = el.attr('x1');
      var x2 = el.attr('x2');
      var y1 = el.attr('y1');
      var y2 = el.attr('y2');
      var lineLength = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
      return lineLength;
  }
  var speed = 7; // 7 per second
  var lines_animation_duration = [];
  var order = {
    3: {
      30: 25,
      32: 0
    },
    24: {
      29: 22,
      21: 40
    },
    'delay': 12*1000,
    19: {
      31: {
        38: 20
      }
    },
    1: {
      41: 23
    }
  };

  var $lines = $("#city-lines line").toArray(),
      j = 0;
  for(var i=0; i<$lines.length; i++) {
    var length = getLineLength($($lines[i]));
    if(length > 4) {
      $lines[i].id = 'line-' + j++;
      $lines[i].style.strokeDasharray = '7,'.repeat(length/7)+(parseInt(length/7)%2!==0?length:'7,'+length);
      $lines[i].setAttribute('data-length',length);
      //$lines[i].style.strokeDashoffset = length;
      lines_animation_duration[j] = length/speed;
      $lines[i].style.transitionDuration = lines_animation_duration[j]+'s';
      console.log($lines[i], length);
    } else {
      $lines[i].style.display = 'none';
    }
  }

  // setting animation delays
  var lines_stack = [[order, 0]],
      delay = 0;
  // while(lines_stack.length > 0) {
  //   if(typeof order == 'object') {
  //
  //   }
  // }
}
