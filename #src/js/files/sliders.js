//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) { }

// Сюда пишем класс нашего слайдера и меняем переменную
let sliderBg = new Swiper('.slider-bg', {
	// effect: 'fade',
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0, //отступ в пикселях
	autoHeight: true,
	speed: 2000,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true, //циклично
	// slidesPerGroup: 3, //по 3 слайда
	// slideToClickedSlide: true, //клик по слайду
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.slider-bg-pagination-fraction',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="rzdClass"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let directSlDescp = new Swiper('.directSlDescp', {
	// effect: 'fade',
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0, //отступ в пикселях
	autoHeight: true,
	speed: 2000,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true, //циклично
	// slidesPerGroup: 3, //по 3 слайда
	// slideToClickedSlide: true, //клик по слайду
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.directSlDescp-pagination-fraction',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="rzdClass"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	// Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let directSlImg = new Swiper('.directSlImg', {
	// effect: 'fade',
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },

	observer: true,
	observeParents: true,
	slidesPerView: 1.3,
	spaceBetween: 34, //отступ в пикселях
	autoHeight: true,
	speed: 2000,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true, //циклично
	// slidesPerGroup: 3, //по 3 слайда
	// slideToClickedSlide: true, //клик по слайду
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.swiper-paggination',
	//	clickable: true,
	//},
	// Arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 8,
			autoHeight: true,
		},
		346: {
			slidesPerView: 1.2,
			spaceBetween: 10,
			autoHeight: true,
		},
		415: {
			slidesPerView: 1.5,
			spaceBetween: 10,
			autoHeight: true,
		},
		516: {
			slidesPerView: 2,
			spaceBetween: 10,
			autoHeight: true,
		},
		769: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		811: {
			slidesPerView: 1.3,
			spaceBetween: 34,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

directSlDescp.controller.control = directSlImg;
directSlImg.controller.control = directSlDescp;