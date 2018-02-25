/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

let currentWidth = document.getElementsByClassName('carousel')[0].offsetWidth;// текущий размер одного слайдера в браузере
let slider; //тут хранится текущий слайдер над которым водят указателем

document.addEventListener('mousedown', dragStart);


for (let currentSlider = document.getElementsByClassName('carousel'), j = 0, lj = currentSlider.length; j < lj; j++) {

    currentSlider[j].getElementsByClassName('content')[0].addEventListener('mousedown', function () {
        return slider = this;
    });

    for (let i = 0; i < currentSlider[j].getElementsByTagName('img').length; i++) {
        //добывим индикаторы к слайдерам в от количества картинок в них
        currentSlider[j].getElementsByTagName('ul')[0].innerHTML += '<li class="indicator" id="' + i + '"></li>';
        currentSlider[j].getElementsByTagName('li')[0].classList.add('active');
    }

}

for (let image = document.getElementsByTagName('img'), j = 0, lj = image.length; j < lj; j++) {
    image[j].setAttribute('width', currentWidth + 'px');
}


function setIndicator() {

    //индикатор становится активным так:
    //текущий отступ контейнера делим на ширину одного слайда
    //получаем число которое будет соответсвовать номеру индикатора
    //например  отступ контейнера 0/щирину то номер индикатора 0
    //если отступ -675px/ширина(675) = 1(значить слайдер прокрутитили на один слайд)
    //индикатору с индексом 1 присвоен класс active

    let index = Math.abs(parseInt(getComputedStyle(slider).marginLeft));

    for (let unsetInd = slider.parentNode.getElementsByTagName('li'), j = 0, lj = unsetInd.length; j < lj; j++) {
        unsetInd[j].classList.remove('active');
    }
    slider.parentNode.getElementsByTagName('li')[index / currentWidth].classList.add('active');
}


function dragStart() {

    let startX = event.clientX;
    let params = {
        currentMargin: null,
        maxMargin: currentWidth * slider.getElementsByTagName('img').length - currentWidth,
        imgLength: slider.getElementsByTagName('img').length,
    };

    function currentMarginFn() {
        let x = getComputedStyle(slider);
        return params.currentMargin = parseInt(x.marginLeft);
    }

    event.preventDefault();

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', moveEnd);


    function mouseMove() {
        let move = startX - event.clientX;
        if (((slider.style.marginLeft = -move + params.currentMargin) < 0) && ((slider.style.marginLeft = -move + params.currentMargin) > -params.maxMargin)) {
            slider.style.marginLeft = -move + params.currentMargin + 'px';
        }
    }

    function moveEnd() {
        slider.classList.add('transition');// добавим transition после того как сладйр отпустили, раньше нельзя, будет не корректное перетаскивание мышкой

        let endX = event.clientX;

        document.removeEventListener('mousemove', mouseMove);

        if (endX < startX) {
                                //выясним напрваление разницей точки в которой был mousedown и mouseup
                                //если точка старта по X например больше точки конца, значить танут влево
                                //выясняем сколько уже протянуто, и сколько осталось
                                //остаток присваиваем в свойство marginLeft
            if (params.currentMargin !== -params.maxMargin) {
                let left = currentWidth - params.currentMargin;
                slider.style.marginLeft = -left + 'px';
            }
            else {
                slider.style.marginLeft = 0 + 'px';
            }
            }
        else if (endX > startX) {
            if (params.currentMargin !== 0) {
                let right = currentWidth + params.currentMargin;
                slider.style.marginLeft = right + 'px';
            }
            else {
                slider.style.marginLeft = -params.maxMargin + 'px';
            }
        }
        currentMarginFn(); //обновляем значение margin
        setTimeout(setIndicator, 190);// вызов присвоения нового индикатора должен быть слегка позже, что бы transition успел закончить
    }

    slider.classList.remove('transition'); //нужно снова удалить для красивого перетасивание указателем
    currentMarginFn();//обновляем значение margin
}





/***/ })
/******/ ]);