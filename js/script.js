var n = prompt('Загадайте число');
var m = prompt('Загадате еще одно');

alert (n*m);

var order;

var name = prompt('Укажите ваше имя');
var seckond_name = prompt('Укажите вашу фамилию');
var performance = prompt('Укажите название спектакля');
var theatre = prompt('Укажите театр');
var sector = prompt('Укажите ваш сектор');
var row = prompt('Укажите ваш ряд');
var place = prompt('Укажите ваше место');
var time = prompt('Укажите время спектакля');

order = 'Имя: ' + name;
order += '\nФамилия: ' + seckond_name;
order += '\nСпектакль: ' + performance;
order += '\nТеатр: ' + theatre;
order += '\nСектор: ' + sector;
order += '\nРяд: ' + row;
order += '\nМесто: ' + place;
order += '\nВремя: ' + time;

console.log(order);