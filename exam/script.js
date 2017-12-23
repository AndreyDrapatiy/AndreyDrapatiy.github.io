var detectClickedElem;

document.querySelector("table").addEventListener('click', function () {
    var thisElemId = event.target.id;
    detectClickedElem = thisElemId;
    return detectClickedElem;
});



for (var i=0; i<31; i++) {
    var row = document.querySelector("table").insertRow(-1);
    for (var j=0; j<31; j++) {
        var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
        row.insertCell(-1).innerHTML = i&&j ? "<input id='"+ letter+i +"' onblur='addItem()' />" : i||letter;
    }
}


for (var x = 0; x < localStorage.length; x++) {
    keyId = localStorage.key(x);
        console.log(keyId + " = " + localStorage.getItem(keyId));

        var unserialObj = JSON.parse(localStorage.getItem(keyId));

        var cellContent = unserialObj['cellValue'];
        var cellColor = unserialObj['cellColor'];
        var cellBackground = unserialObj['cellBackground'];
        var cellFontSize = unserialObj['cellFontSize'];

        document.getElementById(keyId).value = cellContent;
        document.getElementById(keyId).style.color = cellColor;
        document.getElementById(keyId).style.backgroundColor = cellBackground;
        document.getElementById(keyId).style.fontSize = cellFontSize;
}


function addItem() {
    var key = detectClickedElem;

    var cellValue = document.getElementById(detectClickedElem).value;
    var style = getComputedStyle(document.getElementById(detectClickedElem));

    var obj = {
        cellValue:document.getElementById(detectClickedElem).value,
        cellColor:style.color,
        cellBackground:style.backgroundColor,
        cellFontSize:style.fontSize
    };

    var serialObj = JSON.stringify(obj);

    if (cellValue !== ''){
        localStorage.setItem(key, serialObj);
    }
    else if(cellValue === ''){
        localStorage.removeItem(key);
    }
}

function setStyle(elem) {

    if (elem.classList.contains('color-items')){
        var setColorTo = elem.getAttribute('data-atr');
        document.getElementById(detectClickedElem).style.color = setColorTo;
    }
    else if (elem.classList.contains('background-items')){
        var setBackroundTo = elem.getAttribute('data-atr');
        document.getElementById(detectClickedElem).style.backgroundColor = setBackroundTo;
    }
    else if (elem.classList.contains('font-items')){
        var setfontSizeTo = elem.getAttribute('data-atr');
        document.getElementById(detectClickedElem).style.fontSize = setfontSizeTo;
    }

    addItem();
}



