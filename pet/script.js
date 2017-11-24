
function pet(name) {
    this.name = name;
    this.health = 80;   // default values in start moment
    this.happiness = 50;
    this.satiety = 30;
    this.fatigue = 50;
}

var massDiv = document.getElementById('mass');//вывод сообщений сюда
var massage =document.createElement('p'); //текст сообщения сюда


pet.prototype.healthStatus = function () {
    if (this.health < 10 || this.satiety < 10) {
        alert("WASTED");
        location.reload()
    }
};

pet.prototype.upDateStatus = function () {
    var statusDiv = document.getElementById('status');
    var statusTemplate = '<div class="col-md-4 health" id="health"> Health '+"</br>"+ this.health +'</div>' +
        '<div class="col-md-4 satiety" id="satiety"> Satiety '+"</br>" + this.satiety +'</div>'+
        '<div class="col-md-4 happiness" id="happy"> Happy ' +"</br>" + this.happiness +'</div>';
        statusDiv.innerHTML = statusTemplate;
};

pet.prototype.wellcome = function () { // работает 1 раз после запуска
    var template = '<img src="src/saluting.gif">';
    document.getElementById('animation').innerHTML = template;
    massage.innerHTML = "Hello! My name is 'Name', I will be your pet";
    massDiv.insertBefore(massage, massDiv.childNodes[0]);
};

pet.prototype.normal = function () {  // анимация по умолчанию
    var template = '<img src="src/normal.gif">';
    document.getElementById('animation').innerHTML = template;
};



var disbleBtn = function () {
    for (var btn = document.getElementsByTagName('BUTTON'),
             j = 0, lj = btn.length; j < lj; j++) btn[j].disabled = true;
};
var enableBtn = function () {
    for (var btn = document.getElementsByTagName('BUTTON'),
             j = 0, lj = btn.length; j < lj; j++) btn[j].disabled = false;
};

pet.prototype.updateColor = function () {

    var satiety = document.getElementById('satiety'); //если удалить эту строку, ничего не меняется
    var health = document.getElementById('health');
    var happy = document.getElementById('happy');
    console.log(this.satiety);                         // а тут все ок
    if (this.satiety <= 10){
        satiety.style.color = '#FF5722';

    }
    else if (this.satiety <= 30){
        document.getElementById('satiety').style.color = '#FF9800';
    }
    else satiety.style.color = '#4CAF50';

    if (this.health <= 10){
        health.style.color = '#FF5722';
    }
    else if (this.health <= 30){
        document.getElementById('satiety').style.color = '#FF9800';
    }
    else health.style.color = '#4CAF50';

    if (this.happiness <= 10){
        satiety.style.color = '#FF5722';
    }
    else if (this.happiness <= 30){
        document.getElementById('satiety').style.color = '#FF9800';
    }
    else happy.style.color = '#4CAF50';
};



pet.prototype.eat = function () {
    if (this.satiety < 80) {

        var template = '<img src="src/eat.gif">';
        document.getElementById('animation').innerHTML = template;
        massage.innerHTML = "Om Nom Nom";
        massDiv.insertBefore(massage, massDiv.childNodes[0]);

        this.satiety += 10;
        this.fatigue += 10;
    }
    else {
        massage.innerHTML = "I do not want to eat now";
        massDiv.insertBefore(massage, massDiv.childNodes[0]);
    }
    this.healthStatus()

};




pet.prototype.walk = function () {
    var random = Math.floor(Math.random() * (100 - 1));
    function football() {
        var template = '<img src="src/image049.gif">';
        document.getElementById('animation').innerHTML = template;
    }
    function jump(){
        var template = '<img src="src/image029.gif">';
        document.getElementById('animation').innerHTML = template;
    }
    if (random <= 5) { // 5% что он здохнет во время прогулки
        alert("Ohh A large balcony fell on your pet, He is dead! Game will restart");
        location.reload();
    }
    else {

        football();
        setTimeout(jump,4000);
        massage.innerHTML = "YaHoo! So interesting and i am steel alive";
        massDiv.insertBefore(massage, massDiv.childNodes[0]);
        this.happiness += 10;
        this.satiety -= 20;
        this.fatigue -= 20;
        if (this.satiety < 40) {

        }
        else if (this.fatigue < 40) {
            massage.innerHTML = "I'm very tired, I want to sleep";
            massDiv.insertBefore(massage, massDiv.childNodes[0]);
        }
    }
    this.healthStatus()

};

pet.prototype.sleep = function () {
    if (this.fatigue < 50) {
        var template = '<img src="src/sleep.gif">';
        document.getElementById('animation').innerHTML = template;
        var i = 10;
        (function () {
            if (i > 0) {
                massage.innerHTML = "Wait until I'm sleeping " + i + " seconds";
                massDiv.insertBefore(massage, massDiv.childNodes[0]);
                i--;
                setTimeout(arguments.callee, 1000);
            } else {
                massage.innerHTML = "I am with you again";
                massDiv.insertBefore(massage, massDiv.childNodes[0]);

            }
        })();
    }
    else {
        massage.innerHTML = "I don want sleep now! go for walk with me!";
        massDiv.insertBefore(massage, massDiv.childNodes[0]);
    }
    this.healthStatus()
};


var pet = new pet(pet);



window.onload = function () {
    disbleBtn();
    pet.upDateStatus();
    pet.updateColor();
    pet.wellcome();
    setTimeout(pet.normal,4000);
    setTimeout(enableBtn, 4000);

};




document.getElementById('eat').addEventListener('click', function () {
    clearTimeout(pet.normal());
    disbleBtn();
    pet.eat();
    pet.upDateStatus();
    pet.updateColor();
    setTimeout(pet.normal, 9000);
    setTimeout(enableBtn, 9000);


});

document.getElementById('sleep').addEventListener('click', function () {
    clearTimeout(pet.normal());
    disbleBtn();
    pet.sleep();
    pet.upDateStatus();
    pet.updateColor();
    setTimeout(pet.normal, 10000);
    setTimeout(enableBtn, 10000);
});

document.getElementById('walk').addEventListener('click', function () {
    clearTimeout(pet.normal());
    disbleBtn();
    pet.walk();
    pet.upDateStatus();
    pet.updateColor();
    setTimeout(pet.normal, 8200);
    setTimeout(enableBtn, 8200);
});

