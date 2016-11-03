function deepCopy(obj) {
    var clone = {};
    for (var key in obj) {
        if(typeof obj[key] === 'object'){
           clone[key] = deepCopy(obj[key]);
        }else{
           clone[key] = obj[key];
        }
    }
    return clone;
}
var oksana = {
    name: "Oksana",
    age: 24,
    mood: {
       happy:true,
       sad:false
    }
};

var maryna = (deepCopy(oksana));

maryna.name = "Maryna";
maryna.mood.happy = false;
maryna.mood.sad = true;

console.log(oksana);
console.log(maryna);

console.log(oksana.mood.happy === maryna.mood.happy);
console.log(oksana.mood === maryna.mood);