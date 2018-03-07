import './style.scss'

var currentWidth = document.getElementsByClassName('carousel')[0].offsetWidth;// текущий размер одного слайдера в браузере
var slider; //тут хранится текущий слайдер над которым водят указателем

document.addEventListener('mousedown', function (event) {
   var target = event.target; // где был клик?

    if (target.tagName === 'IMG') {
        dragStart()
    }
    else if (target.tagName === 'LI') {
        moveToSlide(target);
    }
});

for (var currentSlider = document.getElementsByClassName('carousel'), j = 0, lj = currentSlider.length; j < lj; j++) {

    for (var i = 0; i < currentSlider[j].getElementsByTagName('img').length; i++) {
        //добывим индикаторы к слайдерам в от количества картинок в них
        currentSlider[j].getElementsByTagName('ul')[0].innerHTML += '<li class="indicator" id="' + i + '"><a href="#"></a></li>';
        currentSlider[j].getElementsByTagName('li')[0].classList.add('active');
    }
    currentSlider[j].getElementsByClassName('content')[0].addEventListener('mousedown', function () {
        return slider = this;
    });
}

for (var image = document.getElementsByTagName('img'), j = 0, lj = image.length; j < lj; j++) {
    image[j].setAttribute('width', currentWidth + 'px');
}

function moveToSlide(target) {
    //перемещаем к слайду по индикатору
    target.parentNode.parentNode.getElementsByClassName('content')[0].style.marginLeft = -(target.id * currentWidth) + 'px';
    //после перемещения снимаем active со всех индикаторов и присваивам на новый
    for (var x = target.parentNode.getElementsByTagName('LI'), j = 0, lj = x.length; j < lj; j++) {
        x[j].classList.remove('active');
    }
    target.classList.add('active');
}

function setIndicator() {

    //индикатор становится активным так:
    //текущий отступ контейнера делим на ширину одного слайда
    //получаем число которое будет соответсвовать номеру индикатора
    //например  отступ контейнера 0/щирину то номер индикатора 0
    //если отступ -675px/ширина(675) = 1(значить слайдер прокрутитили на один слайд)
    //индикатору с индексом 1 присвоен класс active


    var index = Math.abs(parseInt(getComputedStyle(slider).marginLeft));

    for (var unsetInd = slider.parentNode.getElementsByTagName('li'), j = 0, lj = unsetInd.length; j < lj; j++) {
        unsetInd[j].classList.remove('active');
    }
    slider.parentNode.getElementsByTagName('li')[index / currentWidth].classList.add('active');
}


function dragStart() {
    console.log('start');
    var startX = event.clientX;
    var params = {
        currentMargin: null,
        maxMargin: currentWidth * slider.getElementsByTagName('img').length - currentWidth,
        imgLength: slider.getElementsByTagName('img').length
    };

    function currentMarginFn() {
        var x = getComputedStyle(slider);
        return params.currentMargin = parseInt(x.marginLeft);
    }

    event.preventDefault();

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', moveEnd);

    function mouseMove() {
        var move = startX - event.clientX;
        if (((slider.style.marginLeft = -move + params.currentMargin) < 0) && ((slider.style.marginLeft = -move + params.currentMargin) > -params.maxMargin)) {
            slider.style.marginLeft = -move + params.currentMargin + 'px';
        }
    }

    function moveEnd() {
        slider.classList.add('transition');// добавим transition после того как сладйр отпустили, раньше нельзя, будет не корректное перетаскивание мышкой

        var endX = event.clientX;

        document.removeEventListener('mousemove', mouseMove);

        if (endX <= startX) {
            //выясним напрваление разницей точки в которой был mousedown и mouseup
            //если точка старта по X например больше точки конца, значить танут влево
            //выясняем сколько уже протянуто, и сколько осталось
            //остаток присваиваем в свойство marginLeft
            if (params.currentMargin !== -params.maxMargin) {
                var left = currentWidth - params.currentMargin;
                slider.style.marginLeft = -left + 'px';
            }
            else {
                slider.style.marginLeft = 0 + 'px';
            }
        }
        else if (endX > startX) {
            if (params.currentMargin !== 0) {
                var right = currentWidth + params.currentMargin;
                slider.style.marginLeft = right + 'px';
            }
            else {
                slider.style.marginLeft = -params.maxMargin + 'px';
            }
        }
        currentMarginFn(); //обновляем значение margin
        setTimeout(setIndicator, 250);// вызов присвоения нового индикатора должен быть слегка позже, что бы transition успел закончить
        document.removeEventListener('mouseup', moveEnd);
    }
    slider.classList.remove('transition'); //нужно снова удалить для красивого перетасивание указателем
    currentMarginFn();//обновляем значение margin
}



