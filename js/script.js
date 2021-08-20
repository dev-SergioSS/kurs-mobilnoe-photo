// webp

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});


let body = document.querySelector('body')
let iconMenu = document.querySelector(".menu__icon");
let menuList = document.querySelector(".menu__list");
let menuLink = document.querySelectorAll(".menu__link");

if (iconMenu != null) {
	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle("active");
		menuList.classList.toggle("active");
		body.classList.toggle('lock')
	});
};

for (link of menuLink) {
	link.addEventListener('click', () => {
		iconMenu.classList.remove("active");
		menuList.classList.remove("active");
		body.classList.remove('lock')
	})
}

// больше о авторе

let aboutAuthor = document.querySelector('.author__about');
let moreInfo = document.querySelector('.author__more-info')

moreInfo.addEventListener('click', () => {
	moreInfo.style.display = 'none'
	aboutAuthor.style.height = 'auto'
	aboutAuthor.style.paddingBottom = '0'
})




let programName = document.querySelectorAll('.program__item-head')
let programNameWraper = document.querySelectorAll('.program__item-wrap')

for (let item of programName) {
	item.addEventListener('click', (el) => {

		let parent = el.target.closest('.program__item-wrap')

		if (parent.classList.contains('open')) {
			console.log("object");
			parent.classList.remove('open')
		}
		else {
			for (let itemWraper of programNameWraper) {
				itemWraper.classList.remove('open')
			}
			parent.classList.add('open')
		}


	})
}