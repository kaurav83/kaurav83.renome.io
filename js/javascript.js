(function() {
			'use strict';
		/* Drop-down-menu */
		var menuElem = document.getElementById('sweeties');
		var titleElem = menuElem.querySelector('.title');

		titleElem.onclick = function() {
			menuElem.classList.toggle('open');
		};

		/* Slider */
		var largeImg = document.getElementById('largeImg');

    var thumbs = document.getElementById('thumbs');

    thumbs.onclick = function(e) {
      var target = e.target;

      while (target != this) {

        if (target.nodeName == 'A') {
          showThumbnail(target.href, target.title);
          return false;
        }

        target = target.parentNode;
      }

    };

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
    }


    // unload 
    var imgs = thumbs.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      var url = imgs[i].parentNode.href;
      var img = document.createElement('img');
      img.src = url;
    }

    /* to up image */
    var home = document.getElementsByClassName("ho");
		console.log(home);
		var upTo = function() {
			home[0].style.zIndex = "1";
			home[0].style.boxShadow = "0 0 3px 1px #ccc";
			home[0].style.border = "5px solid #fff";

			home[1].style.zIndex = "0";
			home[1].style.boxShadow = "none";
			home[1].style.border = "none";
		};

		var upDown = function() {
			home[1].style.zIndex = "1";
			home[1].style.boxShadow = "0 0 3px 1px #ccc";
			home[1].style.border = "5px solid #fff";

			home[0].style.zIndex = "0";
			home[0].style.boxShadow = "none";
			home[0].style.border = "none";
		};

		/* Middle images */
		var upMiddle = function() {
			home[2].style.zIndex = "1";
			home[2].style.boxShadow = "0 0 3px 1px #ccc";
			home[2].style.border = "5px solid #fff";

			home[3].style.zIndex = "0";
			home[3].style.boxShadow = "none";
			home[3].style.border = "none";
		};

		var downMiddle = function() {
			home[3].style.zIndex = "1";
			home[3].style.boxShadow = "0 0 3px 1px #ccc";
			home[3].style.border = "5px solid #fff";

			home[2].style.zIndex = "0";
			home[2].style.boxShadow = "none";
			home[2].style.border = "none";
		};

		var upBottom = function() {
			home[4].style.zIndex = "1";
			home[4].style.boxShadow = "0 0 3px 1px #ccc";
			home[4].style.border = "5px solid #fff";

			home[5].style.zIndex = "0";
			home[5].style.boxShadow = "none";
			home[5].style.border = "none";
		};

		var downBottom = function() {
			home[5].style.zIndex = "1";
			home[5].style.boxShadow = "0 0 3px 1px #ccc";
			home[5].style.border = "5px solid #fff";

			home[4].style.zIndex = "0";
			home[4].style.boxShadow = "none";
			home[4].style.border = "none";
		};

		var footUp = function() {
			home[6].style.zIndex = "1";
			home[6].style.boxShadow = "0 0 3px 1px #ccc";
			home[6].style.border = "5px solid #fff";

			home[7].style.zIndex = "0";
			home[7].style.boxShadow = "none";
			home[7].style.border = "none";
		};

		var footDown = function() {
			home[7].style.zIndex = "1";
			home[7].style.boxShadow = "0 0 3px 1px #ccc";
			home[7].style.border = "5px solid #fff";

			home[6].style.zIndex = "0";
			home[6].style.boxShadow = "none";
			home[6].style.border = "none";
		};

		home[0].addEventListener("click", upTo);	
		home[1].addEventListener("click", upDown);
		
		home[2].addEventListener("click", upMiddle);
		home[3].addEventListener("click", downMiddle);

		home[4].addEventListener("click", upBottom);
		home[5].addEventListener("click", downBottom);

		home[6].addEventListener("click", footUp);
		home[7].addEventListener("click", footDown);

		/* Script for pop-up images */
		
var thumb = document.getElementById('thumb');

var block_view = document.getElementById('block_view');

var title_galery = document.querySelector('.title_galery');
console.log(title_galery);
thumb.onclick = function(event) {
    var el = event.target;

    while(el != this) {
        if (el.nodeName == 'A') {
            showThumb(el.href, el.title);
            return false;
        }

        el = el.parentNode;
        
        title_galery.classList.add('moveImg');

    }
};

    function showThumb(href, title) {
        block_view.src = href;
        block_view.alt = title;
    }

var imgs2 = thumb.getElementsByTagName('img');
for (var i = 0; i < imgs2.length; i++) {
    var url = imgs2[i].parentNode.href;
    var img = document.createElement('img');
    img.src = url;
}

/*Button top*/

	}) ();