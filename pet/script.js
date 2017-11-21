


function pet(name) {
    this.name = name;
    this.health = 80;   // default values in start moment
    this.happiness = 50;
    this.satiety = 30;
    this.fatigue = 50;

    this.healthStatus = function () {
        if (this.health < 10 || this.satiety < 10) {
            alert("WASTED");
            location.reload()
        }
    };
    this.upDateStatus = function () {
        var statusDiv = document.getElementById('status');
        var statusTemplate = '<div class="col-md-4 health">Healthe:'+ this.health +'</div>' +
                            '<div class="col-md-4 satiety">Satiety:' + this.satiety +'</div>'+
                            '<div class="col-md-4 happiness">Happy:' + this.happiness +'</div>';
        statusDiv.innerHTML = statusTemplate;
    }
}





var massDiv = document.getElementById('mass');//вывод сообщений сюда

pet.prototype.wellcome = function () { // работает 1 раз после запуска
    var template = '<img src="src/saluting.gif">';
    document.getElementById('animation').innerHTML = template;
    massDiv.innerHTML = "Hello! My name is 'Name', I will be your pet";
};

pet.prototype.normal = function () {  // анимация по умолчанию
    var template = '<img src="src/normal.gif">';
    document.getElementById('animation').innerHTML = template;
};


pet.prototype.eat = function () {
    if (this.satiety < 80) {

        var template = '<img src="src/eat.gif">';
        document.getElementById('animation').innerHTML = template;
        massDiv.innerHTML = "Om Nom Nom";
        this.satiety += 20;
        this.fatigue += 20;
    }
    else {
        massDiv.innerHTML = "I do not want to eat now";
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

        massDiv.innerHTML = "YaHoo! So interesting and i am steel alive";
        this.happiness += 10;
        this.satiety -= 20;
        this.fatigue -= 20;
        if (this.satiety < 40) {
            massDiv.innerHTML = "I want eat now";
        }
        else if (this.fatigue < 20) {
            massDiv.innerHTML = "I'm very tired, I want to sleep"
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
                massDiv.innerHTML = "Wait until I'm sleeping " + i + " seconds";
                i--;
                setTimeout(arguments.callee, 1000);
            } else {
                massDiv.innerHTML ='I am with you again ';
            }
        })();
    }
    else {
       massDiv.innerHTML = "I don want sleep now! go for walk with me!"
    }
    this.healthStatus()
};



var pet = new pet(pet);


window.onload = pet.upDateStatus();
window.onload = function () {
   pet.wellcome();
   setTimeout(pet.normal,5000)
};



document.getElementById('eat').addEventListener('click', function () {
    clearTimeout(pet.normal());
    pet.eat();
    pet.upDateStatus();
    setTimeout(pet.normal, 9000);

});
document.getElementById('sleep').addEventListener('click', function () {
    clearTimeout(pet.normal());
    pet.sleep();
    pet.upDateStatus();
    setTimeout(pet.normal, 10000);

});
document.getElementById('walk').addEventListener('click', function () {
    clearTimeout(pet.normal());
    pet.walk();
    pet.upDateStatus();
    setTimeout(pet.normal, 8200);
});

