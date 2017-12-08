function drag(thisElem) {
    event.stopPropagation();

    for (var allElem = document.getElementsByClassName('object'), j = 0, lj = allElem.length; j < lj; j++) {
        allElem[j].classList.remove('selected');  //по клику на блок, сначала снимаю выделение со всех
        allElem[j].childNodes[1].style.display = 'none';
    }

    thisElem.classList.add('selected'); //  потом добаляю на кликнутый
    thisElem.childNodes[1].style.display = 'inline-block';

    thisElem.addEventListener('touchstart', dragStart);
    thisElem.addEventListener('mousedown', dragStart);

    function dragStart() {
        document.addEventListener('touchmove', touchMove);  // Эта функция вызываеться на сенсорных событиях
        document.addEventListener('touchend', moveEnd);
        document.addEventListener('mousemove', mouseMove);  // Эта функция работает на событиях мыши
        document.addEventListener('mouseup', moveEnd);      // Завершение  общее
    }

    function touchMove(e) {
        if (thisElem.classList.contains('selected')) {
            thisElem.style.left = Math.max(Math.min(e.changedTouches[0].pageX - 70, thisElem.parentNode.clientWidth - thisElem.clientWidth), 0) + 'px';
            console.log(thisElem.style.left);
            thisElem.style.top = Math.max(Math.min(e.changedTouches[0].pageY - 25, thisElem.parentNode.clientHeight - thisElem.clientHeight), 0) + 'px';
            console.log(thisElem.style.top);
        }
    }
    function mouseMove(e) {
        if (thisElem.classList.contains('selected')) {
            thisElem.style.left = Math.max(Math.min(e.pageX - 70, thisElem.parentNode.clientWidth - thisElem.clientWidth), 0) + 'px';
            console.log(thisElem.style.left);
            thisElem.style.top = Math.max(Math.min(e.pageY - 25, thisElem.parentNode.clientHeight - thisElem.clientHeight), 0) + 'px';
            console.log(thisElem.style.top);
        }
    }

    function moveEnd(e) {
        document.onmousemove = thisElem.onmouseup = null;
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('mousemove', mouseMove);
    }
}





document.getElementById('parent').addEventListener('click', function () {
    if (document.getElementById('parent').childNodes.length <= 3){
        var x = event.clientX - 50;
        var y = event.clientY - 20;
        var template = '<div class="object" style="left:'+ x +'px;top:'+ y +'px;" onclick="drag(this)">Lorem Ipsum<div class="close" onclick="remove(this)">X</div></div>';
        document.getElementById('parent').innerHTML += template;
    }
});


function remove(element) {
    element.parentNode.remove();
}













