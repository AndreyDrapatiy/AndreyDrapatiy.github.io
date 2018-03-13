var slider = document.getElementById('slider');
var indicators = document.getElementById('indicators');

for (var i = 0; i < slider.getElementsByClassName('item').length; i++){ // генерируем индикаторы, от количества слайдов
    document.getElementById('indicators').innerHTML += '<li class="indicator"></li>';
    document.getElementById('indicators').getElementsByClassName('indicator')[0].classList.add('indicator-active');
}

function nextItem(direction) { // принимает направлние, по умолчанию "next"

    var params = {
        startItem: slider.getElementsByClassName('active')[0],
        startIndicator: indicators.getElementsByClassName('indicator-active')[0],
        itemsLength: slider.getElementsByClassName('item').length,
        indicatorLength: slider.getElementsByClassName('item').length
    };

    if (direction === undefined  || direction === 'next') {

        if ((params.startItem.nextElementSibling && params.startIndicator.nextElementSibling) !== null ) {

            params.startItem.classList.remove('active');
            params.startIndicator.classList.remove('indicator-active');

            params.startItem.nextElementSibling.classList.add('active');
            params.startIndicator.nextElementSibling.classList.add('indicator-active');

        }
        else{

            params.startItem.classList.remove('active');
            params.startIndicator.classList.remove('indicator-active');

            slider.getElementsByClassName('item')[0].classList.add('active');
            indicators.getElementsByClassName('indicator')[0].classList.add('indicator-active')
        }
    }

    else if (direction === 'prev') {

        if ((params.startItem.previousElementSibling && params.startIndicator.previousElementSibling) !== null ) {

            params.startItem.classList.remove('active');
            params.startIndicator.classList.remove('indicator-active');

            params.startItem.previousElementSibling.classList.add('active');
            params.startIndicator.previousElementSibling.classList.add('indicator-active');

        }
        else{

            slider.getElementsByClassName('item')[params.itemsLength - 1].classList.add('active');
            indicators.getElementsByClassName('indicator')[params.indicatorLength - 1].classList.add('indicator-active');

            params.startItem.classList.remove('active');
            params.startIndicator.classList.remove('indicator-active');

        }
    }
}


document.getElementById('slideshow').addEventListener('click', function () {
    var slideShow = setInterval(function () {

        if(document.getElementById('slideshow').checked){
            nextItem()
        }
        else clearInterval(slideShow)

    }, 3500);
});

