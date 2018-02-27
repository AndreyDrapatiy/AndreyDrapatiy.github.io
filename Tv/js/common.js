$(function () {


	var winIsSmall;

	function testWinSize() {
		winIsSmall = $(window).width() <= 1024; // boolean
	};


	$(window).on("load resize", testWinSize);

	$(window).on("load", function () {

		if (winIsSmall) {
		//if (jQuery.browser.mobile) {

			scrollBottomChat();
			initTouchHandler();

		} else {

			initCustomScrollbar();
			initDatepicker();

		}

	});


	// Scroll Bottom Chat

	function scrollBottomChat() {

		var d = $('.chat__body');
		d.scrollTop(d.prop("scrollHeight"));

	};



	// Init customs scroll

	function initCustomScrollbar() {

		$("#main-page-content-wrapper").mCustomScrollbar({
			axis: "yx",
			mouseWheel: {
				scrollAmount: "auto",
				preventDefault: true,
			},
			//documentTouchScroll: false,
			//contentTouchScroll: false,
			scrollInertia: 0,
			autoDraggerLength: true,
			advanced: {
				updateOnContentResize: true,
			},
			callbacks: {
				onInit: function () {
					//
				},

				onCreate: function () {
					//
				}

			},
			live: true
		});

		$("#etitor-scroll").mCustomScrollbar({
			axis: "y",
			mouseWheel: {
				scrollAmount: 100,
				preventDefault: true
			},
			scrollInertia: 0,
			autoDraggerLength: true,
			advanced: {
				updateOnContentResize: true
			},
			callbacks:{
				onScroll:function(){
					$(".editor__header").addClass("editor__header--scroll");
				},
				onTotalScrollBack: function(){
					$(".editor__header").removeClass("editor__header--scroll");
				}
			}
		});

		$(".chat__body").mCustomScrollbar({
			axis: "y",
			mouseWheel: {
				scrollAmount: 30,
				preventDefault: true
			},
			scrollInertia: 0,
			autoDraggerLength: true,
			advanced: {
				updateOnContentResize: true
			},
			callbacks: {
				onInit: function () {
					$('.chat__body').mCustomScrollbar('scrollTo', 'bottom');
				}
			}
		});


		$(".popup-titles-wrapper").mCustomScrollbar({
			axis: "y",
			mouseWheel: {
				scrollAmount: 100,
				preventDefault: true
			},
			scrollInertia: 0,
			autoDraggerLength: true,
			advanced: {
				updateOnContentResize: true
			},
			callbacks:{},
			live: true
		});

	};


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {
		37: 1,
		38: 1,
		39: 1,
		40: 1
	};

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	function disableScroll() {
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.onwheel = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		window.ontouchmove = preventDefault; // mobile
		document.onkeydown = preventDefaultForScrollKeys;
	}

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;
	}


	$(".panels-sortable").sortable({
		revert: false,
		axis: 'y',
		cursor: 'move',
		scroll: true,
		delay: 500,
		start: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				disableScroll();
			}
		},
		stop: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				enableScroll();
			}
		}
	});


	$('.panel__content-sortable').sortable({
		connectWith: '.panel__content-sortable',
		axis: 'y',
		helper: 'original',
		revert: false,
		cursor: 'move',
		scroll: true,
		delay: 500,
		placeholder: "ui-state-highlight",
		start: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				disableScroll();
			}
		},
		stop: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				enableScroll();
			}
		}
	});


	$(".ep__wrap-div-block").sortable({
		revert: false,
		axis: 'y',
		cursor: 'move',
		revert: false,
		scroll: true,
		delay: 500,
		start: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				disableScroll();
			}
		},
		stop: function( event, ui ) {
			if( winIsSmall ) {
			//if (jQuery.browser.mobile) {
				enableScroll();
			}
		}
	});
	



	function initDatepicker () {

		$("#search-video-date-1, #search-video-date-2").datepicker({

			monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
			dayNamesMin: ["Нд", "Пн", "Вв", "Ср", "Чт", "Пт", "Сб"],
			dateFormat: "dd/mm/yy",

			showOtherMonths: true,
			selectOtherMonths: true,
			firstDay: 1,

		});

	}

	
	var calendarCount = 1;

	$(window).on('load resize', function () {

		if ( $(window).width() <= 480 ) {

			initCalendarContent(480, 7, 0, 1, 8);

		} else if ( $(window).width() <= 667 ) {

			initCalendarContent(667, 3, 0, 1, 4);

		} else if ( $(window).width() <= 768 ) {

			initCalendarContent(768, 2, 0, 1, 3);

		} else if ( $(window).width() <= 1152 ) {

			initCalendarContent(1152, 2, 0, 1, 3);


		} else {

			initCalendarContent(1366, 4, 0, 1, 5);

		}

	});


	function initCalendarContent( screenSize, calendarCountNext_1, calendarCountNext_2, calendarCountPrev_1, calendarCountPrev_2 ) {

		$(".calendar-ajax-content").load("content/" + screenSize + "/calendar-content-1.html");

		$(".calendar-nav__next").click(function (e) {

			e.preventDefault();

			if (calendarCount >= calendarCountNext_1) {
				calendarCount = calendarCountNext_2;
			}

			++calendarCount;

			$(".calendar-ajax-content").load("content/" + screenSize + "/calendar-content-" + calendarCount + ".html", function () {

				console.log(calendarCount);
			});

		});

		$(".calendar-nav__prev").click(function (e) {

			e.preventDefault();

			if (calendarCount <= calendarCountPrev_1) {
				calendarCount = calendarCountPrev_2;
			}

			--calendarCount;

			$(".calendar-ajax-content").load("content/" + screenSize + "/calendar-content-" + calendarCount + ".html", function () {

				console.log(calendarCount);
			});

		});


	}









	$.validate({
		form : '#form-login'
	});





	$(".group-6 .input").keyup(function () {
		var box = $(this).val();
		var main = box.length * 100;
		var value = (main / 120);
		var count = 120 - box.length;

		if (box.length <= 120) {
			$('.title-edit__input-count').html(count);
		} else {
			//
		}

		return false;
	});




	$('.popup-error').on("click", function (e) {

		e.preventDefault();

		swal({
			//type: "error",
			title: "<b>Помилка:</b> сталась невідома помилка",
			showConfirmButton: false,
			html: true,
			allowEscapeKey: true,
			allowOutsideClick: true,
			showCloseButton: false,
			showCancelButton: false,
		});

	});






	$('.chronometry').mask("99:99:99", {
		placeholder: "00:00:00"
	});

	$('.mask-day-and-time').mask("99-99-99 99:99", {
		placeholder: "00-00-00 00:00"
	});



	$(document).on('mouseenter', ".tooltip-text", function () {
		var $this = $(this);

		if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
			$this.tooltip({
				title: $this.text(),
				placement: "top"
			});
			$this.tooltip('show');
		}

	});


	$('.chat-textarea').keydown(function (e) {
		var el = this;
		var chatBody = $(".chat__body");
		
		if ($(window).width() <= 667) {

			setTimeout(function () {

				el.style.cssText = 'height: auto; padding: 0';
		
				if (el.scrollHeight > "138") {

					el.style.cssText = 'height: 138px';
					el.className = "chat-textarea textarea overflow-visible";

					chatBody.css( "bottom", "188px" );

				} else {

					el.className = "chat-textarea textarea";
					el.style.cssText = 'height:' + el.scrollHeight + 'px';

					chatBody.css( "bottom", el.scrollHeight + "px" );
					scrollBottomChat();

				}

			}, 0);

		} else {

			setTimeout(function () {

				el.style.cssText = 'height: auto; padding: 0';
		
				if (el.scrollHeight > "138") {

					el.style.cssText = 'height: 138px';
					el.className = "chat-textarea textarea overflow-visible";

				} else {

					el.className = "chat-textarea textarea";
					el.style.cssText = 'height:' + el.scrollHeight + 'px';

				}

			}, 0);

		}

	});

	$('.select').niceSelect();

	$('.select').on("click", function (e) {

		$(this).find(".select--null").remove();

	});


	$('body').on("click", ".dropdown-trigger", function (e) {

		e.preventDefault();
		//event.stopPropagation();

		var dropdown = $(this).next('.dropdown');

		if (dropdown.hasClass('dropdown--open')) {
			dropdown.removeClass('dropdown--open');
		} else {
			$('.dropdown').removeClass('dropdown--open');
			dropdown.addClass('dropdown--open');
		}

		return false;

	});


	$('.sidebar-mobile-icon').on("click", function (e) {

		e.preventDefault();
		//event.stopPropagation();

		var dropdown = $(this).parent('.sidebar').children('.sidebar-user-avatar').children('.dropdown');

		if (dropdown.hasClass('dropdown--open')) {
			dropdown.removeClass('dropdown--open');
		} else {
			$('.dropdown').removeClass('dropdown--open');
			dropdown.addClass('dropdown--open');
		}

		return false;

	});
	


	$(document).click(function () {
		$('.dropdown').removeClass('dropdown--open');
	});

	$('.chat-trigger').on("click", function (e) {

		e.preventDefault();

		$(this).toggleClass("chat-trigger--open");

		$("#global-chat").toggleClass("chat--open");

		$("body").addClass("noscroll");

	});

	$('.chat-trigger__close').on("click", function (e) {

		e.preventDefault();

		$('.chat-trigger').removeClass("chat-trigger--open");

		$("#global-chat").removeClass("chat--open");

		$("body").removeClass("noscroll");

	});




	$('.sidebar').on("click", ".btn-sidebar-open", function (e) {

		e.preventDefault();

		$(this).removeClass("btn-sidebar-open").addClass("btn-sidebar-close");

		if (winIsSmall) {
		//if (jQuery.browser.mobile) {
			$("body").addClass("noscroll");
		}

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (editor.hasClass("editor--open")) {

			sidebar.addClass("sidebar--open");
			editor.addClass("editor--sidebar-open");

			if (editor.hasClass("editor--width-md")) {
				content.removeClass("content--editor--md-open").addClass("content--sidebar-and-editor-md-open");

			} else if (editor.hasClass("editor--width-xl")) {

				editor.removeClass("editor--width-xl").addClass("editor--sidebar-open-and-width-xl");

			} else {
				content.removeClass("content--editor--xs-open").addClass("content--sidebar-and-editor-xs-open");
			}

		} else {

			sidebar.addClass("sidebar--open");
			content.addClass("content--sidebar-open");

		}

	});


	$('.sidebar').on("click", ".btn-sidebar-close", function (e) {

		e.preventDefault();

		$(this).removeClass("btn-sidebar-close").addClass("btn-sidebar-open");

		if (winIsSmall) {
		//if (jQuery.browser.mobile) {
			$("body").removeClass("noscroll");
		}

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (editor.hasClass("editor--open")) {

			sidebar.removeClass("sidebar--open");
			editor.removeClass("editor--sidebar-open");

			if (editor.hasClass("editor--width-md")) {

				content.removeClass("content--sidebar-and-editor-md-open content--editor--xs-open").addClass("content--editor--md-open");

			} else if (editor.hasClass("editor--sidebar-open-and-width-xl")) {

				editor.removeClass("editor--sidebar-open-and-width-xl").addClass("editor--width-xl");

			} else {

				content.removeClass("content--sidebar-and-editor-xs-open").addClass("content--editor--xs-open");

			}

		} else {

			sidebar.removeClass("sidebar--open");
			content.removeClass("content--sidebar-open");

		}

	});



	$('.btn-editor-open').on("click", function (e) {

		e.preventDefault();

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (sidebar.hasClass("sidebar--open")) {

			editor.addClass("editor--open editor--width-xs");
			editor.addClass("editor--sidebar-open");
			content.removeClass("content--sidebar-open").addClass("content--sidebar-and-editor-xs-open");

			$("body").addClass("noscroll");

		} else {

			editor.addClass("editor--open editor--width-xs");
			content.addClass("content--editor--xs-open");

			$("body").addClass("noscroll");
		}

	});


	$('.btn-editor-close').on("click", function (e) {

		e.preventDefault();

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (sidebar.hasClass("sidebar--open")) {

			if (editor.hasClass("editor--width-md")) {

				editor.removeClass("editor--open editor--sidebar-open editor--width-md");
				content.removeClass("content--sidebar-and-editor-md-open").addClass("content--sidebar-open");


				editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");

			} else if (editor.hasClass("editor--width-xl") || editor.hasClass("editor--sidebar-open-and-width-xl")) {

				editor.removeClass("editor--open editor--sidebar-open-and-width-xl editor--sidebar-open");
				content.removeClass("content--editor--xl-open").addClass("content--sidebar-open");


				editor.find(".btn-editor-width-md").removeClass("btn-editor-width-md").addClass("btn-editor-width-xs");
				editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");

			} else {

				editor.removeClass("editor--open editor--width-xs editor--sidebar-open");
				content.removeClass("content--sidebar-and-editor-xs-open").addClass("content--sidebar-open");


				$("body").removeClass("noscroll");
			}


		} else {

			if (editor.hasClass("editor--width-md")) {

				editor.removeClass("editor--open editor--width-md");
				content.removeClass("content--editor--md-open");


				editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");

			} else if (editor.hasClass("editor--width-xl")) {

				editor.removeClass("editor--open editor--width-xl");
				content.removeClass("content--editor--xl-open");


				editor.find(".btn-editor-width-md").removeClass("btn-editor-width-md").addClass("btn-editor-width-xs");
				editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");

			} else {

				editor.removeClass("editor--open editor--width-xs");
				content.removeClass("content--editor--xs-open");

				$("body").removeClass("noscroll");
			}


		}

	});


	$('.editor__header').on("click", ".btn-editor-width-xs", function (e) {

		e.preventDefault();

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (sidebar.hasClass("sidebar--open")) {

			editor.removeClass("editor--width-md").addClass("editor--width-xs");
			content.removeClass("content--sidebar-and-editor-md-open").addClass("content--sidebar-and-editor-xs-open");

		} else {

			editor.removeClass("editor--width-md").addClass("editor--width-xs");
			content.removeClass("content--editor--md-open").addClass("content--editor--xs-open");

		}

		editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");


	});


	$('.editor__header').on("click", ".btn-editor-width-md", function (e) {

		e.preventDefault();

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (editor.hasClass("editor--width-xl") || editor.hasClass("editor--sidebar-open-and-width-xl")) {

			editor.find(".btn-editor-width-md").removeClass("btn-editor-width-md").addClass("btn-editor-width-xs");
			editor.find(".btn-editor-width-xl").removeClass("btn-editor-width-xl").addClass("btn-editor-width-md");

		} else {

			$(this).removeClass("btn-editor-width-md").addClass("btn-editor-width-xl");

		}


		//////////////////////////////////////////////////////////////////////////////////////


		if (sidebar.hasClass("sidebar--open")) {

			if (editor.hasClass("editor--sidebar-open-and-width-xl")) {

				editor.removeClass("editor--sidebar-open-and-width-xl").addClass("editor--width-md");
				content.removeClass("content--editor--xl-open").addClass("content--sidebar-and-editor-md-open");


			} else {

				editor.removeClass("editor--width-xs").addClass("editor--width-md");
				content.removeClass("content--sidebar-and-editor-xs-open").addClass("content--sidebar-and-editor-md-open");

			}



		} else if (editor.hasClass("editor--width-xl")) {

			editor.removeClass("editor--width-xl").addClass("editor--width-md");
			content.removeClass("content--editor--xl-open").addClass("content--editor--md-open");

		} else {

			editor.removeClass("editor--width-xs").addClass("editor--width-md");
			content.removeClass("content--editor--xs-open").addClass("content--editor--md-open");

		}



	});



	$('.editor__header').on("click", ".btn-editor-width-xl", function (e) {

		e.preventDefault();

		var sidebar = $('.sidebar');
		var content = $('.content');
		var editor = $('.editor');

		if (sidebar.hasClass("sidebar--open")) {

			editor.removeClass("editor--width-md").addClass("editor--sidebar-open-and-width-xl");
			content.removeClass("content--sidebar-and-editor-md-open").addClass("content--editor--xl-open");

		} else {

			editor.removeClass("editor--width-md").addClass("editor--width-xl");
			content.removeClass("content--editor--md-open").addClass("content--editor--xl-open");

		}

		editor.find(".btn-editor-width-xs").removeClass("btn-editor-width-xs").addClass("btn-editor-width-md");

	});





	$('.panel__actions-collaps').click(function (e) {

		e.preventDefault();

		var panelBody = $(this).closest(".panel").children(".panel__body");


		if ($(this).hasClass("panel__actions-collaps")) {

			$(this).removeClass("panel__actions-collaps").addClass("panel__actions-expand");

			panelBody.slideUp(200);


		} else {

			$(this).removeClass("panel__actions-expand").addClass("panel__actions-collaps");

			panelBody.slideDown(200);

		}

	});


	$('.editor-panel__actions-collaps').on("click", function (e) {

		e.preventDefault();

		var panelBody = $(this).closest(".editor-panel").children(".editor-panel__body");


		if ($(this).hasClass("editor-panel__actions-collaps")) {

			$(this).removeClass("editor-panel__actions-collaps").addClass("editor-panel__actions-expand");

			panelBody.slideUp(200);

		} else {

			$(this).removeClass("editor-panel__actions-expand").addClass("editor-panel__actions-collaps");

			panelBody.slideDown(200);

		}

	});



	$('.block-collapse__btn--collaps').on("click", function (e) {

		e.preventDefault();

		var block = $(this).closest(".block-collapse");
		var blockBody = $(this).closest(".block-collapse").children(".block-collapse__body");


		if ($(this).hasClass("block-collapse__btn--collaps")) {

			$(this).removeClass("block-collapse__btn--collaps").addClass("block-collapse__btn--expand");

			block.removeClass("block-collapse--collaps").addClass("block-collapse--expand");
			blockBody.slideUp(200);

		} else {

			$(this).removeClass("block-collapse__btn--expand").addClass("block-collapse__btn--collaps");

			block.removeClass("block-collapse--expand").addClass("block-collapse--collaps");

			blockBody.slideDown(200);

		}

	});

	$(".panel-header__switch input[type='checkbox']").change(function () {

		var panelBody = $(this).closest(".panel").children(".panel__body");

		if (this.checked) {

			panelBody.removeClass("panel__body--active").addClass("panel__body--disable");

		} else {

			panelBody.removeClass("panel__body--disable").addClass("panel__body--active");

		}
	});



	$('.titles__btn-list').on("click", function (e) {

		e.preventDefault();

		var titleItem = $(".title-item");
		var titleWrapper = $(".titles-wrapper");

		titleItem.removeClass("title-item--card").addClass("title-item--list");

		titleWrapper.addClass("titles-wrapper--list");

	});


	$('.titles__btn-cards').on("click", function (e) {

		e.preventDefault();

		var titleItem = $(".title-item");
		var titleWrapper = $(".titles-wrapper");

		titleItem.removeClass("title-item--list").addClass("title-item--card");

		titleWrapper.removeClass("titles-wrapper--list");

	});




	$('.popup-titles__btn-list').on("click", function (e) {

		e.preventDefault();

		var popuptitleItem = $(".popup-title-item");
		var popuptitleWrapper = $(".popup-titles-wrapper");

		popuptitleItem.removeClass("popup-title-item--card").addClass("popup-title-item--list");

		popuptitleWrapper.addClass("popup-titles-wrapper--list");

	});


	$('.popup-titles__btn-cards').on("click", function (e) {

		e.preventDefault();

		var popuptitleItem = $(".popup-title-item");
		var popuptitleWrapper = $(".popup-titles-wrapper");

		popuptitleItem.removeClass("popup-title-item--list").addClass("popup-title-item--card");

		popuptitleWrapper.removeClass("popup-titles-wrapper--list");

	});


	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		//focus: '#name',

		fixedContentPos: true,
		fixedBgPos: true,

		//overflowY: 'hidden',

		midClick: true,
		removalDelay: 300,

		mainClass: 'my-mfp-zoom-in',

		callbacks: {
			open: function () {

				if( winIsSmall ){
				//if (jQuery.browser.mobile) {
					$("body").addClass("noscroll");
				}

			},

			close: function () {

				if( winIsSmall ){
				//if (jQuery.browser.mobile) {
					$("body").removeClass("noscroll");
				}

			}
		},
	});


	$(".custom-file-upload > input").change(function (e) {
		$valueDom = $(this).closest('.custom-file-upload').find('.custom-file-upload__name');

		var filename = $('.custom-file-upload').data('label');
		if (e.target) {
			var fullPath = e.target.value;
			filename = fullPath.replace(/^.*[\\\/]/, '');
			$valueDom.text(filename);
		}
	});



	function touchHandler(event) {
		var self = this;
		var touches = event.changedTouches,
			first = touches[0],
			type = "";

		switch (event.type) {
			case "touchstart":
				type = "mousedown";
				window.startY = event.pageY;
				break;
			case "touchmove":
				type = "mousemove";
				break;
			case "touchend":
				type = "mouseup";
				break;
			default:
				return;
		}


		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/ , null);

		first.target.dispatchEvent(simulatedEvent);

		var scrollables = [];
		var clickedInScrollArea = false;
		// check if any of the parents has is-scollable class
		var parentEls = jQuery(event.target).parents().map(function () {
			try {
				if (jQuery(this).hasClass('is-scrollable')) {
					clickedInScrollArea = true;
					// get vertical direction of touch event
					var direction = (window.startY < first.clientY) ? 'down' : 'up';
					// calculate stuff... :o)
					if (((jQuery(this).scrollTop() <= 0) && (direction === 'down')) || ((jQuery(this).height() <= jQuery(this).scrollTop()) && (direction === 'up'))) {

					} else {
						scrollables.push(this);
					}
				}
			} catch (e) {}
		});

		// if not, prevent default to prevent bouncing
		if ((scrollables.length === 0) && (type === 'mousemove')) {
			//event.preventDefault();
		}

	}

	function initTouchHandler() {
		document.addEventListener("touchstart", touchHandler, true);
		document.addEventListener("touchmove", touchHandler, true);
		document.addEventListener("touchend", touchHandler, true);
		document.addEventListener("touchcancel", touchHandler, true);
	}

});