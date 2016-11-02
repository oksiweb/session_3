/*
    Сравнение объектов по свойству
    Напишите функцию compareObjects, которая принимает 2 объекта и название числового свойства,
    по которому нужно выполнить сравнение объектов, и выводит в консоль свойство name того объекта,
    у которого значение переданного свойства больше.
    Создайте один объект с помощью литерала, второй через конструктор.
    Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/

function compareObjects(obj1, obj2, property){
    if(obj1[property]>obj2[property]){
        return obj1.name;
    } else if(obj1[property]<obj2[property]){
        return obj2.name;
    } else{
        return 'Properties are equal';
    }
}
var hero = {
    name: 'Evgeniy Onegin',
    age: 26
};
function Constructor(name,age) {
    this.name = name;
    this.age = age;
}
var heroine = new Constructor('Tatiana Larina', 17);

console.log(compareObjects(hero,heroine,'age'));

/*
Поиск любимой песни
Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
played - количество раз песня была проиграна (определить случайным образом), name - имя песни
Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает
следующую информацию: название песни, сколько раз песня была проиграна, индекс песни в коллекции.
Вызовите функцию favoriteSong и передайте ей созданную коллекцию
*/
var songs = [];

songs[0] = {
    played: 3,
    name: "Masterpiece"
};
songs[1] = {
    played: 2,
    name: "JavaScript Coder"
};
songs[2] = {
    played: 10,
    name: "I Love You Like a Love Song, Baby"
};
songs[3] = {
    played: 4,
    name: "Hit My Heart"
};
songs[4] = {
    played: 25,
    name: "Fairytale Gone Bad"
};

function favoriteSong(collection) {
    var allsongs="";
    collection.forEach((item,i) => {
        allsongs += 'Song\'s name is ' + collection[i].name + '. Played: ' + collection[i].played + ' times. Index: ' + i + '\n';
    });
    return allsongs;
}

console.log(favoriteSong(songs));

/*
    Класс калькулятор
    Опишите конструктор объектов (класс) Calculator с двумя методами:
    add - принимает число и прибавляет его к предыдущему,
    getCurrentSum - принимает индекс и возвращает результирующее число на шаге указынном в индексе
    (если индекса нет, возвращает текущую сумму)
    Создайте два экземпляра класса Calculator
    Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
    Выведите в консоль сумму:
    всех чисел всех объектов, убедитесь (56)
    сумму чисел всех объектов на втором шаге (28)
    для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
*/

function Calculator(){
    var args = [...arguments]; // to convert arguments to a real Array
    this.add = function(a){
        if (a !== undefined) {
            args[args.length-1] = args[args.length-1]+a;
            // return args;  // not specified in the task;
        }
    };
    this.getCurrentSum = function(index){
        if (index !== undefined) {
            var stepArgs = args.slice();
            stepArgs.length = index;
            return stepArgs.reduce((sum,item) => sum+item);
        } else{
            return args.reduce((sum,item) => sum+item);
        };
    };
};

var object1 = new Calculator(3,8,11);
var object2 = new Calculator(5,12,17);


console.log(object1.getCurrentSum(2)+object2.getCurrentSum(2));
console.log(object1.getCurrentSum(3)+object2.getCurrentSum(3));

console.log(object1.getCurrentSum(3));
console.log(object1.add(8));
console.log(object1.getCurrentSum());
console.log(object1.getCurrentSum(4));




