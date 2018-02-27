// //sidebar-left vertical centering//
// function verticalCentering() {
//     var height = window.innerHeight;
//     var barHeight = 320; // form height
//     var margin = ((height - barHeight) * 0.5) - 70;
//     if(height >= 320){
//         document.getElementById('sidebar-nav').style.marginTop =  margin+'px';
//     }
//     else {
//         document.body.style.paddingTop =  '0px';
//     }
// }
// verticalCentering();
// //sidebar-left vertical centering//




$.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
};

$('#datepickerair').datepicker({
    language: 'en',
    position: 'bottom center',
    offset:20
});


// datepicker//

/*Side Bar left open-close*/

function sidebarOpen() {

    var anchor = document.getElementById("openanchor");

    if(anchor.classList.contains("close-item-left")){
        document.getElementById('sidebar-left').classList.add("sidebar-left-open-shadow");
        document.getElementById('sidebar-left').classList.add("sidebar-left-open-mobile");
        document.getElementById('hamburger').classList.toggle("is-active");
        for (var tagsLI = document.getElementById('sidebar-nav').getElementsByTagName ('SPAN'),
                 j = 0, lj = tagsLI.length; j < lj; j++) tagsLI [j].className = 'open-item-left';

        for (var tagsLI = document.getElementById('sidebar-nav').getElementsByTagName ('I'),
                 j = 0, lj = tagsLI.length; j < lj; j++) tagsLI [j].style.display = "none";


    }
    else if (document.getElementById('hamburger').classList.contains("is-active")){
      document.getElementById('sidebar-left').classList.remove("sidebar-left-open-shadow");
      document.getElementById('sidebar-left').classList.remove("sidebar-left-open-mobile");
      document.getElementById('hamburger').classList.toggle("is-active");
        for (var tagsLI = document.getElementById('sidebar-nav').getElementsByTagName ('SPAN'),
              j = 0, lj = tagsLI.length; j < lj; j++) tagsLI [j].className = 'close-item-left';

        for (var tagsLI = document.getElementById('sidebar-nav').getElementsByTagName ('I'),
                 j = 0, lj = tagsLI.length; j < lj; j++);tagsLI[j].style.display = "inline-block";
    }

}

/*Side Bar left open-close*/

/*Side Bar Right open-close*/

    function sidebarRightOpen() {

        if (document.getElementById('hamburger').classList.contains("is-active")){
           setTimeout(sidebarOpen, 50)
        }
        var sidebarRight = document.getElementById("sidebar-right");
        document.getElementsByClassName('bell')[0].classList.add('active-bell');

        document.getElementById("tossing").classList.remove("tossing");
        document.getElementById("blink").classList.remove("blink");

        sidebarRight.classList.add("sidebar-right-open");


       

        document.onmousewheel = function () {
            return false
        };

            var comments = document.getElementById('comments');
            $(comments).bind('mousewheel', function(event) {
                if (event.originalEvent.wheelDelta >= 0) {
                    document.getElementById('comments').scrollBy(0,-12)  //добавляем свой ивент колеса мышки для скролла блока
                } else {
                    document.getElementById('comments').scrollBy(0,12);
                }
            });



        jQuery(function($){
            $(document).mouseup(function (e){ // событие клика по веб-документу
                var div = $("#sidebar-right"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    sidebarRight.classList.remove("sidebar-right-open");
                    document.getElementsByClassName('bell')[0].classList.remove('active-bell');

                    document.onmousewheel = function () {
                        return true;
                    }

                }
            });
        });

    }


    function sidebarRightClose() {
        var sidebarRight = document.getElementById("sidebar-right");
        if (sidebarRight.classList.contains("sidebar-right-open") ){
            sidebarRight.classList.remove("sidebar-right-open");
            document.getElementsByClassName('bell')[0].classList.remove('active-bell');
            document.onmousewheel = function () {
                return true;
            }

        }
    }

/*Side Bar Right open-close*/

// toogle rotation when some list open or close//
var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle(id) {
    var square = document.getElementById(id).firstChild.classList;
    if (square.contains(downClass)) {
        square.remove(downClass);
        square.add(upClass);
    }
    else {
        square.add(downClass);
        square.remove(upClass);
    }
}
// toogle rotation when some list open or close//


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


jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        e.preventDefault();

        var dropdown = $(this).next('.dropdown');

        if (dropdown.hasClass('dropdown--open')) {
            dropdown.removeClass('dropdown--open');
        } else {
            $('.dropdown').removeClass('dropdown--open');
            dropdown.addClass('dropdown--open');
        }

    });
});



// table sorting//
$(document).ready(function()
    {
        $(".table").tablesorter({
            cssAsc: 'headerSortUp',
            cssDesc: 'headerSortDown',
            cssHeader: 'th-header',
            headers: {0:{sorter:false},   3: { sorter: false}, 4: {sorter: false} }
        });
    }
);

// table sorting//



// sorting right sightbar //


//checking checkboxes//
function checkThis(param) {
    param.parentNode.parentNode.parentNode.classList.toggle('checked-row');
    param.nextElementSibling.classList.toggle('no-checkbox-border');
}
function checkAll() {
    if(document.getElementById('check-all').checked === true ){
        for (var checkbox = document.getElementsByClassName('check-box'), j = 0, lj = checkbox.length; j < lj; j++) {
            checkbox [j].checked = true;
            checkbox [j].nextElementSibling.classList.add('no-checkbox-border');
            checkbox [j].parentNode.parentNode.parentNode.classList.add('checked-row');
        }
    }
    else for (var checkbox = document.getElementsByClassName('check-box'), j = 0, lj = checkbox.length; j < lj; j++) {
        checkbox [j].checked = false;
        checkbox [j].nextElementSibling.classList.remove('no-checkbox-border');
        checkbox [j].parentNode.parentNode.parentNode.classList.remove('checked-row');
    }
}
//checking checkboxes//

//changing date input size//
function changeDateInputSize() {
    var atr = document.getElementById('datepickerair').value;
    var length = atr.length * 9;
    document.getElementById('datepickerair').style.width = length+'px';
}
//changing date input size//



// window.addEventListener("resize", function () {
//     var screenWidth = innerWidth;
//     if (screenWidth < 1025){
//         document.getElementById('datepickerair').setAttribute('type', 'date');
//     }
//     else  document.getElementById('datepickerair').setAttribute('type', 'text');
// });



