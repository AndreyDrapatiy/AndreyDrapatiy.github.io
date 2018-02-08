import './style.scss'

var currentWidth = document.getElementsByClassName('carousel')[0].offsetWidth;
var slider;

document.addEventListener('mousedown', dragStart);

for (var currentSlider = document.getElementsByClassName('carousel'), j = 0, lj = currentSlider.length; j < lj; j++) {
    currentSlider[j].getElementsByClassName('content')[0].addEventListener('mousedown', function () {
        return slider = this;
    });
}

for (var image = document.getElementsByTagName('img'), j = 0, lj = image.length; j < lj; j++) {
    image[j].setAttribute('width', currentWidth + 'px');
}


function dragStart() {

    event.preventDefault();

    var currentMargin;
    var imgLength = slider.getElementsByTagName('img').length;
    var maxMargin = currentWidth * imgLength - currentWidth;
    var startX = event.clientX;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', moveEnd);

    function currentMarginFn() {
        var x = getComputedStyle(slider);
        return currentMargin = parseInt(x.marginLeft);
    }

    function mouseMove() {
        var move = startX - event.clientX;

        if (((slider.style.marginLeft = -move + currentMargin) < 0) && ((slider.style.marginLeft = -move + currentMargin) > -maxMargin)) {
            slider.style.marginLeft = -move + currentMargin + 'px';
        }
    }

    function moveEnd() {

        slider.classList.add('transition');

        var endX = event.clientX;

        document.removeEventListener('mousemove', mouseMove);

        if (endX < startX) {
            if (currentMargin !== -maxMargin) {
                var left = currentWidth - currentMargin;
                slider.style.marginLeft = -left + 'px';
            }
            else {
                slider.style.marginLeft = 0 + 'px';
            }
        }
        else if (endX > startX) {
            if (currentMargin !== 0) {
                var right = currentWidth + currentMargin;
                slider.style.marginLeft = right + 'px';
            }
            else {
                slider.style.marginLeft = -maxMargin + 'px';
            }
        }

        currentMarginFn();
    }
    slider.classList.remove('transition');

    currentMarginFn();

}



